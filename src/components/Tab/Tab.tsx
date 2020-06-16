
import * as React from 'react'
// Interface
import { IDiv } from '../../interfaces'

export interface TabProps extends IDiv {
  tabName?: React.ReactNode
  tabIndex?: number
  className?: string,
}

export class Tab extends React.PureComponent<TabProps> {

  public render() {
    return (
      <div className="m-tab__content">
        {this.props.children}
      </div>
    )
  }
}

