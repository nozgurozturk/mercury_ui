
import * as React from 'react'
import classNames from 'classnames'
// Types
import { intent, decoration, size } from './Text.types'
// Style
import '../../styles/components/_text.scss'

interface IText extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> { }

interface TextProps extends IText {
  intent?: intent,
  size?: size,
  decoration?: decoration,
  ellipsis?: boolean,
  className?: string,
}

export class Text extends React.PureComponent<TextProps> {

  public render() {
    const {
      intent = 'primary',
      size = 'default',
      decoration,
      ellipsis,
      children,
      className,
      ...props
    } = this.props

    const textClasses = classNames(
      'mrc-text',
      intent && `mrc-t-${intent}`,
      size && `mrc-t-${size}`,
      ellipsis && 'ellipsis',
      decoration && `${decoration}`,
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

