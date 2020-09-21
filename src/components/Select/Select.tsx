
import * as React from 'react'
import cx from 'classnames'
// Types
import { size, status } from './Select.types'
// Interface
import { ISelect } from '../../interfaces'
// Components
import { Icon } from '../Icon'
import { Loader } from '../Loader'
import { Option } from './Option'

type OptionType = {
  name: any,
  value: any
}

interface SelectProps extends ISelect {
  /**
   * Searchable with string input
   */
  search?: boolean
  /**
   * Callback function of search filtering
   */
  filterSearch?: (name, value) => boolean
  /**
   * Data source of select
   */
  options?: OptionType[]
  /**
   * Size of Input
   * @default 'default'
   */
  inputSize?: size,
  /**
   * Explanation text of Input below of the label
   */
  helperText?: React.ReactNode,
  /**
   * Label of the Input
   */
  label?: React.ReactNode,
  /**
   * Custom option label
   */
  renderOption?: (name?) => React.ReactNode
  /**
   * When input is loading shows loading indicator and disabled
   */
  loading?: boolean,
  /**
   * Status of Input 'warning' | 'success' | 'error'
   */
  status?: status,
  /**
   * Message when status is equal to error
   */
  errorMessage?: React.ReactNode,
  /**
   * Prefix Icon of Input
   */
  prefix?: string,
  /**
   * Suffix Icon of Input
   */
  suffix?: string,
  /**
   * External react ref object
   */
  inputRef?: React.MutableRefObject<HTMLSelectElement>
  /**
   * Additional Classes
   */
  className?: string,
}

interface SelectState {
  searchValue: string,
  selectedValue: any,
  isOptionsVisible: boolean,
}

const mergeRefs = (...refs) => el => {
  refs.forEach(ref => {
    if (typeof ref === 'function') {
      ref(el);
    } else if (Object(ref) === ref) {
      ref.current = el;
    }
  });
};

export class Select extends React.PureComponent<SelectProps, SelectState> {
  public static defaultProps = {
    inputSize: 'default',
  }
  private searchInput: HTMLDivElement;
  private setSearchInput: any;
  private selectInput: HTMLSelectElement;
  private setSelectInput: any;

  constructor(props: SelectProps) {
    super(props)
    const value = props.value;
    this.state = {
      searchValue: '',
      selectedValue: value,
      isOptionsVisible: false,
    }
    this.searchInput = null;
    this.setSearchInput = element => {
      this.searchInput = element;
    };
    this.selectInput = null
    this.setSelectInput = element => {
      this.selectInput = element;
    };
  }
  static getDerivedStateFromProps({ value = '' }, state) {
    const { prevValue } = state;
    return prevValue === value
      ? ''
      : {
        selectedValue: value,
        prevValue: value,
      };
  }

  public setNativeValue = (element, value) => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      HTMLSelectElement.prototype,
      'value'
    ).set;
    nativeInputValueSetter.call(element, value);

    const changeEvent = new Event('change', { bubbles: true });
    element.dispatchEvent(changeEvent)
  }

  handleDisplaySearchInput = (val) => {
    const { options } = this.props
    if (this.searchInput) {
      if (this.state.selectedValue) {
        const selected = options.find(o => o.value.toString() === val)
        if (selected) this.searchInput.innerText = selected.name
      } else {
        this.searchInput.innerText = ''
      }
    }
  }

  handleChange = (e) => {
    const { disabled, onChange } = this.props;
    if (!disabled) {
      e.persist()
      const target = e.target
      this.setState({ selectedValue: target.value },
        () => {
          if (onChange) {
            onChange(e)
          }
        })
    }
  };

  handleFocus = (e) => {
    const { disabled, onFocus } = this.props;
    if (!disabled) {
      e.persist()
      this.setState({ isOptionsVisible: true }, () => { if (onFocus) onFocus(e) })
    }
  }

  handleBlur = (e) => {
    const { disabled, onBlur } = this.props;
    if (!disabled) {
      e.persist()
      this.setState({ isOptionsVisible: false },
        () => {
          if (onBlur) {
            onBlur(e)
          }
          this.handleDisplaySearchInput(this.state.selectedValue)
        })
    }
  }

  handleSearchValue = (val) => {
    this.setState({ searchValue: val })
  }

  handleSearch = (name) => {
    const { search, filterSearch } = this.props
    if (!search || !this.state.searchValue) {
      return true
    }
    return filterSearch(name, this.state.searchValue)
  }

  handleOptionClicked = (e, val, name) => {
    const { search } = this.props
    e.stopPropagation()
    if (search) {
      this.setState({ searchValue: '' })
    }
    this.setNativeValue(this.selectInput, val);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedValue !== this.state.selectedValue) {
      this.handleDisplaySearchInput(this.state.selectedValue)
    }
  }


  public render() {
    const {
      id,
      inputSize,
      options,
      helperText,
      label,
      renderOption,
      status,
      errorMessage,
      loading,
      disabled,
      prefix,
      suffix,
      className,
      search,
      filterSearch,
      value,
      children,
      onChange,
      onFocus,
      onBlur,
      inputRef,
      ...props
    } = this.props

    const inputClasses = cx(
      'm-input__select',
      (disabled) && 'm-input--disabled',
      status && `m-${status}`,
      search && `m-search`,
      className
    )

    const wrapperClasses = cx(
      'm-input__select__wrapper',
      inputSize && `m-input--${inputSize}`
    )

    return (
      <div className={inputClasses}>
        {label && <label className="m-input__label">{label}</label>}
        {helperText && <div className="m-input__helper">{helperText}</div>}
        <div className={wrapperClasses}>
          {prefix && <Icon className="m-icon--prefix" name={prefix} size={16} />}
          <select value={this.state.selectedValue} onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} ref={mergeRefs(this.setSelectInput, inputRef)} disabled={disabled}  {...props} >
            <option hidden value="" disabled></option>
            {
              options.filter(o => this.handleSearch(o.name)).map(o => (
                <option hidden key={o.value} value={o.value} label={o.name}>{o.name}</option>
              ))
            }
          </select>
          {search && <div onBlur={this.handleBlur} onFocus={this.handleFocus} className="m-input__search" ref={this.setSearchInput} contentEditable={!disabled} onInput={e => this.handleSearchValue(e.currentTarget.textContent)} />}
          {(this.props.placeholder && !this.state.isOptionsVisible)
            && (!this.state.selectedValue)
            && <div className="m-input__placeholder">{this.props.placeholder}</div>}
          {!loading && <Icon className="m-icon--arrow" name="chevron--down" size={16} />}
          {status && !loading && (<Icon className="m-icon--status" name={`${status}--filled`} intent={status} size={16} />)}
          {loading && !this.state.isOptionsVisible && <Loader active={loading} size={12} />}
          {suffix && <Icon className="m-icon--suffix" name={suffix} size={16} />}
        </div>
        {(status === 'error' && errorMessage) && <div className="m-field__message">{errorMessage}</div>}
        {this.state.isOptionsVisible &&
          <ul className="m-input___option__cotnainer">
            {loading
              ? <li style={{ position: 'relative', width: '100%', height: 80 }}><Loader size={24} style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }} active={loading} /></li>
              : options.filter(o => this.handleSearch(o.name)).map(o => (
                <Option
                  isSelected={o.value.toString() === this.state.selectedValue}
                  onMouseDown={(e) => this.handleOptionClicked(e, o.value, o.name)}
                  key={o.value}
                  value={o.value}
                  name={
                    renderOption ? renderOption(o.name) : o.name
                  } />
              ))
            }
          </ul>}
      </div>
    )
  }
}
