import * as React from 'react'
import classNames from 'classnames'
// Style
import '../../styles/components/_checkbox.scss'
interface ICheckbox extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

// TODO: Add ForwardRef
interface CheckboxProps extends ICheckbox {
  label?: React.ReactNode,
  error?: boolean,
  errorMessage?: React.ReactNode
  id?: string
  className?: string,
}

export class Checkbox extends React.PureComponent<CheckboxProps> {

  public render() {
    const { id, label, error, errorMessage, className, ...props } = this.props;
    const checkBoxClasses = classNames(
      'mrc-checkbox',
      error && 'mrc-error',
      className
    )
    return (
      <div className={checkBoxClasses}>
        <input id={id} type="checkbox" {...props} />
        <label htmlFor={id} />
        <span>{label}</span>
        {
          error && errorMessage &&
          <div className="mrc-field-message">
            {errorMessage}
          </div>
        }
      </div>
    )
  }
}

