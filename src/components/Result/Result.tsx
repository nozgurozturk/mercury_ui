
import * as React from 'react'
import classNames from 'classnames'
// Types
import { } from './Result.types'
// Styles
import '../../styles/components/_result.scss'
import { Icon } from '../Icon'

interface IResult extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface ResultProps extends IResult {
  description?: React.ReactNode,
  message?: React.ReactNode,
  icon?: string,
  iconSize?: number,
  extra?: React.ReactNode,
  className?: string,
}

export class Result extends React.PureComponent<ResultProps> {

  public render() {
    const { description, message, icon, iconSize = 64, extra, className } = this.props
    const resultClasses = classNames(
      'mrc-result',
      className
    )
    return (
      <div className={resultClasses}>
        {icon && <Icon name={icon} size={iconSize} />}
        {message && <div className="mrc-result-message">{message}</div>}
        {description && <div className="mrc-result-description"> {description}</div>}
        {extra && <div className="mrc-result-extra">{extra}</div>}
      </div>
    )
  }
}

