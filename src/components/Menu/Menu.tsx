
import * as React from 'react'
import classNames from 'classnames'
// Styles
import '../../styles/components/_menu.scss'
// Local
import { MenuItem } from './Item'
import { Button } from '../..';

interface IMenu extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> { }

interface MenuProps extends IMenu {
  isNav?: boolean,
  onItemChange?: (e, active) => void,
  defaultActiveKey?: number
  className?: string,
}

interface MenuStates {
  activeItem?: number
}

export class Menu extends React.PureComponent<MenuProps, MenuStates> {

  public static Item = MenuItem;
  navRef: React.MutableRefObject<HTMLUListElement>;

  constructor(props: MenuProps) {
    super(props)
    this.state = {
      activeItem: this.props.defaultActiveKey ? this.props.defaultActiveKey : 0
    }
    this.navRef = React.createRef()
  }

  handleArrowClick = (e, direction) => {
    const nav = this.navRef.current
    e.persist()
    if (nav) {
      if (direction === 'left') nav.scrollLeft -= 80
      if (direction === 'right') nav.scrollLeft += 80
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
      ...props
    } = this.props

    const menuClasses = classNames(
      isNav ? 'mrc-nav' : 'mrc-menu',
      className
    )
    return (
      <div className="mrc-menu-container">
        {isNav && <Button className="mrc-left-arrow" onClick={(e) => this.handleArrowClick(e, 'left')} variant="icon" icon="arrow-left" />}
        <ul {...props} className={menuClasses} ref={this.navRef}>
          {React.Children.map(children, (child, index) => (
            React.cloneElement(child as React.ReactElement, { isNav, activeKey: this.state.activeItem, itemIndex: index, onHandleChange: this.handleChange, setActiveItem: this.setActiveItem })
          ))}
        </ul>
        {isNav && <Button className="mrc-right-arrow" onClick={(e) => this.handleArrowClick(e, 'right')} variant="icon" icon="arrow-right" />}
      </div>
    )
  }
}

