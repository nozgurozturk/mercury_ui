
import * as React from 'react'
import classNames from 'classnames'
// Types
import { size, status } from './NumberInput.types'
// Style
import '../../styles/components/_numberinput.scss'

interface INumber extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

interface NumberInputProps extends INumber {
  inputSize?: size,
  helperText?: React.ReactNode,
  label?: React.ReactNode,
  loading?: boolean,
  status?: status,
  errorMessage?: React.ReactNode,
  prefix?: string,
  suffix?: string,
  inputRef?: React.Ref<any>,
  className?: string,
}

interface NumberInputState {
  value?: number
}

const capMin = (min, value) =>
  isNaN(min) || (!min && min !== 0) || isNaN(value) || (!value && value !== 0)
    ? value
    : Math.max(min, value);

const capMax = (max, value) =>
  isNaN(max) || (!max && max !== 0) || isNaN(value) || (!value && value !== 0)
    ? value
    : Math.min(max, value);

const mergeRefs = (...refs) => el => {
  refs.forEach(ref => {
    if (typeof ref === 'function') {
      ref(el);
    } else if (Object(ref) === ref) {
      ref.current = el;
    }
  });
};

export class NumberInput extends React.PureComponent<NumberInputProps, NumberInputState> {

  private numberInputRef: any;
  private setNumberInputRef: React.Ref<any> = React.createRef()

  static getDerivedStateFromProps({ min, max, value = 0 }, state) {
    const { prevValue } = state;
    return prevValue === value
      ? 0
      : {
        value: capMax(max, capMin(min, value)),
        prevValue: value,
      };
  }


  constructor(props: NumberInputProps) {
    super(props);
    let value = props.value;
    value = value === undefined ? 0 : Number(value.toString());
    if (props.min || props.min === 0) {
      value = Math.max(Number(props.min.toString()), value);
    }
    this.state = { value };

    this.numberInputRef = null;

    this.setNumberInputRef = element => {
      this.numberInputRef = element;
    };
  }

  private handleChange = evt => {
    const { disabled, onChange } = this.props;
    if (!disabled) {
      evt.persist();
      evt.target = this.numberInputRef
      const value = evt.target.value
      this.setState(
        {
          value,
        },
        () => {
          if (onChange) {
            onChange(evt);
          }
        }
      );
    }
  };

  private handleArrowClick = (evt, direction) => {
    let value = this.state.value
    const { disabled, min = 0, max = 100, step = 1, onChange, onClick } = this.props;
    const conditional =
      direction === 'dec'
        ? (min !== undefined && value > min) || min === undefined
        : (max !== undefined && value < max) || max === undefined;

    if (!disabled && conditional) {
      value = direction === 'dec' ? Number(value.toString()) - Number(step.toString()) : Number(value.toString()) + Number(step.toString());
      value = capMax(max, capMin(min, value));
      evt.persist();
      evt.target = this.numberInputRef
      this.setState(
        {
          value,
        },
        () => {
          onClick && onClick(evt);
          onChange && onChange(evt);
        }
      );
    }
  };

  public render() {
    const {
      inputSize = "default",
      helperText,
      label,
      status,
      errorMessage,
      loading,
      disabled,
      onChange = this.handleChange,
      prefix,
      value,
      suffix,
      className,
      inputRef,
      ...props
    } = this.props

    const inputClasses = classNames(
      'mrc-number-input',
      (disabled || loading) && 'mrc-input-disabled',
      status && `mrc-${status}`,
      className,
    )
    const wrapperClasses = classNames(
      'mrc-number-input__wrapper',
      inputSize && `mrc-input-${inputSize}`,
    )

    return (
      <div className={inputClasses}>
        {label && <label className="mrc-number-input__label">{label}</label>}
        {helperText && <div className="mrc-number-input__helper">{helperText}</div>}
        <div className={wrapperClasses}>
          <input ref={mergeRefs(this.setNumberInputRef, inputRef)} value={this.state.value} onChange={this.handleChange} disabled={disabled || loading} type="number" pattern="[0-9]*" {...props} />
          <div>
            <button onClick={(e) => this.handleArrowClick(e, 'inc')}>+</button>
            <button onClick={(e) => this.handleArrowClick(e, 'dec')}>-</button>
          </div>
        </div>
        {
          status === 'error' && errorMessage &&
          <div className="mrc-field-message">
            {errorMessage}
          </div>
        }
      </div>
    )
  }
}

// export const NumberInput: React.ForwardRefExoticComponent<NumberInputProps> = React.forwardRef((props: NumberInputProps, ref?: React.Ref<any>) => (
//   <BaseNumberInput {...props} inputRef={ref} />
// ))