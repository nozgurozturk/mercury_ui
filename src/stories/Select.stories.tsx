
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Col, Row } from '../components/Grid'
import { Title } from '../components/Title'
import { TextInput } from '../components/TextInput'
import { Select } from '../components/Select'
import { Button } from '../components/Button'

const stories = storiesOf('Select', module)
const options = [
  { value: "1", name: "one" },
  { value: "2", name: "two" },
  { value: "3", name: "three" },
  { value: "4", name: "one" }, { value: "5", name: "two" }, { value: "6", name: "three" }
]
stories.add('Default', () => {
  const [val, setValue] = React.useState<any>("2")
  return (
    <Row xs={{ align: 'middle', justify: 'center' }}>
      <Col xs={{ span: 12 }}>
        <Title level={2}>Select Ccmp</Title>
        <Title level={3}>{val}</Title>
        <Button onClick={() => setValue("2")}>2</Button>
      </Col>
      <Col xs={{ span: 1 }} style={{ marginTop: 16 }}>
        <Row xs={{ justify: 'center', align: 'middle' }} vertical={true}>
          <Select placeholder="Placeholder" label="Label" helperText="Helper Text" options={options} onChange={(val) => setValue(val)} value={val} />
          <Select
            status="error"
            search
            printOptions="always"
            errorMessage="Error message"
            placeholder="Placeholder"
            label="Label"
            helperText="Helper Text"
            options={options} onChange={(val) => setValue(val)} value={val} />
          <Select
            loading={true}
            disabled={true}
            status="error"
            errorMessage="Error message"
            placeholder="Placeholder"
            label="Label"
            helperText="Helper Text"
            options={[]}
            onChange={(val) => setValue(val)} value={val} />
          <TextInput placeholder="Placeholder" label="Label" helperText="Helper Text" />
        </Row>
      </Col>
    </Row >
  )
}
)
