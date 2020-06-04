
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Row, Col } from '../components/Grid'
import { TextInput } from '../components/TextInput'
import { Title } from '../components/Title'

const stories = storiesOf('TextInput', module)

stories.add('Default', () => {
  const sampleRef = React.useRef<HTMLInputElement>()
  return (

    <Row xs={{ align: 'middle', justify: 'center' }}>
      <Col xs={{ span: 12 }}>
        <Title level={2}>Button Variants</Title>
      </Col>
      <Col xs={{ span: 1 }} style={{ marginTop: 16 }}>
        <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
          <TextInput placeholder="Placeholder" label="Label" helperText="Helper Text" />
          <TextInput prefix="profile" placeholder="Placeholder" label="Label" helperText="Helper Text" />
          <TextInput status="error" errorMessage="Error message here" suffix="profile" placeholder="Placeholder" label="Label" helperText="Helper Text" />
          <TextInput suffix="profile" loading={true} placeholder="Placeholder" label="Label" helperText="Helper Text" />
          <TextInput inputSize="small" suffix="profile" loading={true} placeholder="Placeholder" label="Label" helperText="Helper Text" />
        </Row>
      </Col>
    </Row >
  )
}
)
