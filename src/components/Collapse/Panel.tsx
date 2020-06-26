
import * as React from 'react'
import cx from 'classnames'
// Interface
import { IDiv } from '../../interfaces'
// Components
import { PanelHeader } from './Header'
import { PanelContent } from './Content'

interface PanelProps extends IDiv {
  /**
   * Identifier of Panel
   */
  panelKey?: any
  /**
   * If true, panel will expand
   */
  active?: boolean
  /**
   * If true, panel can not be expand
   */
  disabled?: boolean
  /**
   * Disables arrow icon in header component
   */
  noIcon?: boolean,
  /**
   * If true, can't change active panel with click to header
   */
  unclickable?: boolean
  /**
   * Index of panel
   */
  panelIndex?: number
  /**
   * Callback function when active panel is changed
   */
  handleChange?: (index?: number) => void
  /**
   * Callback function when active panel is changed
   */
  onPanelChange?: (key?: any, index?: number) => void
  /**
   * Additional classes
   */
  className?: string,
}

export class Panel extends React.PureComponent<PanelProps> {

  public static Header = PanelHeader;
  public static Content = PanelContent;

  public handleActive = () => {
    const { disabled, handleChange, panelIndex, panelKey, onPanelChange, active } = this.props
    if (!disabled) {
      handleChange(panelIndex)
      onPanelChange && !active && onPanelChange(panelKey, panelIndex)
    }
  }

  public render() {
    const {
      active,
      disabled,
      noIcon,
      children,
      className,
      unclickable,
    } = this.props

    const panelClasses = cx(
      'm-panel',
      (disabled) && 'm-panel--disabled',
      className
    )
    const [CollapseHeader, CollpaseContent] = React.Children.toArray(children)
    return (
      <div className={panelClasses}>
        {React.cloneElement(CollapseHeader as React.ReactElement, { noIcon, handleActive: this.handleActive, active, disabled, unclickable })}
        {React.cloneElement(CollpaseContent as React.ReactElement, { active, disabled })}
      </div>
    )
  }
}

