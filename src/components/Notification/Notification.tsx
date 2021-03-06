import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { NoticeProps, Notice } from './Notice'

interface NotificationState {
  notices: any[]
}

let seed = 0;
const now = Date.now();

function getUuid() {
  const id = seed;
  seed += 1;
  return `m-not${now}_${id}`;
}

export class Notification extends React.PureComponent<NoticeProps, NotificationState> {

  static open: (properties: NoticeProps) => void

  constructor(props: NoticeProps) {
    super(props)
    this.state = {
      notices: [{ key: getUuid() }]
    }
  }

  add = () => {
    const uniqueKey = getUuid()
    this.setState(previousState => {
      const { notices } = previousState;
      return {
        notices: [...notices, { key: uniqueKey }],
      };
    });
  }

  remove = (key: React.Key, cb) => {
    this.setState(previousState => {
      return {
        notices: previousState.notices.filter(notice => notice.key !== key),
      }
    }, cb);
  };

  drop = () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(this.props.container)
    }, 420)
  }

  public render() {
    return (
      <TransitionGroup component={null}>
        {this.state.notices.map((n, index) => (
          <CSSTransition
            appear={true}
            key={index}
            timeout={420}
            classNames="m-notice"
          >
            <Notice {...this.props} onEnter={this.add} onClose={() => this.remove(n.key, this.drop)} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  }
}

Notification.open = function newNotificationInstance(props) {
  const div = document.createElement('div')
  ReactDOM.render(<Notification {...props} container={document.getElementById('m-not-container') as HTMLDivElement} />, div);
};

export default Notification;