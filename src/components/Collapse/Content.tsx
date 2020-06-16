
import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
// Interface
import { IDiv } from '../../interfaces'

interface PanelContentProps extends IDiv {
  /**
   * If true, content will be visible
   */
  active?: boolean
  /**
   * If true, content can not rendered
   */
  disabled?: boolean,
}

export class PanelContent extends React.PureComponent<PanelContentProps> {

  public render() {
    const {
      active,
      children,
      disabled
    } = this.props
    return (
      <CSSTransition
        in={!disabled && active}
        timeout={600}
        unmountOnExit
        classNames="m-panel__collapse"
      >
        <div className="m-panel__content">{children}</div>
      </CSSTransition>
    )
  }
}

