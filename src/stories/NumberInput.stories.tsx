
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Row, Col } from '../components/Grid'
import { NumberInput } from '../components/NumberInput'
import { Title } from '../components/Title'
import { Button } from '../components/Button'

const stories = storiesOf('NumberInput', module)

stories.add('Default', () => {
  const sampleRef = React.useRef<HTMLInputElement>()
  const [numberVal, setNumberVal] = React.useState('');
  return (
    <Row xs={{ align: 'middle', justify: 'center' }}>
      <Col xs={{ span: 12 }}>
        <Title level={2}>Button Variants</Title>
        <Title level={2}>{numberVal}</Title>
      </Col>
      <Col xs={{ span: 1 }} style={{ marginTop: 16 }}>
        <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
          <NumberInput ref={sampleRef} onChange={({ target: { value } }) => { setNumberVal(value); }} id="test" placeholder="Placeholder" label="Label" helperText="Helper Text" />
          <NumberInput loading={true} placeholder="Placeholder" label="Label" helperText="Helper Text" />
        </Row>
      </Col>
    </Row>
  )
}
)