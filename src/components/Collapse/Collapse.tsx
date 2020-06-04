
import * as React from 'react'
import classNames from 'classnames'
// Types
import '../../styles/components/_collapse.scss'

interface ICollapse extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

interface CollapseProps extends ICollapse {
  accordion?: boolean
  bordered?: boolean,
  onChange?: () => void,
  activePanel?: number[],
  defaultActive?: number,
  className?: string,
}

interface CollapseState {
  activePanel?: number[]
}

export class Collapse extends React.PureComponent<CollapseProps, CollapseState> {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: [this.props.defaultActive]
    }
  }
  onHandleChange = (index: number) => {
    const { accordion, onChange } = this.props
    if (accordion) {
      this.setState({ activePanel: [...this.state.activePanel, index] })

    } else {
      this.setState({ activePanel: [index] })
    }
    if (this.state.activePanel.find(a => a === index)) {
      this.setState({ activePanel: this.state.activePanel.filter(a => a !== index) })
    }
    if (onChange) onChange!()
  }
  public render() {
    const {
      bordered = true,
      children
    } = this.props

    const collapseClasses = classNames(
      'mrc-collapse',
      !bordered && 'mrc-collapse-noborder'
    )

    return (
      <div className={collapseClasses}>
        {React.Children.map(children, (child, i) => (
          React.cloneElement(child as React.ReactElement, { active: this.state.activePanel.find(a => a === i + 1), handleChange: this.onHandleChange, panelIndex: i + 1 })
        ))}
      </div>
    )
  }
}

