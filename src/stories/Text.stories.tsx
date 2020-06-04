
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Col, Row } from '../components/Grid'
import { Title } from '../components/Title'
import { Text } from '../components/Text'

const stories = storiesOf('Text', module)

stories.add('Intents', () =>
  <Row xs={{ align: 'middle', justify: 'center' }}>
    <Col xs={{ span: 12 }}>
      <Title level={2}>Text Intents</Title>
    </Col>
    <Col xs={{ span: 1 }} style={{ marginTop: 16 }}>
      <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
        <Text intent="primary">Primary</Text>
        <Text intent="secondary">Secodary</Text>
        <Text intent="success">Success</Text>
        <Text intent="warning">Warning</Text>
        <Text intent="error">Error</Text>
      </Row>
    </Col>
  </Row >
)
