
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Tab, TabGroup } from '../components/Tab'

const stories = storiesOf('Tab', module)

stories.add('Default', () =>
  <>
    <TabGroup>
      <Tab tabName="test 1">
        Test 1
      </Tab>
      <Tab tabName="test 2">
        Test 2
      </Tab>
      <Tab tabName="test 3">
        Test 3
      </Tab>
    </TabGroup>
  </>
)
