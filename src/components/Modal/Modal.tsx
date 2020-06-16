
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
// Interface
import { IDiv } from '../../interfaces'
import { Button } from '../Button'

interface ModalProps extends IDiv {
  /**
   * If true, Apply location of modal center of screen
   * @default true
   */
  centered?: boolean,
  /**
   * Callback function, when modal is closed
   */
  onClose: (e) => void,
  /**
   * Callback function, when modal is opened
   */
  onEnter?: (e) => void,
  /**
   * If true, when you click overlay, modal will close
   * @default true
   */
  closeOnOverlay?: boolean,
  /**
   * Width of modal
   * @default 320
   */
  width?: number,
  /**
   * Height of modal
   */
  height?: number,
  /**
   * If true, modal will be visible
   */
  active?: boolean,
  /**
   * Additional classes
   */
  className?: string,
}

export class Modal extends React.PureComponent<ModalProps> {
  public static defaultProps = {
    closeOnOverlay: true,
    width: 320,
    centered: true,
  }
  public componentDidMount() {
    if (this.props.active) {
      window.document.body.style.overflow = 'hidden';
    }
  }

  public componentWillUnmount() {
    window.document.body.style.removeProperty('overflow');
  }

  handleEnter = (e) => {
    const { onEnter } = this.props
    window.document.body.style.overflow = 'hidden';
    if (onEnter) onEnter(e)
  }

  handleClose = (e) => {
    const { onClose } = this.props
    window.document.body.style.removeProperty('overflow');
    if (onClose) onClose(e)
  }

  handleCloseOnOverlay = (e) => {
    const { closeOnOverlay } = this.props
    if (closeOnOverlay) this.handleClose(e)
  }

  public render() {
    const {
      centered,
      active,
      height,
      width,
      children,
      className,
    } = this.props

    const dWidth = width ? { width: `${width}px` } : {}
    const dHeight = height ? { height: `${height}px` } : {}
    const modalClasses = cx(
      'm-modal__wrapper',
      centered && `m-modal__wrapper--center`,
      className
    )
    return ReactDOM.createPortal(
      <>
        <CSSTransition
          in={active}
          unmountOnExit
          timeout={400}
          classNames="m-mask"
        >
          <div onClick={this.handleCloseOnOverlay} className="m-mask__wrapper" />
        </CSSTransition>
        <CSSTransition
          in={active}
          onEnter={this.handleEnter}
          unmountOnExit
          timeout={400}
          classNames="m-modal"
        >
          <div
            style={{ ...dHeight, ...dWidth }}
            className={modalClasses}

          >
            {active &&
              <>
                <Button className="m-modal__close" onClick={this.handleClose} variant="icon" icon="close" />
                {children}
              </>}
          </div>
        </CSSTransition>
      </>, window.document.body
    )
  }
}

