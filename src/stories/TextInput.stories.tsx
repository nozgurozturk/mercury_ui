import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, radios, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { TextInput } from '../components/TextInput'
import { status, size } from '../components/TextInput/TextInput.types';

const stories = storiesOf('TextInput', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Input for string value
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

// Status
const statusLabel = 'Status'
const statusOptions: Record<string, status> = {
  success: 'success',
  warning: 'warning',
  error: 'error',
}
const statusDefaultValue = 'success'
// Size
const sizeLabel = 'Size'
const sizeOptions: Record<string, size> = {
  default: 'default',
  large: 'large',
  small: 'small',
}
const sizeDefaultValue = 'default'

const groupId = 'TINPUT'

stories.add('Default', () => {
  return (
    <TextInput
      inputSize={radios(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
      loading={boolean('Loading', false, groupId)}
      prefix={select('Prefix', icons, '', groupId)}
      suffix={select('Suffix', icons, '', groupId)}
      disabled={boolean('Disabled', false, groupId)}
      label={text('Label', 'Label', groupId)}
      helperText={text('Helper', 'Helper', groupId)}
      placeholder={text('Placeholder', 'Placeholder', groupId)} />
  )
})

stories.add('withStatus', () => {
  return (
    <TextInput
      inputSize={radios(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
      loading={boolean('Loading', false, groupId)}
      prefix={select('Prefix', icons, '', groupId)}
      suffix={select('Suffix', icons, '', groupId)}
      status={radios(statusLabel, statusOptions, statusDefaultValue, groupId)}
      errorMessage={text('Error Message', 'Something wrong', groupId)}
      disabled={boolean('Disabled', false, groupId)}
      label={text('Label', 'Label', groupId)}
      helperText={text('Helper', 'Helper', groupId)}
      placeholder={text('Placeholder', 'Placeholder', groupId)} />
  )
})
