
import * as React from 'react'
import classNames from 'classnames'
// Types
import { } from './Tab.types'
// Styles
import '../../styles/components/_tab.scss'
// External Props
import { Tab, TabProps } from './Tab'

interface ITabGroup extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface TabGroupProps extends ITabGroup {
  defaultActiveTab?: number,
  onTabChange?: (e, index) => void,
  titleClass?: string,
  titleBlock?: boolean,
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
      titleBlock,
      children
    } = this.props

    const tabTitleConteinerClasses = classNames(
      'mrc-tab-title-container',
      titleBlock && 'mrc-tab-title-block',
    )

    return (
      <div className="mrc-tab-container">
        <ul className={tabTitleConteinerClasses}>
          {React.Children.map(children, (child: Tab, index) => {
            const { tabName } = child.props
            const tabTitleClasses = classNames(
              'mrc-tab-title',
              this.state.activeTab === index && 'mrc-tab-title__active',
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

