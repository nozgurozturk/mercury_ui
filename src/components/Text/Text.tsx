
import * as React from 'react'
import cx from 'classnames'
// Interface
import { IParagraph } from '../../interfaces'
// Types
import { intent, decoration, size, weight } from './Text.types'
interface TextProps extends IParagraph {
  /**
   * Color of text
   */
  intent?: intent,
  /**
   * Size of text
   */
  size?: size,
  /**
   * Text weight
   * @default 'regular'
   */
  weight?: weight
  /**
   * Text Decoration ('underline' | 'stroke')
   */
  decoration?: decoration,
  /**
   * Truncate text
   */
  ellipsis?: boolean,
  /**
   * Additional classes
   */
  className?: string,
}

export class Text extends React.PureComponent<TextProps> {
  public static defaultProps = {
    intent: 'primary',
    size: 'default',
    weight: 'regular'
  }
  public render() {
    const {
      intent,
      size,
      weight,
      decoration,
      ellipsis,
      children,
      className,
      ...props
    } = this.props

    const textClasses = cx(
      'm-text',
      intent && `m-${intent}`,
      size && `m-text--${size}`,
      weight && `m-${weight}`,
      ellipsis && 'm-ellipsis',
      decoration && `m-${decoration}`,
      className
    )
    return (
      <p
        className={textClasses}
        {...props}
      >
        {children}
      </p>
    )
  }
}

