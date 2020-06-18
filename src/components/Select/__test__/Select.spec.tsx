/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Select } from '../Select'
import * as faker from 'faker'


const options = [
  {
    name: 'Episode One',
    value: 1
  },
  {
    name: 'Episode Two',
    value: 2
  },
  {
    name: 'Episode Three',
    value: 3
  },
]

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render select', () => {
    const { container } = render(<Select options={options} id="cx" />)
    expect(container.querySelector('select')).toBeInTheDocument()
  })

  test('should render label', () => {
    const { queryByText } = render(<Select options={options} label={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should render helper', () => {
    const { queryByText } = render(<Select options={options} helperText={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should render errorMessage when status is equal to error', () => {
    const { queryByText } = render(<Select options={options} status="error" errorMessage={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should not render errorMessage when status is not equal to error', () => {
    const { queryByText } = render(<Select options={options} errorMessage={text} id="cx" />)
    expect(queryByText(text)).not.toBeInTheDocument()
  })

  test('should invoke callback function when change select value', () => {
    const fn = jest.fn()
    const { queryByTestId } = render(<Select options={options} onChange={fn} id="cx" data-testid="cx" />)
    fireEvent.change(queryByTestId('cx'), { target: { value: 2 } })
    expect(fn).toBeCalledTimes(1)
  })

  test('should render 3 list element', () => {
    const fn = jest.fn()
    const { container } = render(<Select options={options} onChange={fn} id="cx" />)
    const select = container.querySelector('select')
    fireEvent.focus(select)
    const li = container.querySelectorAll('li')
    expect(li).toHaveLength(3)
  })
})