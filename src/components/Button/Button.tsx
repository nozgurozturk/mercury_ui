import * as React from 'react'
import classNames from 'classnames'
// Types
import { size, variant, intent } from './Button.types'
// Style
import '../../styles/components/_button.scss'
import { Icon } from '../Icon'
import { Loader } from '../Loader'

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { }

interface ButtonProps extends IButton {
  variant?: variant,
  intent?: intent,
  icon?: string,
  size?: size,
  loading?: boolean,
  disabled?: boolean,
  block?: boolean,
  className?: string,
}

export class Button extends React.PureComponent<ButtonProps> {

  public render() {
    const {
      variant = 'solid',
      intent = 'primary',
      size = 'default',
      icon,
      loading,
      disabled,
      className,
      children,
      ...props
    } = this.props

    const buttonClasses = classNames(
      'mrc-btn',
      variant && `mrc-btn-${variant}`,
      intent && `mrc-btn-${intent}`,
      size && `mrc-btn-${size}`,
      (loading || disabled) && `mrc-btn-disabled`,
      className,
    )
    return (
      <button className={buttonClasses} disabled={loading || disabled} {...props}>
        {icon && !loading && <Icon name={icon} />}
        <div>{children}</div>
        {loading && <Loader style={{ transform: 'translateX(8px)' }} active={loading} size={12} />}
      </button>
    )
  }
}
