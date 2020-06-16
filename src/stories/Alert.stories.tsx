import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, radios, boolean, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Alert } from '../components/Alert'
import { intent } from '../components/Alert/Alert.types';

const stories = storiesOf('Alert', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Alert component for feedback or important message.
    `,
  }
})
// Type
const typeLabel = 'Intents'
const typeOption: Record<string, intent> = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
  custom: 'custom'
}
const typedefaultValue = 'success'

// Message
const messageLabel = 'Message'
const messageDefaultValue = 'Example Message';

// Description
const descriptionLabel = 'Description'
const descriptionDefaultValue = 'Example description'

// Custom Icon
const customIconLabel = 'Custom Icon'
const customIconOptions = [
  'tag',
  'user',
  'shopping--bag'
]
const customIconDefaultValue = 'user'

const groupId = 'ALERT_PROPS'

stories.add('Basic',
  () => {
    return (
      <Alert
        customIcon={select(customIconLabel, customIconOptions, customIconDefaultValue, groupId)}
        closable={boolean('closable', false, groupId)}
        intent={radios(typeLabel, typeOption, typedefaultValue, groupId)}
        message={text(messageLabel, messageDefaultValue, groupId)}
        description={text(descriptionLabel, descriptionDefaultValue, groupId)}
      />
    )
  })

stories.add('withOutIntent',
  () => {
    return (
      <Alert
        closable={boolean('closable', false, groupId)}
        message={text(messageLabel, messageDefaultValue, groupId)}
        description={text(descriptionLabel, descriptionDefaultValue, groupId)}
      />
    )
  })
