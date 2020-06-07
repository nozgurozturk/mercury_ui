
import * as React from 'react'
import classNames from 'classnames'
// Types
import { } from './Skeleton.types'
// Styles
import '../../styles/components/_skeleton.scss'

interface ISkeleton extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface SkeletonProps extends ISkeleton {
  rows?: number,
  active?: boolean,
  lastRowHalf?: boolean,
  className?: string,
}

export class Skeleton extends React.PureComponent<SkeletonProps> {

  public render() {

    const { rows = 1, active, className, lastRowHalf = true } = this.props

    if (!active) return null
    const skeletonClasses = classNames(
      'mrc-skeleton',
      className,
    )
    return (

      Array(rows).fill('').map((_, index) => (
        <div style={{ maxWidth: ((index !== 0 && index === rows - 1 && lastRowHalf) && '70%') }} className={skeletonClasses}>
          <div className="mrc-skeleton-animation" />
        </div>
      ))

    )
  }
}

