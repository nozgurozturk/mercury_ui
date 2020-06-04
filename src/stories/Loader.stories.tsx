
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Loader } from '../components/Loader'

const stories = storiesOf('Loader', module)

stories.add('Default', () =>
  <>
    <Loader active={true} tip="Loading..." />
  </>
)
