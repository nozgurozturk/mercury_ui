
import * as React from 'react'
import cx from 'classnames'
// Interface
import { ITable } from '../../interfaces'
// Types
import { column, rowSize, } from './Table.types'

import { Skeleton } from '../Skeleton';

interface TableProps extends ITable {
  /**
   * Data Source of Table
   */
  dataSource?: object[],
  /**
   * Size of Table's row
   * @default 'default'
   */
  rowSize?: rowSize,
  /**
   * Fix size of column
   * @default false
   */
  fixed?: boolean
  /**
   * Column of Table. dataIndex property must matched with each dataSource's properties
   */
  columns?: column[],
  /**
   * Callback function, when row is clicked
   */
  onRowClick?: (dataSource) => void,
  /**
   * Loading status of table
   */
  loading?: boolean,
  /**
   * Rendered when dataSource is empty
   */
  noData?: React.ReactNode,
  /**
   * Additional classes
   */
  className?: string,
}

export class Table extends React.PureComponent<TableProps> {
  public static defaultProps = {
    rowSize: 'default',
    fixed: false,
  }

  handleRowClick = (e, d) => {
    const { onRowClick } = this.props
    e.persist()
    if (onRowClick) onRowClick(d)
  }

  public render() {
    const {
      dataSource,
      columns,
      rowSize,
      fixed,
      loading,
      noData,
      className,
    } = this.props

    const tableClasses = cx(
      'm-table',
      rowSize && `m-table--${rowSize}`,
      fixed && 'm-table--fixed',
      className,
    )
    return (
      <table className={tableClasses}>
        <thead className="m-table__head">
          <tr>
            {columns.map((column, index) => (
              <th key={index} >{column.title}</th>
            ))}
          </tr>
        </thead>
        {loading && <tr className="m-table--loading"><td colSpan={columns.length}><Skeleton lastRowHalf={false} active={loading} rows={columns.length} /></td></tr>}
        {!loading && dataSource.length === 0 && <tr className="m-table--noData"><td colSpan={columns.length}>{noData}</td></tr>}
        {!loading && dataSource.length > 0 &&
          <tbody className="m-table__body">
            {dataSource.map((d, i) => (
              <tr key={i} onClick={(e) => this.handleRowClick(e, d)}>
                {columns.map((column, index) => (
                  <td key={index}>
                    {column.render ? column.render(d[column.dataIndex], d, i) :
                      d[column.dataIndex]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        }
      </table>
    )
  }
}

