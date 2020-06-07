
import * as React from 'react'
import classNames from 'classnames'
// Local
import { Icon } from '../Icon'

interface IMenuItem extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> { }

interface MenuItemProps extends IMenuItem {
  onHandleChange?: (e, index) => void,
  activeKey?: number,
  itemIndex?: number,
  className?: string,
  isNav?: boolean,
  setActiveItem?: (e) => void
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

    const itemClasses = classNames(
      'mrc-menu-item',
      (itemIndex === activeKey) && 'mrc-menu-item__active',
      className
    )
    return (
      <li className={itemClasses} onClick={this.handleItemClick}>
        <div>
          {children}
        </div>
        {!isNav && (itemIndex === activeKey) && <Icon name="arrow-right" size={24} />}
      </li>
    )
  }
}

