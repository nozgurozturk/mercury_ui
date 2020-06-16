
import * as React from 'react'
import cx from 'classnames'
// Interface
import { IDiv } from '../../interfaces'
interface CollapseProps extends IDiv {
  /**
   * When accordion prop is true, only one panel will be active
   * @default false
   */
  accordion?: boolean
  /**
   * Render border around the collapse block
   * @default true
   */
  bordered?: boolean,
  /**
   * Disables arrow icon in header component
   * @default false
   */
  noIcon?: boolean,
  /**
   * Callback function when active panel is changed
   */
  onChange?: () => void,
  /**
   * Index of expanded panel or panels (index starts with one(1) not zero(0))
   */
  activePanel?: number[],
  /**
   * Initial expanded panel index
   */
  defaultActive?: number,
  /**
   * Additional classes
   */
  className?: string,
}

interface CollapseState {
  activePanel?: number[]
}

export class Collapse extends React.PureComponent<CollapseProps, CollapseState> {
  public static defaultProps = {
    accordion: false,
    bordered: true,
    noIcon: false
  };
  constructor(props) {
    super(props);
    this.state = {
      activePanel: [this.props.defaultActive]
    }
  }
  onHandleChange = (index: number) => {
    const { accordion, onChange } = this.props
    if (!accordion) {
      this.setState({ activePanel: [...this.state.activePanel, index] })

    } else {
      this.setState({ activePanel: [index] })
    }
    if (this.state.activePanel.find(a => a === index)) {
      this.setState({ activePanel: this.state.activePanel.filter(a => a !== index) })
    }
    if (onChange) onChange()
  }
  public render() {
    const {
      bordered,
      children,
      noIcon,
    } = this.props

    const collapseClasses = cx(
      'm-collapse',
      !bordered && 'm-collapse--noborder'
    )
    return (
      <div className={collapseClasses}>
        {React.Children.map(children, (child, i) => (
          React.cloneElement(child as React.ReactElement, { noIcon, active: this.state.activePanel.find(a => a === i + 1), handleChange: this.onHandleChange, panelIndex: i + 1 })
        ))}
      </div>
    )
  }
}

