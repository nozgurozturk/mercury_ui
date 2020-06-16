
import * as React from 'react'
import cx from 'classnames'
// Interface
import { ILiElement } from '../../interfaces'
// Local
import { Icon } from '../Icon'

interface MenuItemProps extends ILiElement {
  /**
   * If true, item's arrow icon will disappear and bottom border is rendered
   */
  isNav?: boolean,
  /**
   * Set active, when click to item
   */
  setActiveItem?: (e) => void
  /**
   * Callback function, when active item is changed
   */
  onHandleChange?: (e, index) => void,
  /**
   * Index of active item
   */
  activeKey?: number,
  /**
   * Index of item
   */
  itemIndex?: number,
  /**
   * Additional classes
   */
  className?: string,
}

export class MenuItem extends React.PureComponent<MenuItemProps> {
  handleItemClick = (e) => {
    const { onHandleChange, itemIndex } = this.props
    e.persist()
    if (onHandleChange) onHandleChange(e, itemIndex)
    this.props.setActiveItem(itemIndex)
  }
  public render() {

    const {
      activeKey,
      itemIndex,
      className,
      children,
      isNav,
    } = this.props

    const itemClasses = cx(
      'm-menu__item',
      (itemIndex === activeKey) && 'm-menu__item--active',
      className
    )
    return (
      <li className={itemClasses} onClick={this.handleItemClick}>
        <div className="m-menu__item__content">
          {children}
        </div>
        {!isNav && (itemIndex === activeKey) && <Icon name="arrow--right" size={16} />}
      </li>
    )
  }
}

