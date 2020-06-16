/* eslint-disable no-undef */
import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Skeleton } from '../Skeleton'

describe('Text', () => {
  afterEach(cleanup)
  test('should render skeleton', () => {
    const { container } = render(<Skeleton active={true} />)
    expect(container.parentNode.querySelector('.m-skeleton')).toBeInTheDocument()
  })
  test('should not render skeleton', () => {
    const { container } = render(<Skeleton active={false} />)
    expect(container.parentNode.querySelector('.m-skeleton')).not.toBeInTheDocument()
  })
  test('should render number of skeleton as rows number', () => {
    const randomInteger = Math.floor(Math.random() * 100)
    const { container } = render(<Skeleton rows={randomInteger} active={true} />)
    expect(container.parentNode.querySelectorAll('.m-skeleton')).toHaveLength(randomInteger)
  })
})