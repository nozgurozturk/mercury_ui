
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
   * If true, can't change active panel with click to header
   */
  unclickable?: boolean
  /**
   * Callback function when active panel is changed
   */
  onPanelChange?: (key?, index?) => void,
  /**
   * Index of expanded panel or panels (index starts with one(1) not zero(0))
   * @default []
   */
  activePanels?: number[],
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
  activePanels?: number[]
}

export class Collapse extends React.PureComponent<CollapseProps, CollapseState> {
  public static defaultProps = {
    accordion: false,
    unclickable: false,
    bordered: true,
    noIcon: false,
    activePanels: []
  };

  constructor(props) {
    super(props);
    this.state = {
      activePanels: [this.props.defaultActive]
    }
  }
  static getDerivedStateFromProps({ activePanels = [] }, state) {
    const { prevValue } = state
    return prevValue === activePanels
      ? []
      : {
        activePanels,
        prevValue: activePanels,
      };
  }

  private onHandleChange = (index: number) => {
    const { accordion } = this.props
    if (!accordion) {
      this.setState({ activePanels: [...this.state.activePanels, index] })

    } else {
      this.setState({ activePanels: [index] })
    }
    if (this.state.activePanels.find(a => a === index)) {
      this.setState({ activePanels: this.state.activePanels.filter(a => a !== index) })
    }
  }

  public componentDidMount() {
    if (this.props.defaultActive) this.setState({ activePanels: [this.props.defaultActive] })
  }
  public render() {
    const {
      bordered,
      children,
      noIcon,
      unclickable,
      onPanelChange
    } = this.props

    const collapseClasses = cx(
      'm-collapse',
      !bordered && 'm-collapse--noborder'
    )
    return (
      <div className={collapseClasses}>
        {React.Children.map(children, (child, i) => (
          React.cloneElement(child as React.ReactElement, { noIcon, active: this.state.activePanels.find(a => a === i + 1), handleChange: this.onHandleChange, onPanelChange, panelIndex: i + 1, unclickable })
        ))}
      </div>
    )
  }
}

