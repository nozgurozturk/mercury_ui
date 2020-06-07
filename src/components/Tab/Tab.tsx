
import * as React from 'react'
import classNames from 'classnames'

interface ITab extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export interface TabProps extends ITab {
  tabName?: React.ReactNode
  tabIndex?: number
  className?: string,
}

export class Tab extends React.PureComponent<TabProps> {

  public render() {
    return (
      <div className="mrc-tab-content">
        {this.props.children}
      </div>
    )
  }
}

