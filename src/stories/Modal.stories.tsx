
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, button, radios, number, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Modal } from '../components/Modal'
import { Button } from '../components/Button'

const stories = storiesOf('Modal', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Modal component. Notify user or open dialogs
    `,
  }
})
const buttonLabel = 'Toggle';
const groupId = 'MODAL';

stories.add('Default', () => {
  const [isActive, setActive] = React.useState(false)
  button(buttonLabel, () => { setActive(!isActive) }, groupId);
  return (
    <Modal
      active={isActive}
      onClose={() => setActive(false)}
      closeOnOverlay={boolean('Close on overlay', true, groupId)}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga beatae perferendis earum obcaecati eum cum autem, vero reprehenderit recusandae adipisci tenetur corporis ad? Possimus quasi quia labore facilis maiores repudiandae?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis dicta, aspernatur modi voluptatem amet quisquam magnam iure quod et, aliquam dolor magni quibusdam illum dignissimos natus eos culpa veritatis?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus exercitationem aut cum quod autem dolor tempora, minus odio consectetur corrupti laborum deleniti voluptates ducimus? Excepturi, atque? Ea corporis a esse?
    </Modal>
  )
}
)
