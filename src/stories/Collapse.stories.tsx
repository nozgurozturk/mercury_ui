
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Collapse, Panel } from '../components/Collapse'

const stories = storiesOf('Collapse', module)

stories.add('Accordion', () =>
  <>
    <Collapse accordion>
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
  </>
)
stories.add('Default', () =>
  <>
    <Collapse>
      <Panel>
        <Panel.Header>Content Header One</Panel.Header>
        <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
      </Panel>
      <Panel disabled>
        <Panel.Header>Content Header Two</Panel.Header>
        <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
      </Panel>
      <Panel>
        <Panel.Header>Content Header Three</Panel.Header>
        <Panel.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium ab nihil autem. Corrupti quae temporibus consequatur optio ex quam adipisci rem iste.</Panel.Content>
      </Panel>
    </Collapse>
  </>
)
