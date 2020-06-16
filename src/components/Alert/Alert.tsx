import * as React from 'react'
import cx from 'classnames'
// Interface
import { IDiv } from '../../interfaces'
// Local
import { intent } from './Alert.types'
import { Icon } from '../Icon'
import { Button } from '../Button'

interface AlertProps extends IDiv {
  /**
   * When closable props is true, show clickable cross icon on top-right side of alert component.
   * When you clicked to this icon, alert will unmount.
   * @default false
   */
  closable?: boolean
  /**
   * When alert type is custom, you can define icon name here
   */
  customIcon?: string
  /**
   * Alert message
   */
  message?: React.ReactNode
  /**
   * Alert description
   */
  description?: React.ReactNode
  /**
   * Type of intent define alert's type. It changes border and background color and alert's icon.
   */
  intent?: intent
  /**
   * Callback function when click on close icon
   */
  onClose?: (e) => void
  /**
   * Additional className on alert wrapper
   */
  className?: string
}

interface AlertStates {
  isClosed?: boolean
}

export class Alert extends React.PureComponent<AlertProps, AlertStates> {
  public static defaultProps = {
    closable: false
  }

  constructor(props: AlertProps) {
    super(props);
    this.state = {
      isClosed: false,
    }
  }
  handleClose = (e) => {
    const { onClose } = this.props
    this.setState({ isClosed: true })
    if (onclose) onClose(e)
  }

  public render() {
    const {
      intent,
      customIcon,
      message,
      description,
      className,
      closable,
    } = this.props

    const alertClasses = cx(
      'm-alert',
      intent && `m--${intent}`,
      className
    )
    if (this.state.isClosed) {
      return null
    }
    return (
      <div className={alertClasses}>
        {closable && <Button className="m-alert__close" onClick={this.handleClose} intent="primary" variant="icon" icon="close" />}
        {message &&
          <div className="m-alert__message">
            {intent && (intent !== 'custom' ? <Icon intent={intent} size={16} name={`${intent}--filled`} /> : <Icon size={16} name={customIcon} />)}
            {message}
          </div>}
        {description && <div className="m-alert__description">{description}</div>}
      </div>
    )
  }
}

