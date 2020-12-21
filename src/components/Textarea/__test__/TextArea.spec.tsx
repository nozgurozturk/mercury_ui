/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Textarea } from '../Textarea'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render text area', () => {
    const { container } = render(<Textarea id="cx" />)
    expect(container.querySelector('textarea')).toBeInTheDocument()
  })


  test('should render label', () => {
    const { queryByText } = render(<Textarea label={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should render helper', () => {
    const { queryByText } = render(<Textarea helperText={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should render errorMessage when status is equal to error', () => {
    const { queryByText } = render(<Textarea status="error" errorMessage={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should not render errorMessage when status is not equal to error', () => {
    const { queryByText } = render(<Textarea errorMessage={text} id="cx" />)
    expect(queryByText(text)).not.toBeInTheDocument()
  })

  test('should invoke callback function when change input value', () => {
    const fn = jest.fn()
    const { queryByTestId } = render(<Textarea onChange={fn} id="cx" data-testid="cx" />)
    fireEvent.change(queryByTestId('cx'), { target: { value: text } })
    expect(fn).toBeCalledTimes(1)
  })
})