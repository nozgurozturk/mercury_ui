
import * as React from 'react'
import cx from 'classnames'
// Interface
import { IDiv } from '../../interfaces'

interface SkeletonProps extends IDiv {
  /**
   * Number of rows
   * @default 1
   */
  rows?: number,
  /**
   * If true, skeleton is rendered
   */
  active?: boolean,
  /**
   * If true, last row of skeleton width is half
   * @default true
   */
  lastRowHalf?: boolean,
  /**
   * Additional classes
   */
  className?: string,
}

export class Skeleton extends React.PureComponent<SkeletonProps> {
  public static defaultProps = {
    rows: 1,
    lastRowHalf: true
  }
  public render() {

    const {
      rows,
      active,
      className,
      lastRowHalf,
    } = this.props

    const skeletonClasses = cx(
      'm-skeleton',
      className,
    )

    if (!active) return null

    return (
      [...Array(rows)].map((_, index) => (
        <div key={index} style={{ maxWidth: ((index !== 0 && index === rows - 1 && lastRowHalf) && '70%') }} className={skeletonClasses}>
          <div className="m-skeleton__animation" />
        </div>
      ))
    )
  }
}

