
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Drawer } from '../components/Drawer'
import { Button } from '../components/Button'

const stories = storiesOf('Drawer', module)

stories.add('Default', () => {
  const [isTopActive, setTopActive] = React.useState(false)
  const [isBottomActive, setBottomActive] = React.useState(false)
  const [isLeftActive, setLeftActive] = React.useState(false)
  const [isRightActive, setRightActive] = React.useState(false)
  return (
    <>
      <div style={{ zIndex: 1005, position: 'relative' }}>
        <Button onClick={() => setTopActive(!isTopActive)}>Toggle Top</Button>
        <Button onClick={() => setBottomActive(!isBottomActive)}>Toggle Bottom</Button>
        <Button onClick={() => setLeftActive(!isLeftActive)}>Toggle Left</Button>
        <Button onClick={() => setRightActive(!isRightActive)}>Toggle Right</Button>
      </div>
      <Drawer onClose={(e) => { setTopActive(false) }} active={isTopActive} from='top'>
        <div>TOP</div>
      </Drawer>
      <Drawer onClose={(e) => { setBottomActive(false) }} active={isBottomActive} height={100} from='bottom'>
        <div>BOTTOM</div>
      </Drawer>
      <Drawer onClose={(e) => { setLeftActive(false) }} active={isLeftActive} width={400} from='left'>
        <div>LEFT</div>
      </Drawer>
      <Drawer onClose={(e) => { setRightActive(false) }} active={isRightActive} from='right'>
        <div>RIGHT</div>
      </Drawer>
    </>
  )
})
