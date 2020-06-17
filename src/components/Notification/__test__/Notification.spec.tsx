/* eslint-disable no-undef */
import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { config } from 'react-transition-group'
import { Notification } from '../Notification'
import * as faker from 'faker'

config.disabled = true

let text: string
describe('Text', () => {
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render notification message', () => {
    const fn = jest.fn(() => {
      Notification.open({
        message: text
      })
    })
    const { queryByText, queryByRole } = render(
      <>
        <button onClick={fn}>Open</button>
        <div id="m-not-container"></div>
      </>)
    fireEvent.click(queryByRole('button', { name: /Open/i }))
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should render notification description', () => {
    const fn = jest.fn(() => {
      Notification.open({
        description: text
      })
    })
    const { queryByText, queryByRole } = render(
      <>
        <button onClick={fn}>Open</button>
        <div id="m-not-container"></div>
      </>)
    fireEvent.click(queryByRole('button', { name: /Open/i }))
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should unmount notification after given duration', () => {
    const fn = jest.fn(() => {
      Notification.open({
        message: text,
        duration: 10,
      })
    })
    const { queryByText, queryByRole } = render(
      <>
        <button onClick={fn}>Open</button>
        <div id="m-not-container"></div>
      </>)
    fireEvent.click(queryByRole('button', { name: /Open/i }))
    expect(queryByText(text)).toBeInTheDocument()
    setTimeout(() => {
      expect(queryByText(text)).not.toBeInTheDocument()
    }, 10)
  })

  test('should unmount notification when click close button', () => {
    const fn = jest.fn(() => {
      Notification.open({
        message: text,
      })
    })
    const { queryByText, queryByRole, container } = render(
      <>
        <button onClick={fn}>Open</button>
        <div id="m-not-container"></div>
      </>)
    fireEvent.click(queryByRole('button', { name: /Open/i }))
    const closeButton = container.querySelector('.m-notice__close')
    expect(closeButton).toBeInTheDocument()
    expect(queryByText(text)).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(queryByText(text)).not.toBeInTheDocument()
  })
})