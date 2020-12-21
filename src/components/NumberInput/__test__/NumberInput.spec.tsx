/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { NumberInput } from '../NumberInput'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render number input', () => {
    const { container } = render(<NumberInput id="cx" />)
    expect(container.querySelector('input[type="number"]')).toBeInTheDocument()
  })


  test('should render label', () => {
    const { queryByText } = render(<NumberInput label={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should render helper', () => {
    const { queryByText } = render(<NumberInput helperText={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should render errorMessage when status is equal to error', () => {
    const { queryByText } = render(<NumberInput status="error" errorMessage={text} id="cx" />)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should not render errorMessage when status is not equal to error', () => {
    const { queryByText } = render(<NumberInput errorMessage={text} id="cx" />)
    expect(queryByText(text)).not.toBeInTheDocument()
  })

  test('should increase value of number when click to + button', () => {
    const { getByTestId, queryByText } = render(<NumberInput data-testid="cx" value="0" id="cx" />)
    const incButton = queryByText(/[\+]/i)
    fireEvent.click(incButton)
    expect(getByTestId('cx')).toHaveValue('1')
  })

  test('should not increase value of number when click to + button', () => {
    const { container, queryByText } = render(<NumberInput max="10" value="10" id="cx" />)
    const incButton = queryByText(/[\+]/i)
    fireEvent.click(incButton)
    fireEvent.click(incButton)
    expect((container.querySelector('input[type="number"]') as HTMLInputElement).value).toEqual('10')
  })

  test('should increase value of number with multiply by step when click to + button', () => {
    const { container, queryByText } = render(<NumberInput value="0" step="5" id="cx" />)
    const incButton = queryByText(/[\+]/i)
    fireEvent.click(incButton)
    expect((container.querySelector('input[type="number"]') as HTMLInputElement).value).toEqual('5')
  })

  test('should decrease value of number when click to − button', () => {
    const { container, queryByText } = render(<NumberInput value="10" id="cx" />)
    const decButton = queryByText(/[\−]/i)
    fireEvent.click(decButton)
    expect((container.querySelector('input[type="number"]') as HTMLInputElement).value).toEqual('9')
  })

  test('should not decrease value of number when click to − button', () => {
    const { container, queryByText } = render(<NumberInput min="10" value="10" id="cx" />)
    const decButton = queryByText(/[\−]/i)
    fireEvent.click(decButton)
    expect((container.querySelector('input[type="number"]') as HTMLInputElement).value).toEqual('10')
  })

  test('should decrease value of number with multiply by step when click to − button', () => {
    const { container, queryByText } = render(<NumberInput value="10" step="5" id="cx" />)
    const decButton = queryByText(/[\−]/i)
    fireEvent.click(decButton)
    expect((container.querySelector('input[type="number"]') as HTMLInputElement).value).toEqual('5')
  })

  test('should callback function invoke when click to + button', () => {
    const fn = jest.fn()
    const { container, queryByText } = render(<NumberInput onChange={fn} value="0" id="cx" />)
    const incButton = queryByText(/[\+]/i)
    fireEvent.click(incButton)
    expect(fn).toBeCalledTimes(1)
  })

  test('should callback function invoke when click to − button', () => {
    const fn = jest.fn()
    const { container, queryByText } = render(<NumberInput onChange={fn} value="10" id="cx" />)
    const decButton = queryByText(/[\−]/i)
    fireEvent.click(decButton)
    expect(fn).toBeCalledTimes(1)
  })
})