
import * as React from 'react'
import cx from 'classnames'
// Interface
import { IDiv } from '../../interfaces'
// Components
import { Icon } from '../Icon'

interface PanelHeaderPRops extends IDiv {
  /**
   * If true, header icon will be rotating
   */
  active?: boolean
  /**
   * If true, panel can not be expand and header style changes to grayish color and not clickable
   */
  disabled?: boolean,
  /**
   * If true, icon is not rendered
   */
  noIcon?: boolean,
  /**
   * If true, can't change active panel with click to header
   */
  unclickable?: boolean
  /**
   * Callback function when header is clicked
   */
  handleActive?: () => void
  /**
   * Additional classes
   */
  className?: string
}

export class PanelHeader extends React.PureComponent<PanelHeaderPRops> {

  public render() {
    const {
      active,
      disabled,
      handleActive,
      unclickable,
      noIcon,
      className,
      children
    } = this.props

    const headerClasses = cx(
      'm-panel__header',
      (disabled) && 'm-panel__header--disabled',
      (active) && 'm-panel__header--active',
      className
    )
    return (
      <div
        onClick={() => !unclickable && handleActive()}
        className={headerClasses}
      >
        {!noIcon && <Icon name="chevron--right" />}
        {children}
      </div>
    )
  }
}

