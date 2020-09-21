
import * as React from 'react'
import cx from 'classnames'
// Inteface
import { IUlElement } from '../../interfaces'
// Local
import { MenuItem } from './Item'
import { Button } from '../Button';

interface MenuProps extends IUlElement {
  /**
   * If true, horizontal display
   * @default false
   */
  isNav?: boolean,
  /**
   * Callback function, when active item is changed
   */
  onItemChange?: (e, active) => void,
  /**
   * Change Active Item with Function
   */
  activeItem?: number
  /**
   * Default index of active menu item
   */
  defaultActiveKey?: number
  /**
   * Additional classes
   */
  className?: string,
}

interface MenuStates {
  activeItem?: number
}

export class Menu extends React.PureComponent<MenuProps, MenuStates> {
  public static defaultProps = {
    isNav: false
  }
  public static Item = MenuItem;
  navRef: React.MutableRefObject<HTMLUListElement>;

  constructor(props: MenuProps) {
    super(props)
    this.state = {
      activeItem: this.props.defaultActiveKey ? this.props.defaultActiveKey : 0
    }
    this.navRef = React.createRef()
  }

  static getDerivedStateFromProps({ activeItem }, state) {
    const { prevValue } = state
    return prevValue === activeItem
      ? []
      : {
        activeItem,
        prevValue: activeItem,
      };
  }

  handleArrowClick = (e, direction) => {
    const nav = this.navRef.current
    e.persist()
    if (nav) {
      if (direction === 'left') nav.scrollLeft -= 120
      if (direction === 'right') nav.scrollLeft += 120
    }
  }



  handleChange = (e, index) => {
    const { onItemChange, onChange } = this.props
    e.persist()
    if (onItemChange) onItemChange(e, index)
    if (onChange) onChange(e)
  }


  setActiveItem = (index) => {
    this.setState({ activeItem: index })
  }

  public render() {
    const {
      onClick,
      isNav,
      children,
      className,
      defaultActiveKey,
      ...props
    } = this.props

    const menuClasses = cx(
      isNav ? 'm-nav' : 'm-menu',
      className
    )
    return (
      <div className="m-menu__container">
        {isNav && <Button className="m-left-arrow" onClick={(e) => this.handleArrowClick(e, 'left')} variant="icon" icon="arrow--left" />}
        <ul {...props} className={menuClasses} ref={this.navRef}>
          {React.Children.map(children, (child, index) => (
            React.cloneElement(child as React.ReactElement, { isNav, activeKey: this.state.activeItem, itemIndex: index, onHandleChange: this.handleChange, setActiveItem: this.setActiveItem })
          ))}
        </ul>
        {isNav && <Button className="m-right-arrow" onClick={(e) => this.handleArrowClick(e, 'right')} variant="icon" icon="arrow--right" />}
      </div>
    )
  }
}

