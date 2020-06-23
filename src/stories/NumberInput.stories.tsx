import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, radios, number } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { NumberInput } from '../components/NumberInput'
import { status, size } from '../components/NumberInput/NumberInput.types';

const stories = storiesOf('NumberInput', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Number input for numeric values
    `,
  }
})
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

const groupId = 'NINPUT'

stories.add('Default', () => {
  // const sampleRef = React.useRef<HTMLInputElement>(null)
  const [numberVal, setNumberVal] = React.useState('');
  return (
    <NumberInput
      id="ni"
      inputSize={radios(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
      mobile={boolean('Mobile', false, groupId)}
      loading={boolean('Loading', false, groupId)}
      placeholder={text('Placeholder', 'Placeholder', groupId)}
      label={text('Label', 'Label', groupId)}
      helperText={text('Helper Text', 'Helper Text', groupId)}
      min={number('Min', 0, { step: 1 }, groupId)}
      max={number('Max', 100, { step: 1 }, groupId)}
      step={number('Step', 1, { step: 1 }, groupId)}
      value={numberVal}
      onChange={(e) => { setNumberVal(e.target.value); }} />

  )
})

stories.add('withStatus', () => {
  // const sampleRef = React.useRef<HTMLInputElement>(null)
  const [numberVal, setNumberVal] = React.useState('');
  return (
    <NumberInput
      id="ni"
      inputSize={radios(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
      mobile={boolean('Mobile', false, groupId)}
      loading={boolean('Loading', false, groupId)}
      placeholder={text('Placeholder', 'Placeholder', groupId)}
      label={text('Label', 'Label', groupId)}
      helperText={text('Helper Text', 'Helper Text', groupId)}
      status={radios(statusLabel, statusOptions, statusDefaultValue, groupId)}
      errorMessage={text('Error Message', 'Something wrong', groupId)}
      min={number('Min', 0, { step: 1 }, groupId)}
      max={number('Max', 100, { step: 1 }, groupId)}
      step={number('Step', 1, { step: 1 }, groupId)}
      value={numberVal}
      onChange={(e) => { setNumberVal(e.target.value); }} />
  )
})
