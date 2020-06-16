import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Loader } from '../components/Loader'

const stories = storiesOf('Loader', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Loader component.
    `,
  }
})

const groupId = 'LOADER'
stories.add('Basic', () =>
  <Loader
    active={boolean('Active', true, groupId)}
    size={number('Size', 16, { step: 1, min: 12 }, groupId)}
    tip={text('Tip', 'Loading...', groupId)} />
)
