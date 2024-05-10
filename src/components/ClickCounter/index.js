import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button Has been clicked <span className="updtcnt">{count}</span>{' '}
          times
        </h1>
        <p className="descript"> Click the button to increase the count</p>
        <button className="btn" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
