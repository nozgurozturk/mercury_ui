import * as React from 'react'
import cx from 'classnames'
// Types
import { size, variant, intent } from './Button.types'
// Interface
import { IButton } from '../../interfaces'
import { Icon } from '../Icon'
import { Loader } from '../Loader'

interface ButtonProps extends IButton {
  /**
   * Defines style of button
   * @default 'solid'
   */
  variant?: variant,
  /**
   * Defines color of button
   * @default 'primary'
   */
  intent?: intent,
  /**
   * Name of icon. Rendered before text
   */
  icon?: string,
  /**
   * Defines size of button
   * @default 'default'
   */
  size?: size,
  /**
   * If it is true, button is disabled and render loader indicator right side of button. 
   */
  loading?: boolean,
  /**
   * If it is true, button is disabled ana non-interactive
   */
  disabled?: boolean,
  /**
   * Additional classes
   */
  className?: string,
}

export class Button extends React.PureComponent<ButtonProps> {

  public static defaultProps = {
    variant: 'solid',
    intent: 'primary',
    size: 'default',
  };

  public render() {
    const {
      variant,
      intent,
      size,
      icon,
      loading,
      disabled,
      className,
      children,
      ...props
    } = this.props

    const buttonClasses = cx(
      'm-btn',
      variant && `m-btn--${variant}`,
      intent && `m-btn--${intent}`,
      size && `m-btn--${size}`,
      (loading || disabled) && `m-btn--disabled`,
      className,
    )
    return (
      <button className={buttonClasses} disabled={loading || disabled} {...props}>
        {icon && !loading && <Icon intent={variant === 'icon' ? intent : null} name={icon} />}
        {children}
        {loading && <Loader active={loading} />}
      </button>
    )
  }
}
