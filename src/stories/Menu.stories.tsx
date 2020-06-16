
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Menu } from '../components/Menu'

const stories = storiesOf('Menu', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Menu component for navigate around containers or pages
    `,
  }
})

const groupId = 'MENU'


stories.add('Basic', () =>
  <Menu isNav={boolean('Is Nav', false, groupId)}>
    {[...Array(number('Number of Items', 12, { step: 1, min: 1 }, groupId))].map((item, index) => (
      <Menu.Item>{`Item ${index + 1}`}</Menu.Item>
    ))}
  </Menu>
)
