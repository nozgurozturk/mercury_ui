
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Collapse, Panel } from '../components/Collapse'

const stories = storiesOf('Collapse', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Collapse component. Expandable content area
    `,
  }
})

const groupId = 'COLLAPSE'

stories.add('Basic', () =>
  <Collapse
    noIcon={boolean('With Out Icon', false, groupId)}
    accordion={boolean('Accordion', false, groupId)}
    bordered={boolean('Bordered', true, groupId)}>
    <Panel>
      <Panel.Header>Content Header One</Panel.Header>
      <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
    </Panel>
    <Panel>
      <Panel.Header>Content Header Two</Panel.Header>
      <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
    </Panel>
    <Panel>
      <Panel.Header>Content Header Three</Panel.Header>
      <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
    </Panel>
  </Collapse>
)

stories.add('withDefaultActive', () =>
  <Collapse
    defaultActive={2}
    noIcon={boolean('With Out Icon', false, groupId)}
    accordion={boolean('Accordion', false, groupId)}
    bordered={boolean('Bordered', true, groupId)}>
    <Panel>
      <Panel.Header>Content Header One</Panel.Header>
      <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
    </Panel>
    <Panel >
      <Panel.Header>Content Header Two</Panel.Header>
      <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
    </Panel>
    <Panel>
      <Panel.Header>Content Header Three</Panel.Header>
      <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
    </Panel>
  </Collapse>
)

stories.add('withDisabled', () =>
  <Collapse
    noIcon={boolean('With Out Icon', false, groupId)}
    accordion={boolean('Accordion', false, groupId)}
    bordered={boolean('Bordered', true, groupId)}>
    <Panel>
      <Panel.Header>Content Header One</Panel.Header>
      <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
    </Panel>
    <Panel disabled >
      <Panel.Header>Content Header Two</Panel.Header>
      <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
    </Panel>
    <Panel>
      <Panel.Header>Content Header Three</Panel.Header>
      <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
    </Panel>
  </Collapse>
)
