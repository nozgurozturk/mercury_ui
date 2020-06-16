
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, button, radios, number, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Drawer } from '../components/Drawer'
import { from } from '../components/Drawer/Drawer.types';

const stories = storiesOf('Drawer', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Drawer component. Sliding panels from edge of the screen
    `,
  }
})
// Toggle
const buttonLabel = 'Toggle';

// From
const fromLabel = 'From'
const fromOptions: Record<string, from> = {
  right: 'right',
  top: 'top',
  left: 'left',
  bottom: 'bottom'
}
const fromDefaultValue = 'right'
const groupId = 'DRAWER';


stories.add('Default', () => {
  const [isActive, setActive] = React.useState(false)
  button(buttonLabel, () => { setActive(!isActive) }, groupId);
  return (
    <Drawer
      active={isActive}
      onClose={() => setActive(false)}
      from={radios(fromLabel, fromOptions, fromDefaultValue, groupId)}
      closeOnOverlay={boolean('Close on overlay', true, groupId)}
      width={number('Width', null, { step: 40 }, groupId)}
      height={number('Height', null, { step: 40 }, groupId)}
    >
      <div>Drawer Content</div>
    </Drawer>
  )
})
