/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { config } from 'react-transition-group'
import { Drawer } from '../Drawer'
import * as faker from 'faker'

config.disabled = true

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render drawer content', () => {
    const fn = jest.fn()
    const { queryByText } = render(<Drawer onClose={fn} active={true}>{text}</Drawer>)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should not render drawer content', () => {
    const fn = jest.fn()
    const { queryByText } = render(<Drawer onClose={fn} active={false}>{text}</Drawer>)
    expect(queryByText(text)).not.toBeInTheDocument()
  })

  test('should onClose invoke when overlay is clicked', () => {
    const fn = jest.fn()
    const { container } = render(<Drawer from="right" width={320} closeOnOverlay={true} onClose={fn} active={true}>{text}</Drawer>)
    fireEvent.click(container.parentNode.querySelector('.m-mask__wrapper'))
    expect(fn).toHaveBeenCalledTimes(1)
  })
})