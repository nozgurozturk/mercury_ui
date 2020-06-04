
import * as React from 'react'
import classNames from 'classnames'
import { PanelHeader } from './Header'
import { PanelContent } from './Content'

interface IPanel extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface PanelProps extends IPanel {
  active?: boolean
  disabled?: boolean
  panelIndex?: number
  handleChange?: (index?: number) => void
  noIcon?: boolean,
  className?: string,
}

export class Panel extends React.PureComponent<PanelProps> {

  public static Header = PanelHeader;
  public static Content = PanelContent;

  protected handleActive = () => {
    const { disabled, handleChange, panelIndex } = this.props
    if (!disabled) handleChange(panelIndex)
  }

  public render() {
    const {
      active,
      disabled,
      handleChange,
      panelIndex,
      noIcon = false,
      children,
      className
    } = this.props

    const panelClasses = classNames(
      'mrc-panel',
      (disabled) && 'mrc-panel-disabled',
      className
    )
    const [CollapseHeader, CollpaseContent] = React.Children.toArray(children)
    return (
      <div className={panelClasses}>
        {React.cloneElement(CollapseHeader as React.ReactElement, { noIcon, handleActive: this.handleActive, active, disabled })}
        {React.cloneElement(CollpaseContent as React.ReactElement, { active })}
      </div>
    )
  }
}

