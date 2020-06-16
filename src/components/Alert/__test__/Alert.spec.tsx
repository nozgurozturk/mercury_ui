/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Alert } from '../Alert'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render message of alert', () => {
    const { getByText } = render(<Alert message={text} />)
    expect(getByText(text)).toHaveTextContent(text)
  })

  test('should render description of alert', () => {
    const { getByText } = render(<Alert description={text} />)
    expect(getByText(text)).toHaveTextContent(text)
  })

  test('should render close button', () => {
    const { container } = render(<Alert closable description={text} message={text} />)
    expect(container.querySelector('.m-alert__close')).toBeInTheDocument()
  })

  test('should unmount when close button is clicked', () => {
    const { container, queryByText } = render(<Alert closable message={text} />)
    fireEvent.click(container.querySelector('.m-alert__close'))
    expect(queryByText(text)).toBe(null)
  })
})