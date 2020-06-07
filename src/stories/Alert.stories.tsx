
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Alert } from '../components/Alert'


const stories = storiesOf('Alert', module)
stories.add('Default', () =>
  <>
    <Alert type="primary" message="Test Message" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore blanditiis fugiat quidem deserunt natus culpa asperiores dolor, dolorem autem impedit explicabo odio tempore vel, ipsum placeat voluptates, labore neque." />
    <Alert type="secondary" message="Test Message" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore blanditiis fugiat quidem deserunt natus culpa asperiores dolor, dolorem autem impedit explicabo odio tempore vel, ipsum placeat voluptates, labore neque." />
    <Alert type="success" message="Test Message" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore blanditiis fugiat quidem deserunt natus culpa asperiores dolor, dolorem autem impedit explicabo odio tempore vel, ipsum placeat voluptates, labore neque." />
    <Alert type="error" message="Test Message" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore blanditiis fugiat quidem deserunt natus culpa asperiores dolor, dolorem autem impedit explicabo odio tempore vel, ipsum placeat voluptates, labore neque." />
    <Alert type="warning" message="Test Message" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore blanditiis fugiat quidem deserunt natus culpa asperiores dolor, dolorem autem impedit explicabo odio tempore vel, ipsum placeat voluptates, labore neque." />
    <Alert closable type="custom" customIcon="profile" message="Test Message" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore blanditiis fugiat quidem deserunt natus culpa asperiores dolor, dolorem autem impedit explicabo odio tempore vel, ipsum placeat voluptates, labore neque." />
    <Alert type="info" message="Test Message" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore blanditiis fugiat quidem deserunt natus culpa asperiores dolor, dolorem autem impedit explicabo odio tempore vel, ipsum placeat voluptates, labore neque." />
    <Alert type="info" message="Test Message" />
  </>
)
