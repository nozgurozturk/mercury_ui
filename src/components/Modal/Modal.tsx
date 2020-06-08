
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
// Style
import '../../styles/components/_modal.scss'
import { Button } from '../Button'

interface IModal extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface ModalProps extends IModal {
  centered?: boolean,
  onClose: (e) => void,
  onEnter?: (e) => void,
  closeOnOverlay?: boolean,
  width?: number,
  height?: number,
  active?: boolean,
  className?: string,
}

export class Modal extends React.PureComponent<ModalProps> {

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
    window.document.body.style.overflow = "hidden";
    if (onEnter) onEnter(e)
  }

  handleClose = (e) => {
    const { onClose } = this.props
    window.document.body.style.removeProperty("overflow");
    if (onClose) onClose(e)
  }

  handleCloseOnOverlay = (e) => {
    const { closeOnOverlay } = this.props
    if (closeOnOverlay) this.handleClose(e)
  }

  public render() {
    const {
      centered,
      active = false,
      height,
      width = 320,
      children,
      className,
    } = this.props

    const dWidth = width ? { width: `${width}px` } : {}
    const dHeight = height ? { height: `${height}px` } : {}
    const modalClasses = classNames(
      'mrc-modal-wrapper',
      centered && `mrc-modal-wrapper-center`,
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
          classNames={`mrc-modal-show mrc-modal`}
        >
          <div
            style={{ ...dHeight, ...dWidth }}
            className={modalClasses}

          >
            {active &&
              <>
                <Button className="mrc-modal-close" onClick={this.handleClose} variant="icon" icon="close" />
                {children}
              </>}
          </div>
        </CSSTransition>
      </>, window.document.body
    )
  }
}

