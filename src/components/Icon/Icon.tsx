
import * as React from 'react'
import cx from 'classnames'
// Interface
import { IElement } from '../../interfaces'
// Types
import { intent } from './Icon.types'

interface IconProps extends IElement {
  /**
   * Defines color of icon
   * @default 'primary'
   */
  intent?: intent,
  /**
   * Size of Icon (fontSize)(px)
   */
  size?: number
  /**
   * Defines what icon is that
   */
  name?: string,
  /**
   * Additional classes
   */
  className?: string,
}

export class Icon extends React.PureComponent<IconProps> {
  public static defaultProps = {
    intent: 'primary',
  };

  public render() {
    const {
      intent,
      size,
      name,
      className,
    } = this.props

    const iconSize = size ? { fontSize: `${size}px` } : {}

    const iconClasses = cx(
      'm-icon',
      intent && `m-${intent}`,
      name && `icon-${name}`,
      className
    )
    return (
      <i className={iconClasses} style={iconSize} ></i>
    )
  }
}

