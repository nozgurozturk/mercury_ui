
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Skeleton } from '../components/Skeleton'

const stories = storiesOf('Skeleton', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Skeleton component for placeholder for loading content
    `,
  }
})

const groupId = 'SKELETON'

stories.add('Basic', () =>
  <Skeleton
    active={boolean('Active', true, groupId)}
    rows={number('Rows', 3, { step: 1, min: 1 }, groupId)}
    lastRowHalf={boolean('Last row half', true, groupId)}
  />
)
