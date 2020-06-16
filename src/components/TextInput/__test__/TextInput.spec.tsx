/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { TextInput } from '../TextInput'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render text input', () => {
    const { container } = render(<TextInput id="cx" />)
    expect(container.querySelector('input[type="text"]')).toBeInTheDocument()
  })


  test('should render label', () => {
    const { queryByText } = render(<TextInput label={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should render helper', () => {
    const { queryByText } = render(<TextInput helperText={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should render errorMessage when status is equal to error', () => {
    const { queryByText } = render(<TextInput status="error" errorMessage={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should not render errorMessage when status is not equal to error', () => {
    const { queryByText } = render(<TextInput errorMessage={text} id="cx" />)
    expect(queryByText(text)).not.toBeInTheDocument()
  })

  test('should invoke callback function when change input value', () => {
    const fn = jest.fn()
    const { queryByTestId } = render(<TextInput onChange={fn} id="cx" data-testid="cx" />)
    fireEvent.change(queryByTestId('cx'), { target: { value: text } })
    expect(fn).toBeCalledTimes(1)
  })
})