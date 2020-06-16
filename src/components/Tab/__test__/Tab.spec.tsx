/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Tab, TabGroup } from '../index'
import * as faker from 'faker'

let text: string
describe('Text', () => {
  afterEach(cleanup)
  beforeEach(() => {
    text = faker.random.word()
  })

  test('should render tab', () => {
    const { queryByText } = render(
      <TabGroup>
        <Tab>{text}</Tab>
      </TabGroup>
    )
    expect(queryByText(text)).toBeInTheDocument()
  })

  test('should activate clicked tab', () => {
    const { queryByText } = render(
      <TabGroup>
        <Tab tabName={`${text}-tab`}>{text}</Tab>
        <Tab tabName="TabName">Active</Tab>
      </TabGroup>
    )
    expect(queryByText(/Active/i)).not.toBeInTheDocument()
    fireEvent.click(queryByText(/TabName/i))
    expect(queryByText(text)).not.toBeInTheDocument()
    expect(queryByText(/Active/i)).toBeInTheDocument()
  })

  test('should activate when defaultActiveKey is setted', () => {
    const { queryByText } = render(
      <TabGroup defaultActiveTab={1}>
        <Tab tabName={`${text}-tab`}>{text}</Tab>
        <Tab tabName="TabName">Active</Tab>
      </TabGroup>
    )
    expect(queryByText(/Active/i)).toBeInTheDocument()
  })

  test('should invoke callback function when tab is actived', () => {
    const fn = jest.fn()
    const { queryByText } = render(
      <TabGroup onTabChange={fn}>
        <Tab tabName={`${text}-tab`}>{text}</Tab>
        <Tab tabName="TabName">Active</Tab>
      </TabGroup>
    )
    fireEvent.click(queryByText(/TabName/i))
    expect(fn).toHaveBeenCalledTimes(1)
  })
})