
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Row, Col } from '../components/Grid'
import { Title } from '../components/Title'
import { Text } from '../components/Text'

const boxStyles = { backgroundColor: '#007FFF', maxWidth: '100%', height: 32, margin: '16px 0px' }
const stories = storiesOf('Grid', module)

stories.add('Auto Layout', () =>
  <>
    <Title level={3}>Grid Auto Layout</Title>
    <Text>Non-Definition</Text>
    <Row>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
    </Row>
    <Row>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
    </Row>
    <Row>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
      <Col><div style={boxStyles}></div></Col>
    </Row>
    <Text>Fixed Size (4)</Text>
    <Row>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
    </Row>
    <Row>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
    </Row>
    <Row>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
    </Row>
    <Text>Mixed Size</Text>
    <Row>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 6 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 2 }}><div style={boxStyles}></div></Col>
    </Row>
    <Row>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 2 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 6 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 8 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
    </Row>
    <Row>
      <Col xs={{ span: 2 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 2 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 6 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 8 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 1 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 2 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 3 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 4 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 5 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 6 }}><div style={boxStyles}></div></Col>
      <Col xs={{ span: 7 }}><div style={boxStyles}></div></Col>
    </Row>
  </>
)
