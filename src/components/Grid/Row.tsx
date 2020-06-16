
import * as React from 'react'
import classNames from 'classnames'
// Types
import { row } from './Grid.types'
// Style
// import '../../styles/components/_grid.scss'

interface IRow extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface RowProps extends IRow {
  xs?: row,
  sm?: row
  md?: row,
  lg?: row,
  vertical?: boolean,
  className?: string,
}

export class Row extends React.PureComponent<RowProps> {

  public render() {

    const {
      xs,
      sm,
      md,
      lg,
      vertical,
      children,
      className,
      ...props
    } = this.props

    const rowClasses = classNames(
      'mrc-row',
      vertical && 'mrc-row-vertical',
      xs?.justify && `${xs.justify}-xs`,
      xs?.align && `${xs.align}-xs`,
      sm?.justify && `${sm.justify}-sm`,
      sm?.align && `${sm.align}-sm`,
      md?.justify && `${md.justify}-md`,
      md?.align && `${md.align}-md`,
      lg?.justify && `${lg.justify}-lg`,
      lg?.align && `${lg.align}-lg`,
      className
    )
    return (
      <div
        className={rowClasses}
        {...props}
      >
        {children}
      </div>
    )
  }
}
