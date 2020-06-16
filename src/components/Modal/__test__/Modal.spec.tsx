/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { config } from 'react-transition-group'
import { Modal } from '../Modal'
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
    const { queryByText } = render(<Modal onClose={fn} active={true}>{text}</Modal>)
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should not render drawer content', () => {
    const fn = jest.fn()
    const { queryByText } = render(<Modal onClose={fn} active={false}>{text}</Modal>)
    expect(queryByText(text)).not.toBeInTheDocument()
  })

  test('should onClose invoke when overlay is clicked', () => {
    const fn = jest.fn()
    const { container } = render(<Modal closeOnOverlay={true} onClose={fn} active={true}>{text}</Modal>)
    fireEvent.click(container.parentNode.querySelector('.m-mask__wrapper'))
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('should onClose invoke when close button is clicked', () => {
    const fn = jest.fn()
    const { container } = render(<Modal closeOnOverlay={true} onClose={fn} active={true}>{text}</Modal>)
    fireEvent.click(container.parentNode.querySelector('.m-modal__close'))
    expect(fn).toHaveBeenCalledTimes(1)
  })
})