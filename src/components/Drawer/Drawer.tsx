
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
// Interface
import { IDiv } from '../../interfaces'
// Types
import { from } from './Drawer.types'

interface DrawerProps extends IDiv {
  /**
   * Reveal side of drawer
   * @default 'right'
   */
  from: from,
  /**
   * If true, when you click overlay, drawer will close
   * @default true
   */
  closeOnOverlay?: boolean,
  /**
   * Callback function when drawer is closing
   */
  onClose: () => void,
  /**
   * Callback function when drawer is entering
   */
  onEnter?: () => void,
  /**
   * Width of drawer (px)
   */
  width?: number,
  /**
   * Height of drawer (px)
   */
  height?: number,
  /**
   * If true, drawer is mounted
   */
  active?: boolean,
  /**
   * Additional classes
   */
  className?: string,
}

export class Drawer extends React.PureComponent<DrawerProps> {

  public static defaultProps = {
    from: 'right',
    closeOnOverlay: true,
  };

  public componentDidMount() {
    if (this.props.active) {
      window.document.body.style.overflow = 'hidden';
    }
  }

  public componentWillUnmount() {
    window.document.body.style.removeProperty('overflow');
  }

  handleEnter = () => {
    const { onEnter } = this.props
    if (onEnter) onEnter()
  }

  handleClose = () => {
    const { onClose } = this.props
    if (onClose) onClose()
  }
  handleCloseOnOverlay = () => {
    const { closeOnOverlay } = this.props
    if (closeOnOverlay) this.handleClose()
  }

  public render() {
    const {
      from,
      active,
      height,
      width,
      children,
      className
    } = this.props

    const dWidth = width ? { width: `${width}px` } : {}
    const dHeight = height ? { height: `${height}px` } : {}
    const drawerClasses = cx(
      'm-drawer__wrapper',
      from && `m-drawer__wrapper--${from}`,
      className
    )

    return ReactDOM.createPortal(
      <>
        <CSSTransition
          in={active}
          unmountOnExit
          timeout={200}
          classNames="m-mask"
        >
          <div onClick={this.handleCloseOnOverlay} className="m-mask__wrapper" />
        </CSSTransition>
        <CSSTransition
          in={active}
          onEnter={this.handleEnter}
          unmountOnExit
          timeout={400}
          classNames={`m-slide--${from} m-drawer`}
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

