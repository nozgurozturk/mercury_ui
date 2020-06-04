
import * as React from 'react'
import classNames from 'classnames'
// Types
import { intent } from './Icon.types'
// Style
import '../../styles/components/_icon.scss'

interface IIcon extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> { }

interface IconProps extends IIcon {
  intent?: intent,
  size?: number
  name?: string,
  disabled?: boolean,
  className?: string,
}

export class Icon extends React.PureComponent<IconProps> {

  public render() {
    const {
      intent = "primary",
      size = 24,
      disabled,
      name,
      className,
      ...props
    } = this.props

    const iconSize = size ? { fontSize: `${size}px` } : {}

    const iconClasses = classNames(
      'mrc-icon',
      intent && `mrc-${intent}`,
      name && `icon-${name}`,
      disabled && 'mrc-disabled',
      className
    )
    return (
      <i className={iconClasses} style={iconSize} {...props} />
    )
  }
}

