
import * as React from 'react'
import cx from 'classnames'
// Interface
import { IInput } from '../../interfaces'
// Types
import { size, status } from './NumberInput.types'

interface NumberInputProps extends IInput {
  /**
   * Size of input
   * @default 'default'
   */
  inputSize?: size
  /**
   * Explanation Text of input
   */
  helperText?: React.ReactNode
  /**
   * Label of input
   */
  label?: React.ReactNode
  /**
   * If true, - button is rendered left side, + button is rendered right side of component
   * @default false
   */
  mobile?: boolean
  /**
   * If true, input will be disabled
   */
  loading?: boolean
  /**
   * Validation statuses
   */
  status?: status
  /**
   * When status is equal to error, shows this message
   */
  errorMessage?: React.ReactNode
  /**
   * External ref object
   */
  inputRef?: React.Ref<any>
  /**
   * Additional classes
   */
  className?: string
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
  private numberInput: HTMLInputElement;
  private setNumberInputRef: any;

  public static defaultProps = {
    inputSize: 'default',
    mobile: false,
  }

  constructor(props: NumberInputProps) {
    super(props);
    let value = props.value;
    value = value === undefined ? 0 : Number(value.toString());
    if (props.min || props.min === 0) {
      value = Math.max(Number(props.min.toString()), value);
    }
    this.state = { value };

    this.numberInput = null;
    this.setNumberInputRef = element => {
      this.numberInput = element;
    };

  }

  public setNativeValue = (element, value) => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value'
    ).set;
    nativeInputValueSetter.call(element, value);
    const inputEvent = new Event('input', { bubbles: true });
    element.dispatchEvent(inputEvent)

  }

  public handleArrowClick = (evt, direction) => {
    let value = this.props.value
    const { disabled, min = 0, max = 100, step = 1 } = this.props;
    const conditional =
      direction === 'dec'
        ? (min !== undefined && value > min) || min === undefined
        : (max !== undefined && value < max) || max === undefined;

    if (!disabled && conditional) {
      value = direction === 'dec' ? Number(value.toString()) - Number(step.toString()) : Number(value.toString()) + Number(step.toString());
      value = capMax(max, capMin(min, value));
      this.setNativeValue(this.numberInput, value);
    }
  };

  public render() {
    const {
      inputSize,
      helperText,
      label,
      status,
      errorMessage,
      mobile,
      loading,
      disabled,
      className,
      inputRef,
      ...props
    } = this.props

    const inputClasses = cx(
      'm-input__number',
      (disabled || loading) && 'm-input--disabled',
      status && `m-${status}`,
      className,
    )
    const wrapperClasses = cx(
      'm-input__number__wrapper',
      inputSize && `m-input--${inputSize}`,
    )

    return (
      <div className={inputClasses}>
        {label && <label className="m-input__label">{label}</label>}
        {helperText && <div className="m-input__helper">{helperText}</div>}
        <div className={wrapperClasses}>
          {mobile && <button onClick={(e) => this.handleArrowClick(e, 'dec')}>−</button>}
          <input ref={mergeRefs(this.setNumberInputRef, inputRef)} disabled={disabled || loading} type="number" pattern="[0-9]*" {...props} />
          {
            !mobile &&
            <div>
              <button onClick={(e) => this.handleArrowClick(e, 'inc')}>+</button>
              <button onClick={(e) => this.handleArrowClick(e, 'dec')}>−</button>
            </div>
          }
          {mobile && <button onClick={(e) => this.handleArrowClick(e, 'inc')}>+</button>}
        </div>
        {
          status === 'error' && errorMessage &&
          <div className="m-field__message">
            {errorMessage}
          </div>
        }
      </div>
    )
  }
}
