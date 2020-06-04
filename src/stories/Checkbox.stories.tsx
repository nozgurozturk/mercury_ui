
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Checkbox } from '../components/Checkbox'

const stories = storiesOf('Checkbox', module)

stories.add('Default', () =>
  <>
    <Checkbox id="test" label={<div>Test Checkbox</div>} />
    <Checkbox error id="test2" label={<div>Test Checkbox</div>} />
  </>
)
