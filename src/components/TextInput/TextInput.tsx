
import * as React from 'react'
import cx from 'classnames'
// Types
import { size, status } from './TextInput.types'
// Interface
import { IInput } from '../../interfaces'
// Components
import { Icon } from '../Icon'
import { Loader } from '../Loader'

// interface ITextInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

interface TextInputProps extends IInput {
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
  inputRef?: React.MutableRefObject<HTMLInputElement>
  /**
   * Additional Classes
   */
  className?: string,
}

export class TextInput extends React.PureComponent<TextInputProps> {
  public static defaultProps = {
    inputSize: 'default',
  }
  public render() {
    const {
      inputSize,
      helperText,
      label,
      status,
      errorMessage,
      loading,
      disabled,
      prefix,
      suffix,
      className,
      inputRef,
      ...props
    } = this.props

    const inputClasses = cx(
      'm-input__text',
      (disabled || loading) && 'm-input--disabled',
      status && `m-${status}`,
      className
    )
    const wrapperClasses = cx(
      'm-input__text__wrapper',
      inputSize && `m-input--${inputSize}`
    )

    return (
      <div className={inputClasses}>
        {label && <label className="m-input__label">{label}</label>}
        {helperText && <div className="m-input__helper">{helperText}</div>}
        <div className={wrapperClasses}>
          {prefix && <Icon className="m-icon--prefix" name={prefix} size={16} />}
          <input ref={inputRef} disabled={disabled || loading} type="text" {...props} />
          {status && !loading && (<Icon className="m-icon--status" name={`${status}--filled`} intent={status} size={16} />)}
          {loading && <Loader active={loading} size={12} />}
          {suffix && <Icon className="m-icon--suffix" name={suffix} size={16} />}
        </div>
        {(status === 'error' && errorMessage) && <div className="m-field__message">{errorMessage}</div>}
      </div>
    )
  }
}
