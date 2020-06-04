
import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

interface IPanelContent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface PanelContentProps extends IPanelContent {
  active?: boolean
}

export class PanelContent extends React.PureComponent<PanelContentProps> {

  public render() {
    const {
      active,
      children
    } = this.props
    return (
      <CSSTransition
        in={active}
        unmountOnExit
        timeout={600}
        classNames="mrc-slide-down mrc-collapse"
      >
        <div className="mrc-panel-content">{children}</div>
      </CSSTransition>
    )
  }
}

