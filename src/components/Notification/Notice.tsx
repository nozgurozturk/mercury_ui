
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cx from 'classnames'
// Interface
import { IDiv } from '../../interfaces'
// Types
import { intent } from './Notification.types'
// Component
import { Button } from '../Button'
import { Icon } from '../Icon'

export interface NoticeProps {
  /**
   * Unique id of Notice
   */
  key?: string
  /**
   * Message of Notification
   */
  message?: React.ReactNode
  /**
   * Description of Notification
   */
  description?: React.ReactNode
  /**
   * Notification will be unmount after given time (ms)
   */
  duration?: number
  /**
   * Color and status of Notification
   */
  intent?: intent
  /**
   * Callback function, when notification is closed
   */
  onClose?: () => void,
  /**
   * Callback function, when notification is opened
   */
  onEnter?: () => void,
  /**
   * Width of notification
   * @default 420
   */
  width?: number,
  /**
   * Additional classes
   */
  className?: string,
  /**
   * container of notifications
   * @private
   */
  container?: HTMLDivElement
  /**
   * container of notifications
   * @private
   */
  holder?: HTMLElement
}

export class Notice extends React.PureComponent<NoticeProps> {

  public static defaultProps = {
    width: 420,
  }

  counter: number | null = null;

  componentDidMount() {
    this.startCloseTimer();
  }

  componentDidUpdate(prevProps: NoticeProps) {
    if (this.props.duration !== prevProps.duration) {
      this.restartCloseTimer();
    }
  }
  componentWillUnmount() {
    this.clearCloseTimer();
  }

  startCloseTimer = () => {
    if (this.props.duration) {
      this.counter = window.setTimeout(() => {
        this.handleClose()
      }, this.props.duration)
    }
  }

  clearCloseTimer = () => {
    if (this.counter) {
      clearTimeout(this.counter)
      this.counter = null
    }
  }

  restartCloseTimer = () => {
    this.clearCloseTimer()
    this.startCloseTimer()
  }

  handleClose = (e?) => {
    const { onClose } = this.props
    if (e) {
      e.stopPropagation();
    }
    this.clearCloseTimer()
    if (onClose) {
      onClose()
    }
  }
  public render() {
    const {
      width,
      intent,
      message,
      description,
      className,
      container,
    } = this.props

    const dWidth = width ? { maxWidth: `${width}px` } : {}

    const notificationClasses = cx(
      'm-notice',
      className
    )
    if (!container) {
      return null
    }
    return (
      ReactDOM.createPortal(
        <div
          onMouseEnter={this.clearCloseTimer}
          onMouseLeave={this.startCloseTimer}
          className={notificationClasses}
          style={{ ...dWidth }}>
          <Button className="m-notice__close" onClick={this.handleClose} intent="primary" variant="icon" icon="close" />
          {message &&
            <div className="m-notice__message">
              {intent && (<Icon intent={intent} size={24} name={`${intent}--filled`} />)}
              {message}
            </div>}
          {description && <div className="m-notice__description">{description}</div>}
        </div>
        , container)
    )
  }
}


