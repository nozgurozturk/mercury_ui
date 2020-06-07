
import * as React from 'react'
import classNames from 'classnames'
// Types
import { column, rowSize, } from './Table.types'
// Styles
import '../../styles/components/_table.scss'
import { Skeleton } from '../Skeleton';
import { Row, Col } from '../Grid';

interface ITable extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> { }

interface TableProps extends ITable {
  dataSource?: object[],
  rowSize?: rowSize,
  columns?: column[],
  onRowClick?: (dataSource) => void,
  loading?: boolean,
  noData?: React.ReactNode,
  className?: string,
}

export class Table extends React.PureComponent<TableProps> {

  handleRowClick = (e, d) => {
    const { onRowClick } = this.props
    e.persist()
    if (onRowClick) onRowClick(d)
  }

  public render() {
    const {
      dataSource,
      columns,
      rowSize = 'default',
      loading,
      noData,
      className,
    } = this.props

    const tableClasses = classNames(
      'mrc-table',
      rowSize && `mrc-table-${rowSize}`,
      className,
    )
    // TODO: Skeleton
    return (
      <table className={tableClasses}>
        <thead className="mrc-table-head">
          <tr>
            {columns.map((column, index) => (
              <th key={index} >{column.title}</th>
            ))}
          </tr>
        </thead>
        {loading && <tr className="mrc-table-loading"><td colSpan={columns.length}><Skeleton lastRowHalf={false} active={loading} rows={columns.length} /></td></tr>}
        {!loading && dataSource.length === 0 && <tr className="mrc-table-noData"><td colSpan={columns.length}>{noData}</td></tr>}
        {!loading && dataSource.length > 0 &&
          <tbody className="mrc-table-body">
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

