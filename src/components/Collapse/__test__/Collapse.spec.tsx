/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { config } from 'react-transition-group'
import { Collapse, Panel } from '../index'
import * as faker from 'faker'

config.disabled = true

let text: string
let longText: string
describe('Collapse', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
    longText = faker.random.words(120)
  })

  test('should render panel', () => {
    const { getByText } = render(
      <Collapse>
        <Panel>
          <Panel.Header>{text}</Panel.Header>
          <Panel.Content>{longText}</Panel.Content>
        </Panel>
      </Collapse>
    )
    expect(getByText(text)).toBeInTheDocument()
  })

  test('should not render panel content when panel is not active', () => {
    // When you click to panel header, panel will be activated
    const { queryByText } = render(
      <Collapse>
        <Panel>
          <Panel.Header>{text}</Panel.Header>
          <Panel.Content>{longText}</Panel.Content>
        </Panel>
      </Collapse>
    )
    expect(queryByText(longText)).not.toBeInTheDocument()
  })

  test('should render panel content when panel is active', () => {
    const { queryByText } = render(
      <Collapse defaultActive={1}>
        <Panel>
          <Panel.Header>{text}</Panel.Header>
          <Panel.Content>{longText}</Panel.Content>
        </Panel>
      </Collapse>
    )
    expect(queryByText(longText)).toBeInTheDocument()
  })

  test('should not render default activated panel content when panel is disabled', () => {
    const { queryByText } = render(
      <Collapse defaultActive={1}>
        <Panel disabled >
          <Panel.Header>{text}</Panel.Header>
          <Panel.Content>{longText}</Panel.Content>
        </Panel>
      </Collapse>
    )
    expect(queryByText(longText)).not.toBeInTheDocument()
  })

  test('should render panel content when click to panel header', () => {
    const { queryByText, getByText } = render(
      <Collapse>
        <Panel>
          <Panel.Header>{text}</Panel.Header>
          <Panel.Content>{longText}</Panel.Content>
        </Panel>
      </Collapse>
    )
    expect(queryByText(longText)).not.toBeInTheDocument()
    fireEvent.click(getByText(text))
    expect(queryByText(longText)).toBeInTheDocument()
  })

  test('should render multiple panel content when clicked to related panel header', () => {
    const { queryByText, getByText } = render(
      <Collapse >
        <Panel>
          <Panel.Header>Panel One</Panel.Header>
          <Panel.Content>Content One</Panel.Content>
        </Panel>
        <Panel>
          <Panel.Header>Panel Two</Panel.Header>
          <Panel.Content>Content Two</Panel.Content>
        </Panel>
      </Collapse>
    )
    expect(queryByText(/Content One/i)).not.toBeInTheDocument()
    expect(queryByText(/Content Two/i)).not.toBeInTheDocument()
    fireEvent.click(getByText(/Panel One/i))
    fireEvent.click(getByText(/Panel Two/i))
    expect(queryByText(/Content One/i)).toBeInTheDocument()
    expect(queryByText(/Content Two/i)).toBeInTheDocument()
  })

  test('should render only one panel content when accordion prop is true', () => {
    const { queryByText, getByText } = render(
      <Collapse accordion>
        <Panel>
          <Panel.Header>Panel One</Panel.Header>
          <Panel.Content>Content One</Panel.Content>
        </Panel>
        <Panel>
          <Panel.Header>Panel Two</Panel.Header>
          <Panel.Content>Content Two</Panel.Content>
        </Panel>
        <Panel>
          <Panel.Header>Panel Three</Panel.Header>
          <Panel.Content>Content Three</Panel.Content>
        </Panel>
      </Collapse>
    )
    expect(queryByText(/Content One/i)).not.toBeInTheDocument()
    expect(queryByText(/Content Two/i)).not.toBeInTheDocument()
    expect(queryByText(/Content Three/i)).not.toBeInTheDocument()
    fireEvent.click(getByText(/Panel One/i))
    expect(queryByText(/Content One/i)).toBeInTheDocument()
    expect(queryByText(/Content Two/i)).not.toBeInTheDocument()
    expect(queryByText(/Content Three/i)).not.toBeInTheDocument()
    fireEvent.click(getByText(/Panel Two/i))
    expect(queryByText(/Content One/i)).not.toBeInTheDocument()
    expect(queryByText(/Content Two/i)).toBeInTheDocument()
    expect(queryByText(/Content Three/i)).not.toBeInTheDocument()
    fireEvent.click(getByText(/Panel Three/i))
    expect(queryByText(/Content One/i)).not.toBeInTheDocument()
    expect(queryByText(/Content Two/i)).not.toBeInTheDocument()
    expect(queryByText(/Content Three/i)).toBeInTheDocument()
  })
})