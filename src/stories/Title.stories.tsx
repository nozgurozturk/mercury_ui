import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, radios, boolean, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Title } from '../components/Title'
import { intent, level } from '../components/Title/Title.types';

const stories = storiesOf('Title', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Title component.
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
const sizeLabel = 'Levels'
const sizeOptions: Record<string, level> = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4
}
const sizeDefaultValue = 1

const groupId = 'TITLE'

stories.add('Basic', () =>
  <Title
    intent={radios(intentLabel, intentOptions, intentDefaultValue, groupId)}
    level={radios(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
  >
    {text('Text', 'Sample Title', groupId)}
  </Title>
)