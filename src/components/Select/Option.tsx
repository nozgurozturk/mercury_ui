import * as React from 'react'
import cx from 'classnames'
// Types
import { size, status } from './Select.types'
// Interface
import { ILiElement } from '../../interfaces'

interface OptionProps extends ILiElement {
  isSelected?: boolean,
  value?: any,
  name?: React.ReactNode,
}

export class Option extends React.PureComponent<OptionProps> {
  public render() {
    const {
      isSelected,
      value,
      name,
      ...props
    } = this.props

    const optionClasses = cx(
      'm-input__option',
      isSelected && 'm-input__option--selected'
    )
    return (
      <li className={optionClasses} value={value} {...props}>{name}</li>
    )
  }
}