
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Result } from '../components/Result'
import { Button } from '../components/Button'
import { Row, Col } from '../components/Grid'
const stories = storiesOf('Result', module)

stories.add('Default', () =>
  <>
    <Result
      icon="basket"
      message="Sorry, You don't have any item in your basket"
      description="You can go to our shopping page and add item to your basket with one-click"
      extra={
        <Row xs={{ justify: 'between' }}>
          <Col>
            <Button size="large">Continue Shopping</Button>
          </Col>
          <Col>
            <Button size="large" variant="outline" intent="secondary">Back to My Orders</Button>
          </Col>
        </Row>
      }
    />
  </>
)
