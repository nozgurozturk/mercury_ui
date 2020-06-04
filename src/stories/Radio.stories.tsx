
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Row, Col } from '../components/Grid'
import { Title } from '../components/Title'
import { Radio } from '../components/Radio'

const stories = storiesOf('Radio', module)


stories.add('Radio', () =>
  <Row xs={{ align: 'middle', justify: 'center' }}>
    <Col xs={{ span: 12 }}>
      <Title level={2}>Button Variants</Title>
    </Col>
    <Col xs={{ span: 4 }} style={{ marginTop: 16 }}>
      <Row xs={{ justify: 'start', }} vertical={true}>
        <Radio name="test" id="one" label="Test One" />
        <Radio name="test" id="two" label="Test Two" />
        <Radio name="test" id="three" label="Test Three" />
      </Row>
    </Col>
  </Row >
)