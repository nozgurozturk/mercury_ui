import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, radios, boolean, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Text } from '../components/Text'
import { intent, size, weight } from '../components/Text/Text.types';

const stories = storiesOf('Text', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Text component.
    `,
  }
})

// Intent
const intentLabel = 'Intents'
const intentOptions: Record<string, intent> = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error',
}
const intentDefaultValue = 'primary'

// Size
const sizeLabel = 'Sizes'
const sizeOptions: Record<string, size> = {
  default: 'default',
  large: 'large',
  small: 'small'
}
const sizeDefaultValue = 'default'
// Weight
const weightLabel = 'Weights'
const weightOptions: Record<string, weight> = {
  bold: 'bold',
  regular: 'regular',
  light: 'light',
}
const weightDefaultValue = 'regular'

const groupId = 'TEXT'

stories.add('Basic', () =>
  <Text
    intent={radios(intentLabel, intentOptions, intentDefaultValue, groupId)}
    size={radios(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
    weight={radios(weightLabel, weightOptions, weightDefaultValue, groupId)}
  >
    {text('Text', 'Sample Text', groupId)}
  </Text>
)
