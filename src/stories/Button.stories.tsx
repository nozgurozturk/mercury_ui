import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Row, Col } from '../components/Grid'
import { Title } from '../components/Title'
import { Button } from '../components/Button'

const centeredButtonStyle = { marginBottom: 8 }

const stories = storiesOf('Button', module)

stories.add('Variants', () =>
  <Row xs={{ align: 'middle', justify: 'center' }}>
    <Col xs={{ span: 12 }}>
      <Title level={2}>Button Variants</Title>
    </Col>
    <Col xs={{ span: 1 }} style={{ marginTop: 16 }}>
      <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
        <Button>Ses Ses Ses</Button>
        <Button style={centeredButtonStyle} variant="solid">Solid</Button>
        <Button style={centeredButtonStyle} variant="outline">Outline</Button>
        <Button style={centeredButtonStyle} variant="ghost">Ghost</Button>
        <Button style={centeredButtonStyle} disabled={true}>Disabled</Button>
        <Button style={centeredButtonStyle} loading={true}>Loading</Button>
      </Row>
    </Col>
  </Row >
)

stories.add('Intents', () =>
  <Row xs={{ align: 'middle', justify: 'center' }}>
    <Col xs={{ span: 12 }}>
      <Title level={2}>Button Variants</Title>
    </Col>
    <Col xs={{ span: 1 }} style={{ marginTop: 16 }}>
      <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
        <Button style={centeredButtonStyle} intent="primary">Primary</Button>
        <Button style={centeredButtonStyle} intent="secondary">Secondary</Button>
        <Button style={centeredButtonStyle} intent="success">Success</Button>
        <Button style={centeredButtonStyle} intent="warning">Warning</Button>
        <Button style={centeredButtonStyle} intent="error">Error</Button>
      </Row>
    </Col>
  </Row >
)

stories.add('with Icon', () =>
  <Row xs={{ align: 'middle', justify: 'center' }}>
    <Col xs={{ span: 12 }}>
      <Title level={2}>Button Variants</Title>
    </Col>
    <Col xs={{ span: 1 }} style={{ marginTop: 16 }}>
      <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
        <Button style={centeredButtonStyle} icon="profile" variant="solid">Solid</Button>
        <Button style={centeredButtonStyle} icon="profile" variant="outline">Outline</Button>
        <Button style={centeredButtonStyle} icon="profile" variant="ghost">Ghost</Button>
        <Button style={centeredButtonStyle} icon="profile" disabled={true}>Disabled</Button>
        <Button style={centeredButtonStyle} icon="profile" loading={true}>Loading</Button>
      </Row>
    </Col>
  </Row >
)

stories.add('Sizes', () =>
  <Row xs={{ align: 'middle', justify: 'center' }}>
    <Col xs={{ span: 12 }}>
      <Title level={2}>Button Variants</Title>
    </Col>
    <Col xs={{ span: 1 }} style={{ marginTop: 16 }}>
      <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
        <Button style={centeredButtonStyle} size="default">Default</Button>
        <Button style={centeredButtonStyle} size="large">Large</Button>
        <Button style={centeredButtonStyle} size="small">Small</Button>
      </Row>
    </Col>
  </Row >
)

