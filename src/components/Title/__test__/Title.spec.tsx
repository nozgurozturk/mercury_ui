/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Title } from '../Title'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render title', () => {
    const { getByText } = render(<Title>{text}</Title>)
    expect(getByText(text)).toHaveTextContent(text)
  })

  test('should render h1 if given level is 1', () => {
    const { getByText } = render(<Title level={1}>{text}</Title>)
    expect(getByText(text).tagName).toBe('H1')
  })
  test('should render h2 if given level is 2', () => {
    const { getByText } = render(<Title level={2}>{text}</Title>)
    expect(getByText(text).tagName).toBe('H2')
  })
  test('should render h3 if given level is 3', () => {
    const { getByText } = render(<Title level={3}>{text}</Title>)
    expect(getByText(text).tagName).toBe('H3')
  })
  test('should render h4 if given level is 4', () => {
    const { getByText } = render(<Title level={4}>{text}</Title>)
    expect(getByText(text).tagName).toBe('H4')
  })
})