import * as React from 'react'
import cx from 'classnames'
// Interface
import { IDiv } from '../../interfaces'
// Components
import { Icon } from '../Icon'

interface ResultProps extends IDiv {
  /**
   * Message of Result, below icon
   */
  message?: React.ReactNode,
  /**
   * Description of Result, below message
   */
  description?: React.ReactNode,
  /**
   * Icon component, top of result
   */
  icon?: string,
  /**
   * Size of icon component
   */
  iconSize?: number,
  /**
   * Any component, bottom of Result
   */
  extra?: React.ReactNode,
  /**
   * Additional classes
   */
  className?: string,
}

export class Result extends React.PureComponent<ResultProps> {
  public static defaultProps = {
    iconSize: 64
  }
  public render() {
    const {
      description,
      message,
      icon,
      iconSize,
      extra,
      className
    } = this.props

    const resultClasses = cx(
      'm-result',
      className
    )
    return (
      <div className={resultClasses}>
        {icon && <Icon name={icon} size={iconSize} />}
        {message && <div className="m-result__message">{message}</div>}
        {description && <div className="m-result__description"> {description}</div>}
        {extra && <div className="m-result__extra">{extra}</div>}
      </div>
    )
  }
}

