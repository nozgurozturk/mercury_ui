import * as React from 'react'
import cx from 'classnames'
// Interface
import { IInput } from '../../interfaces'

// TODO: Add ForwardRef
interface CheckboxProps extends IInput {
  /**
   * Inline Text of Checkbox
   */
  label?: React.ReactNode,
  /**
   * Error Status of Checkbox
   */
  error?: boolean,
  /**
   * When error is true, shows this message
   */
  errorMessage?: React.ReactNode
  /**
   * External Ref object
   */
  inputRef?: React.MutableRefObject<HTMLInputElement>
  /**
   * Additional classes
   */
  className?: string,
}

export class Checkbox extends React.PureComponent<CheckboxProps> {

  public render() {
    const {
      id,
      label,
      error,
      disabled,
      errorMessage,
      className,
      inputRef,
      ...props
    } = this.props

    const checkBoxClasses = cx(
      'm-checkbox',
      error && 'm-error',
      disabled && 'm-input--disabled',
      className
    )

    return (
      <div className={checkBoxClasses}>
        <input ref={inputRef} id={id} type="checkbox" disabled={disabled} {...props} />
        <label htmlFor={id} />
        <span>{label}</span>
        {
          error && errorMessage &&
          <div className="m-field__message">
            {errorMessage}
          </div>
        }
      </div>
    )
  }
}

