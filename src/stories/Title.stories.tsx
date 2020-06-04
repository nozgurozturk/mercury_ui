
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Col, Row } from '../components/Grid'
import { Title } from '../components/Title'

const stories = storiesOf('Title', module)

stories.add('Intents', () =>
  <Row xs={{ align: 'middle', justify: 'center' }}>
    <Col xs={{ span: 12 }}>
      <Title level={2}>Title Intents</Title>
    </Col>
    <Col xs={{ span: 12 }} style={{ marginTop: 16 }}>
      <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
        <Title intent="primary">Primary</Title>
        <Title intent="secondary">Secodary</Title>
        <Title intent="success">Success</Title>
        <Title intent="warning">Warning</Title>
        <Title intent="error">Error</Title>
      </Row>
    </Col>
  </Row >
)

stories.add('Levels', () =>
  <Row xs={{ align: 'middle', justify: 'center' }}>
    <Col xs={{ span: 12 }}>
      <Title level={2}>Text Intents</Title>
    </Col>
    <Col xs={{ span: 12 }} style={{ marginTop: 16 }}>
      <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
        <Title level={1}>Heading 1</Title>
        <Title level={2}>Heading 2</Title>
        <Title level={3}>Heading 3</Title>
        <Title level={4}>Heading 4</Title>
      </Row>
    </Col>
  </Row >
)
