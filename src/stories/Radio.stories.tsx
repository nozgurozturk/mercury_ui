import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Radio } from '../components/Radio'

const stories = storiesOf('Radio', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Radio component.
    `,
  }
})

const groupId = 'RADIO'

stories.add('Basic', () => {
  return (
    <>
      {[...Array(3)].map((r, index) => (
        <Radio
          name="sampleRadio"
          id={`radio-${index + 1}`}
          disabled={boolean('Disabled', false, groupId)}
          error={boolean('Error', false, groupId)}
          errorMessage={text('Error Message', 'Something wrong', groupId)}
          label={text('Text', `Radio`, groupId) + ' ' + (index + 1)}
        />
      ))}
    </>
  )
})