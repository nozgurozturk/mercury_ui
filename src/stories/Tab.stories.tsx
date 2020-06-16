import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Tab, TabGroup } from '../components/Tab'
import * as faker from 'faker'
const stories = storiesOf('Tab', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Tab component for easy switch between views
    `,
  }
})

const groupId = 'TAB'

stories.add('Default', () => {

  return (
    <TabGroup >
      {
        [...Array(number('Number of Tabs', 3, { step: 1, min: 1 }, groupId))].map((t, index) => (
          <Tab tabName={`Tab ${index + 1}`}>
            {faker.random.words(120)}
          </Tab>
        ))
      }
    </TabGroup>
  )
})

stories.add('withDefaultActive', () => {

  return (
    <TabGroup defaultActiveTab={1}>
      {
        [...Array(number('Number of Tabs', 3, { step: 1, min: 1 }, groupId))].map((t, index) => (
          <Tab tabName={`Tab ${index + 1}`}>
            {faker.random.words(120)}
          </Tab>
        ))
      }
    </TabGroup>
  )
})
