
import * as React from 'react'
import cx from 'classnames'
// Interface
import { IDiv } from '../../interfaces'
// External Props
import { Tab } from './Tab'

interface TabGroupProps extends IDiv {
  /**
   * Callback function, when active tab is changed
   */
  onTabChange?: (e, index) => void,
  /**
   * Default index of active tab
   */
  defaultActiveTab?: number,
  /**
   * Additional classes for titles
   */
  titleClass?: string,
  /**
   * Additional classes
   */
  className?: string,
}

interface TabGroupStates {
  activeTab?: number,
}

export class TabGroup extends React.PureComponent<TabGroupProps, TabGroupStates> {

  constructor(props: TabGroupProps) {
    super(props)
    this.state = {
      activeTab: this.props.defaultActiveTab ? this.props.defaultActiveTab : 0
    }
  }

  handleChange = (e, index) => {
    const { onTabChange, onChange } = this.props
    e.persist()
    this.setActiveTab(index)
    if (onTabChange) onTabChange(e, index)
    if (onChange) onChange(e)
  }

  setActiveTab = (index) => {
    this.setState({ activeTab: index })
  }

  public render() {
    const {
      titleClass,
      className,
      children
    } = this.props

    const tabClasses = cx(
      'm-tab__container',
      className,
    )

    return (
      <div className={tabClasses}>
        <ul className={'m-tab__title__container'}>
          {React.Children.map(children, (child: Tab, index) => {
            const { tabName } = child.props
            const tabTitleClasses = cx(
              'm-tab__title',
              this.state.activeTab === index && 'm-tab__title--active',
              titleClass,
            )
            return (
              <li className={tabTitleClasses} onClick={(e) => { this.handleChange(e, index) }} key={index}>{tabName}</li>
            )
          })}
        </ul>
        {React.Children.map(children, (child, index) => (
          index === this.state.activeTab && React.cloneElement(child as React.ReactElement, { activeTab: this.state.activeTab, tabIndex: index, onHandleChange: this.handleChange })
        ))}
      </div>
    )
  }
}

