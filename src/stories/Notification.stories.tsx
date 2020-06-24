
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, button, radios, number, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Notification } from '../components/Notification'
import { Button } from '../components/Button'
import * as faker from 'faker'
import { intent } from '../components/Notification/Notification.types';
const stories = storiesOf('Notification', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Notification component. Notify user or open dialogs.
      You need to create container element with  __m-not-container__  id
      ~~~ts
      Notification.open({
      message: 'Message of Notification',
      description: <div>Description</div>,
      intent: 'success',
      duration: 2400
    })
      ~~~
  `,
  }
})

const intentLabel = 'Intents'
const intentOptions: Record<string, intent> = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
}
const intentDefaultValue = 'primary'

const groupId = 'NOTIFICATION';


stories.add('Default', () => {
  const intents: intent[] = [
    'success',
    'warning',
    'error',
    'info'
  ]
  const openNotification = (int?) => {
    Notification.open({
      message: faker.random.word(),
      description: faker.random.words(20),
      intent: int,
      duration: 12000
    })
  }

  const renderButtons = () => {
    return (
      <>
        {intents.map(i => (
          <Button variant={i === 'info' ? 'outline' : 'solid'} intent={i === 'info' ? 'primary' : i} onClick={() => openNotification(i)} >{i.toUpperCase()}</Button>
        ))}
        <Button intent="secondary" onClick={() => openNotification()} >NO INTENT</Button>
      </>
    )
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {renderButtons()}
      <div id="m-not-container"></div>

    </div>
  )
}
)
