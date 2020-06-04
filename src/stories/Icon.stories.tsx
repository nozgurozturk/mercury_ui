
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Icon } from '../components/Icon'

const stories = storiesOf('Icon', module)

stories.add('Default', () =>
  <>
    <Icon name="profile" />
  </>
)
