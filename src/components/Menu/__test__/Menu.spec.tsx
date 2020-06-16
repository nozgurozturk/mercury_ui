/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Menu } from '../Menu'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render menu', () => {
    const { queryByText } = render(
      <Menu>
        <Menu.Item>{text}</Menu.Item>
      </Menu>
    )
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should activate clicked menu item', () => {
    const fn = jest.fn()
    const { queryByText } = render(
      <Menu>
        <Menu.Item>{text}</Menu.Item>
        <Menu.Item onClick={fn}>Active</Menu.Item>
      </Menu>
    )
    fireEvent.click(queryByText(/Active/i))
    expect(queryByText(/Active/i).parentElement.classList.contains('m-menu__item--active')).toEqual(true)
  })

  test('should activate when defaultActiveKey is setted', () => {
    const { queryByText } = render(
      <Menu defaultActiveKey={1}>
        <Menu.Item>{text}</Menu.Item>
        <Menu.Item>Active</Menu.Item>
      </Menu>
    )
    expect(queryByText(/Active/i).parentElement.classList.contains('m-menu__item--active')).toEqual(true)
  })

  test('should render nav when isNav is active', () => {
    const { container } = render(
      <Menu isNav={true}>
        <Menu.Item>{text}</Menu.Item>
      </Menu>
    )
    expect(container.parentNode.querySelector('.m-nav')).toBeInTheDocument()
  })
})