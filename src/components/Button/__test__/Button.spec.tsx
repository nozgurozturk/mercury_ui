/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Button } from '../Button'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render button', () => {
    const { getByText } = render(<Button>{text}</Button>)
    expect(getByText(text)).toHaveTextContent(text)
  })

  test('should render button icon', () => {
    const { container } = render(<Button icon="close">{text}</Button>)
    expect(container.querySelector('.m-icon')).toBeInTheDocument()
  })

  test('should render button intent', () => {
    const { container } = render(<Button intent="secondary">{text}</Button>)
    expect(container.querySelector('.m-btn--secondary')).toBeInTheDocument()
  })

  test('should render button variant', () => {
    const { container } = render(<Button variant="outline">{text}</Button>)
    expect(container.querySelector('.m-btn--outline')).toBeInTheDocument()
  })

  test('should be call function when button is clicked', () => {
    const fn = jest.fn()
    const { getByText } = render(<Button onClick={fn} >{text}</Button>)
    fireEvent.click(getByText(text))
    expect(fn).toHaveBeenCalled()
  })

  test('should not be interactive when button is disabled', () => {
    const fn = jest.fn()
    const { getByText } = render(<Button onClick={fn} disabled>{text}</Button>)
    fireEvent.click(getByText(text))
    expect(fn).not.toHaveBeenCalled()
  })

  test('should not be interactive when button is loading', () => {
    const fn = jest.fn()
    const { getByText } = render(<Button onClick={fn} loading >{text}</Button>)
    fireEvent.click(getByText(text))
    expect(fn).not.toHaveBeenCalled()
  })
})