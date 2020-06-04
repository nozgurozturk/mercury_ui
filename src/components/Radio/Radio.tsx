import * as React from 'react'
import classNames from 'classnames'
// Style
import '../../styles/components/_radio.scss'

interface IRadio extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

// TODO: Add ForwardRef

interface RadioProps extends IRadio {
  label?: React.ReactNode,
  error?: boolean,
  message?: React.ReactNode
  success?: boolean,
  id?: string
  name?: string,
  className?: string,
}

export class Radio extends React.PureComponent<RadioProps> {

  public render() {
    const { id, name, label, error, message, success, className, ...props } = this.props;
    const radioClasses = classNames(
      'mrc-radio',
      success && 'mrc-success',
      error && 'mrc-error',
      className
    )
    return (
      <div className={radioClasses}>
        <input id={id} name={name} type="radio" {...props} />
        <label htmlFor={id} />
        <span>{label}</span>
        {
          message &&
          <div className="mrc-field-message">
            {message}
          </div>
        }
      </div>
    )
  }
}

