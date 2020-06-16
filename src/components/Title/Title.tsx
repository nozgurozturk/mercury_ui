
import * as React from 'react'
import classNames from 'classnames'
// Interface
import { IHeading } from '../../interfaces'
// Types
import { level, intent, decoration } from './Title.types'

interface TitleProps extends IHeading {
  /**
   * Level defines heading element
   * @default 1
   */
  level?: level,
  /**
   * Color of text
   */
  intent?: intent,
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

export class Title extends React.PureComponent<TitleProps> {
  public static defaultProps = {
    intent: 'primary',
    level: 1,
  }

  public render() {
    const {
      level,
      intent,
      ellipsis,
      decoration,
      children,
      className,
      ...props
    } = this.props

    const titleClasses = classNames(
      'm-title',
      intent && `m-${intent}`,
      ellipsis && 'm-ellipsis',
      decoration && `m-${decoration}`,
      className
    )

    const levelMapping: any = {
      1: 'h1',
      2: 'h2',
      3: 'h3',
      4: 'h4'
    }

    const TitleComponent = levelMapping[level]

    return (
      <TitleComponent
        className={titleClasses}
        {...props}
      >
        {children}
      </TitleComponent>
    )
  }
}

