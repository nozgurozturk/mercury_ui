/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Checkbox } from '../Checkbox'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render checkbox', () => {
    const { container } = render(<Checkbox id="cx" />)
    expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument()
  })

  test('should render checkbox text', () => {
    const { getByText } = render(<Checkbox id="cx" label={text} />)
    expect(getByText(text)).toHaveTextContent(text)
  })

  test('should render error message', () => {
    const { getByText } = render(<Checkbox id="cx" label={text} error={true} errorMessage="something wrong" />)
    expect(getByText(/something wrong/i)).toBeInTheDocument()
  })

  test('should checked changes when checkbox is clicked', () => {
    const fn = jest.fn()
    const { container } = render(<Checkbox id="cx" label={text} onClick={fn} />)
    fireEvent.click(container.querySelector('label'))
    expect((container.querySelector('input[type="checkbox"]') as HTMLInputElement).checked).toEqual(true)
  })

  test('should checked not changes when disabled checkbox is clicked', () => {
    const fn = jest.fn()
    const { container } = render(<Checkbox disabled id="cx" label={text} onClick={fn} />)
    fireEvent.click(container.querySelector('label'))
    expect((container.querySelector('input[type="checkbox"]') as HTMLInputElement).checked).toEqual(false)
  })
})