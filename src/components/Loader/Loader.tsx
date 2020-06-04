
import * as React from 'react'
import classNames from 'classnames'
// Style
import '../../styles/components/_loader.scss'

interface ILoader extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface LoaderProps extends ILoader {
  active?: boolean,
  tip?: React.ReactNode,
  size?: number,
  className?: string,
}

export class Loader extends React.PureComponent<LoaderProps> {

  public render() {
    const {
      active,
      tip,
      size = 24,
      className,
      ...props
    } = this.props

    const loaderClasses = classNames(
      'mrc-loader-wrapper',
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
        <div className="mrc-loader" style={loaderSize} />
        {tip && <div className="mrc-loader__tip">{tip}</div>}
      </div>
    )
  }
}

