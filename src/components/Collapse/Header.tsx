
import * as React from 'react'
import classNames from 'classnames'

import { Icon } from '../Icon'


interface IPanelHeader extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface PanelHeaderPRops extends IPanelHeader {
  active?: boolean
  disabled?: boolean,
  noIcon?: boolean,
  handleActive?: () => void
  className?: string
}

export class PanelHeader extends React.PureComponent<PanelHeaderPRops> {

  public render() {
    const {
      active,
      disabled,
      handleActive,
      noIcon,
      className,
      children
    } = this.props

    const headerClasses = classNames(
      'mrc-panel-header',
      (disabled) && 'mrc-panel-header-disabled',
      (active) && 'mrc-panel-header-active',
      className
    )
    return (
      <div
        onClick={handleActive!}
        className={headerClasses}
      >
        {!noIcon && <Icon name="arrow-right-tiny" />}
        {children}
      </div>
    )
  }
}

