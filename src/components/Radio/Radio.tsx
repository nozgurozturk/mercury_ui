import * as React from 'react'
import cx from 'classnames'
// Interface
import { IInput } from '../../interfaces'

interface RadioProps extends IInput {
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

export class Radio extends React.PureComponent<RadioProps> {

  public render() {
    const {
      id,
      label,
      error,
      errorMessage,
      disabled,
      className,
      inputRef,
      ...props
    } = this.props

    const radioClasses = cx(
      'm-radio',
      error && 'm-error',
      disabled && 'm-input--disabled',
      className
    )
    return (
      <div className={radioClasses}>
        <input id={id} name={name} type="radio" disabled={disabled} {...props} />
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

