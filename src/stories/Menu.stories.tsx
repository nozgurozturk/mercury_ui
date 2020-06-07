
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Menu } from '../components/Menu'

const stories = storiesOf('Menu', module)

stories.add('Menu', () =>
  <>
    <Menu onItemChange={(e, item) => { console.log(item) }}>
      <Menu.Item>ONE</Menu.Item>
      <Menu.Item>TWO</Menu.Item>
      <Menu.Item>THREE</Menu.Item>
      <Menu.Item>FOUR</Menu.Item>
      <Menu.Item>FIVE</Menu.Item>
      <Menu.Item>SIX</Menu.Item>
      <Menu.Item>SEVEN</Menu.Item>
      <Menu.Item>EIGHT</Menu.Item>
      <Menu.Item>NINE</Menu.Item>
    </Menu>
  </>
)
stories.add('Nav', () =>
  <>
    <Menu isNav={true} onItemChange={(e, item) => { console.log(item) }}>
      <Menu.Item>ONE</Menu.Item>
      <Menu.Item>TWO</Menu.Item>
      <Menu.Item>THREE</Menu.Item>
      <Menu.Item>FOUR</Menu.Item>
      <Menu.Item>FIVE</Menu.Item>
      <Menu.Item>SIX</Menu.Item>
      <Menu.Item>SEVEN</Menu.Item>
      <Menu.Item>EIGHT</Menu.Item>
      <Menu.Item>NINE</Menu.Item>
    </Menu>
  </>
)
