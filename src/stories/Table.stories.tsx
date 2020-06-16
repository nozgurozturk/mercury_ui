import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, radios } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Table } from '../components/Table'
import { rowSize } from '../components/Table/Table.types';

const stories = storiesOf('Table', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Tab component displays rows of data
    `,
  }
})
const columns = [
  {
    title: '',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
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
    render: (tags, data, index) => {
      const borderColor = (tag) => {
        switch (tag) {
          case 'sith':
            return 'red'
          case 'green':
            return 'lime'
          case 'jedi':
            return 'blue'
          case 'bounty hunter':
            return 'orange'
          default:
            return 'gray'
        }
      }
      return (
        tags.map(tag => <code onClick={(e) => { e.stopPropagation(); alert(tag) }} style={{ padding: 2, marginRight: 8, borderRadius: 4, border: '1px solid', borderColor: borderColor(tag) }}>{tag}</code>)
      )
    }
  },
];

const data = [
  {
    key: '1',
    name: 'Darth Vader',
    age: 32,
    id: 'IMP_01',
    tags: ['sith', 'nice dad'],
  },
  {
    key: '2',
    age: 42,
    name: 'Obi-Wan Kenobi',
    id: 'JD_05',
    tags: ['jedi', 'legend'],
  },
  {
    key: '3',
    name: 'Han Solo',
    age: 24,
    id: 'RBL_01',
    tags: ['bounty hunter', 'rebel'],
  },
  {
    key: '4',
    name: 'Master Yoda',
    age: undefined,
    id: 'JD_01',
    tags: ['little', 'green'],
  },
];

const rowSizeLabel = 'Row Size'
const rowSizeOptions: Record<string, rowSize> = {
  small: 'small',
  default: 'default',
  large: 'large'
}
const defaultRowSizeValue = 'default'

const groupId = 'TABLE'

stories.add('Default', () => {
  const noDataSource = boolean('No Data', false, groupId)
  return (
    <Table
      loading={boolean('Loading', false, groupId)}
      fixed={boolean('Fixed', false, groupId)}
      rowSize={radios(rowSizeLabel, rowSizeOptions, defaultRowSizeValue, groupId)}
      noData={<h6>No Data</h6>}
      dataSource={noDataSource ? [] : data}
      columns={columns}
      onRowClick={(data) => alert(data.name)}
    />
  )
})
