/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Text } from '../Text'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render text', () => {
    const { getByText } = render(<Text>{text}</Text>)
    expect(getByText(text)).toHaveTextContent(text)
  })
})