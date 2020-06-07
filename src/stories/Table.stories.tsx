
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Table } from '../components/Table'

const stories = storiesOf('Table', module)
const columns = [
  {
    title: '',
    dataIndex: 'key',
    key: 'key',
    render: (value, data, index) => {
      return (
        index < 2 ? <h1>{data.name}</h1> : <h5>{value}</h5>
      )
    }
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    age: 42,
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

stories.add('Default', () => {
  const [clickedRow, setClickedRow] = React.useState()
  return (
    <>
      <div>{clickedRow}</div>
      <Table onRowClick={(d) => setClickedRow(d.key)} rowSize="small" dataSource={data} columns={columns} />
      <Table loading dataSource={data} columns={columns} />
      <Table noData={<div style={{ textAlign: 'center' }}>a</div>} dataSource={[]} columns={columns} />
    </>
  )
}
)
