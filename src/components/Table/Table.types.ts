export type column = {
  key?: string,
  dataIndex: string,
  title?: string,
  render?: (text, record, index) => React.ReactNode,
}

export type rowSize = 'large' | 'default' | 'small'