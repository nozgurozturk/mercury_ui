
import * as React from 'react'
import classNames from 'classnames'
// Style
import '../../styles/components/_alert.scss'
// Local
import { intent } from './Alert.types'
import { Icon } from '../Icon';
import { Button } from '../..';

interface IAlert extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface AlertProps extends IAlert {
  closable?: boolean,
  customIcon?: string,
  message?: React.ReactNode,
  description?: React.ReactNode,
  type?: intent,
  onClose?: (e) => void,
  className?: string,
}

interface AlertStates {
  isClosed?: boolean
}

export class Alert extends React.PureComponent<AlertProps, AlertStates> {
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
      type,
      customIcon,
      message,
      description,
      className,
      closable,
      onClose,
      ...props
    } = this.props

    const alertClasses = classNames(
      'mrc-alert',
      type && `mrc-${type}`,
      className
    )
    if (this.state.isClosed) {
      return null
    }
    return (
      <div className={alertClasses} {...props}>
        {closable && <Button className="mrc-alert-close" onClick={this.handleClose} variant="icon" icon="close" />
        }
        {message &&
          <div className="mrc-alert-message">
            {!customIcon && type !== 'custom' ? <Icon size={24} name={type} /> : <Icon size={24} name={customIcon} />}
            {message}
          </div>}
        {description && <div className="mrc-alert-description">{description}</div>}
      </div>
    )
  }
}

