
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Checkbox } from '../components/Checkbox'

const stories = storiesOf('Checkbox', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Checkbox component.
    `,
  }
})

const groupId = 'CHECKBOX'

stories.add('Basic', () =>
  <Checkbox
    id="checkbox_id"
    disabled={boolean('Disabled', false, groupId)}
    error={boolean('Error', false, groupId)}
    errorMessage={text('Error Message', 'Something wrong', groupId)}
    label={text('Text', 'Checkbox', groupId)}
  />
)
