
import * as React from 'react'
import classNames from 'classnames'
// Types
import { size, status } from './TextInput.types'
// Style
import '../../styles/components/_textinput.scss'
// Components
import { Icon } from '../Icon'
import { Loader } from '../Loader'

interface ITextInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

interface TextInputProps extends ITextInput {
  inputSize?: size,
  helperText?: React.ReactNode,
  label?: React.ReactNode,
  loading?: boolean,
  status?: status,
  errorMessage?: React.ReactNode,
  prefix?: string,
  suffix?: string,
  inputRef?: React.MutableRefObject<HTMLInputElement>
  className?: string,
}

export class TextInput extends React.PureComponent<TextInputProps> {

  public render() {
    const {
      inputSize = "default",
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

    const inputClasses = classNames(
      'mrc-text-input',
      (disabled || loading) && 'mrc-input-disabled',
      status && `mrc-${status}`,
      className,
    )
    const wrapperClasses = classNames(
      'mrc-text-input__wrapper',
      inputSize && `mrc-input-${inputSize}`,
    )

    return (
      <div className={inputClasses}>
        {label && <label className="mrc-text-input__label">{label}</label>}
        {helperText && <div className="mrc-text-input__helper">{helperText}</div>}
        <div className={wrapperClasses}>
          {prefix && <Icon name={prefix} size={24} />}
          <input ref={inputRef} disabled={disabled || loading} type="text" {...props} />
          {suffix && <Icon name={suffix} size={24} />}
          {status && !loading && <Icon name={status} size={24} />}
          {loading && <Loader active={loading} size={12} />}
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

// export const TextInput = React.forwardRef((props: TextInputProps, ref: React.MutableRefObject<any>) => (
//   <BaseTextInput  {...props} inputRef={ref} />
// ))