import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Result } from '../components/Result'
import { Button } from '../components/Button'
const stories = storiesOf('Result', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Result component for response
    `,
  }
})
const icons = [
  'add--alt',
  'add--filled',
  'add',
  'arrow--down',
  'arrow--left',
  'arrow--right',
  'arrow--up',
  'success--filled',
  'success--outline',
  'success',
  'chevron--down',
  'chevron--left',
  'chevron--right',
  'chevron--up',
  'close--filled',
  'close--outline',
  'close',
  'copy',
  'error--filled',
  'error--outline',
  'error',
  'help--filled',
  'help',
  'info--filled',
  'info',
  'misuse--outline',
  'misuse',
  'redo',
  'renew',
  'reset',
  'restart',
  'search',
  'shopping--bag',
  'shopping--cart',
  'subtract',
  'tag',
  'user--avatar--filled--alt',
  'user--avatar--filled',
  'user--avatar',
  'user--filled',
  'user',
  'view--filled',
  'view--off--filled',
  'view--off',
  'view',
  'warning--alt--filled',
  'warning--alt',
  'warning--filled',
  'warning',
]

const groupId = 'RESULT'

stories.add('Default', () =>
  <Result
    icon={select('Icon', icons, 'arrow--left', groupId)}
    iconSize={number('IconSize', 64, { step: 1 }, groupId)}
    message={text('Message', 'Roads? Where We’re Going, We Don’t Need Roads.', groupId)}
    description={text('Description', 'Because, We have a flying DeLorean', groupId)}
    extra={
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button size="large">Back to the Future I</Button>
        <Button size="large" variant="outline" intent="secondary">Back to the Future II</Button>
      </div >
    }
  />
)
