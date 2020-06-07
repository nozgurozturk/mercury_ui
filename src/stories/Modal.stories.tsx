
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Modal } from '../components/Modal'
import { Button } from '../components/Button'

const stories = storiesOf('Modal', module)

stories.add('Default', () => {
  const [isActive, setActive] = React.useState(false)
  return (
    <>
      <Button onClick={() => setActive(!isActive)}>SET ACTIVE</Button>
      <Modal active={isActive} onClose={() => setActive(false)}> Default </Modal>
    </>)
}
)
