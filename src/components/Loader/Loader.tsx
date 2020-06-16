
import * as React from 'react'
import cx from 'classnames'
// Interface
import { IDiv } from '../../interfaces'

interface LoaderProps extends IDiv {
  /**
   * If true, mount loader
   */
  active?: boolean,
  /**
   * Explaination of loader, below spinner
   */
  tip?: React.ReactNode,
  /**
   * Size of spinner (px)
   * @default 16
   */
  size?: number,
  /**
   * Additional classes
   */
  className?: string,
}

export class Loader extends React.PureComponent<LoaderProps> {
  public static defaultProps = {
    size: 16
  }
  public render() {
    const {
      active,
      tip,
      size,
      className,
      ...props
    } = this.props

    const loaderClasses = cx(
      'm-loader__wrapper',
      className
    )
    const loaderSize = size ? {
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${size / 6}px`
    } : {}

    if (!active) {
      return null
    }

    return (
      <div
        className={loaderClasses}
        {...props}
      >
        <div className="m-loader" style={loaderSize} />
        {tip && <div className="m-loader__tip">{tip}</div>}
      </div>
    )
  }
}

