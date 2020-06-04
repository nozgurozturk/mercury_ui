
import * as React from 'react'
import classNames from 'classnames'
// Types
import { level, intent, decoration } from './Title.types'
// Style
import '../../styles/components/_title.scss'

interface ITitle extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> { }

interface TitleProps extends ITitle {
  level?: level,
  intent?: intent,
  decoration?: decoration,
  ellipsis?: boolean,
  className?: string,
}

export class Title extends React.PureComponent<TitleProps> {

  public render() {
    const {
      level = 1,
      intent = 'primary',
      ellipsis,
      decoration,
      children,
      className
    } = this.props

    const titleClasses = classNames(
      'mrc-title',
      intent && `mrc-t-${intent}`,
      ellipsis && 'ellipsis',
      decoration && `${decoration}`,
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
        {...this.props}
      >
        {children}
      </TitleComponent>
    )
  }
}

