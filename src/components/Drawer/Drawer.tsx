
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
// Types
import { from } from './Drawer.types'
// Styles
import '../../styles/components/_drawer.scss'

interface IDrawer extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface DrawerProps extends IDrawer {
  from: from,
  closeOnOverlay?: boolean,
  onClose: (e) => void,
  onEnter?: (e) => void,
  width?: number,
  height?: number,
  active?: boolean,
  className?: string,
}

export class Drawer extends React.PureComponent<DrawerProps> {

  public componentDidMount() {
    if (this.props.active) {
      window.document.body.style.overflow = "hidden";
    }
  }

  public componentWillUnmount() {
    window.document.body.style.removeProperty("overflow");
  }

  handleEnter = (e) => {
    const { onEnter } = this.props
    if (onEnter) onEnter(e)
  }

  handleClose = (e) => {
    const { onClose } = this.props
    if (onClose) onClose(e)
  }
  handleCloseOnOverlay = (e) => {
    const { closeOnOverlay } = this.props
    if (closeOnOverlay) this.handleClose(e)
  }

  public render() {
    const {
      from = 'right',
      active = false,
      height,
      closeOnOverlay = true,
      width,
      children,
      className
    } = this.props

    const dWidth = width ? { maxWidth: `${width}px` } : {}
    const dHeight = height ? { maxHeight: `${height}px` } : {}
    const drawerClasses = classNames(
      'mrc-drawer-wrapper',
      from && `mrc-drawer-wrapper-${from}`,
      className
    )

    return ReactDOM.createPortal(
      <>
        <CSSTransition
          in={active}
          unmountOnExit
          timeout={600}
          classNames="mrc-mask"
        >
          <div onClick={this.handleCloseOnOverlay} className="mrc-mask-wrapper" />
        </CSSTransition>
        <CSSTransition
          in={active}
          onEnter={this.handleEnter}
          unmountOnExit
          timeout={600}
          classNames={`mrc-slide-${from} mrc-drawer`}
        >
          <div
            style={{ ...dHeight, ...dWidth }}
            className={drawerClasses}

          >
            {active && children}
          </div>
        </CSSTransition>
      </>, window.document.body
    )
  }
}

