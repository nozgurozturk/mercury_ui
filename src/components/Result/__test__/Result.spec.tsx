/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Result } from '../Result'
import * as faker from 'faker'

let text: string
let longText: string
let extraText: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
    longText = faker.random.words(100)
    extraText = faker.random.word()
  })
  test('should render message of Result', () => {
    const { getByText } = render(<Result message={text} />)
    expect(getByText(text)).toHaveTextContent(text)
  })

  test('should render description of Result', () => {
    const { getByText } = render(<Result description={longText} />)
    expect(getByText(longText)).toHaveTextContent(longText)
  })

  test('should render extra content of Result', () => {
    const { getByText } = render(<Result extra={<div>{text}</div>} />)
    expect(getByText(text)).toHaveTextContent(text)
  })

  test('should render icon of Result', () => {
    const { container } = render(<Result icon="add" />)
    expect(container.querySelector('i').classList.contains('icon-add')).toEqual(true)
  })

  test('should render complete elements of Result', () => {
    const { container, getByText } = render(<Result message={text} description={longText} icon="add" extra={<div>{extraText}</div>} />)
    expect(getByText(text)).toHaveTextContent(text)
    expect(getByText(longText)).toHaveTextContent(longText)
    expect(getByText(extraText)).toHaveTextContent(extraText)
    expect(container.querySelector('i').classList.contains('icon-add')).toEqual(true)
  })
})