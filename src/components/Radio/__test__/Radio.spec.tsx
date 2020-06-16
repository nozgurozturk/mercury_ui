/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Radio } from '../Radio'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render radio', () => {
    const { container } = render(<Radio id="cx" />)
    expect(container.querySelector('input[type="radio"]')).toBeInTheDocument()
  })

  test('should render radio text', () => {
    const { getByText } = render(<Radio id="cx" label={text} />)
    expect(getByText(text)).toHaveTextContent(text)
  })

  test('should render error message', () => {
    const { getByText } = render(<Radio id="cx" label={text} error={true} errorMessage="something wrong" />)
    expect(getByText(/something wrong/i)).toBeInTheDocument()
  })

  test('should checked changes when radio is clicked', () => {
    const fn = jest.fn()
    const { container } = render(<Radio id="cx" label={text} onClick={fn} />)
    fireEvent.click(container.querySelector('label'))
    expect((container.querySelector('input[type="radio"]') as HTMLInputElement).checked).toEqual(true)
  })

  test('should checked not changes when disabled radio is clicked', () => {
    const fn = jest.fn()
    const { container } = render(<Radio disabled id="cx" label={text} onClick={fn} />)
    fireEvent.click(container.querySelector('label'))
    expect((container.querySelector('input[type="radio"]') as HTMLInputElement).checked).toEqual(false)
  })

})