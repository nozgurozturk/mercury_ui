
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Skeleton } from '../components/Skeleton'

const stories = storiesOf('Skeleton', module)

stories.add('Default', () =>
  <>
    <Skeleton active={true} rows={5} />
  </>
)
