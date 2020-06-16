
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, button, radios, number, boolean, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Icon } from '../components/Icon'
import { intent } from '../components/Icon/Icon.types';

const stories = storiesOf('Icon', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Icon component.
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

const intentLabel = 'Intents'
const intentOptions: Record<string, intent> = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
}
const intentDefaultValue = 'primary'

const groupId = 'ICON'

stories.add('Basic', () => {
  return (
    <Icon
      intent={radios(intentLabel, intentOptions, intentDefaultValue, groupId)}
      size={number('Icon Size', 32, { step: 1, min: 0 }, groupId)}
      name={select('Icon', icons, 'add--alt', groupId)} />
  )
})

stories.add('All', () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {icons.map(i => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: 128, height: 128 }}>
          <Icon
            intent={radios(intentLabel, intentOptions, intentDefaultValue, groupId)}
            size={32}
            name={i} />
          <p style={{ marginTop: 8 }}>{i}</p>
        </div>
      ))}
    </div>
  )
}).addParameters({ info: { disable: true } })
