/* eslint-disable no-undef */
import * as React from 'react'
import { render } from '@testing-library/react'
import { Icon } from '../Icon'
describe('Text', () => {

  test('should render icon', () => {
    const { container } = render(<Icon name="add" />)
    expect(container.querySelector('.icon-add')).toBeInTheDocument()
  })
})