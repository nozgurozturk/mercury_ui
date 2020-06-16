
import * as React from 'react'
import classNames from 'classnames'
// Types
import { span, offset } from './Grid.types'
// Style
// import '../../styles/components/_grid.scss'

interface ICol extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

type ColType = {
  span?: span,
  offset?: offset
}

interface ColProps extends ICol {
  xs?: ColType,
  sm?: ColType
  md?: ColType,
  lg?: ColType,
  className?: string,
}

export class Col extends React.PureComponent<ColProps> {

  public render() {

    const {
      xs,
      sm,
      md,
      lg,
      children,
      className,
      ...props
    } = this.props

    const colClasses = classNames(
      'mrc-col',
      xs?.span && `mrc-col-xs-${xs.span}`,
      sm?.span && `mrc-col-sm-${sm.span}`,
      md?.span && `mrc-col-md-${md.span}`,
      lg?.span && `mrc-col-lg-${lg.span}`,
      xs?.offset && `mrc-col-xs-offset-${xs.offset}`,
      sm?.offset && `mrc-col-sm-offset-${sm.offset}`,
      md?.offset && `mrc-col-md-offset-${md.offset}`,
      lg?.offset && `mrc-col-lg-offset-${lg.offset}`,
      className
    )
    return (
      <div
        className={colClasses}
        {...props}
      >
        {children}
      </div>
    )
  }
}
