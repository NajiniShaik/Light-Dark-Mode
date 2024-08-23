import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {status: false}

  onChangeState = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  onChangeText = () => {
    const {status} = this.state
    if (status === true) {
      return 'Dark Mode'
    }
    return 'Light Mode'
  }

  onChangeTitle = () => {
    const {status} = this.state
    return status ? 'dark-title' : 'light-title'
  }

  onChangeContainer = () => {
    const {status} = this.state
    return status ? 'dark-container' : ''
  }

  render() {
    const {status} = this.state
    return (
      <div className="bg-container">
        <div className={`container ${this.onChangeContainer()}`}>
          <h1 className={`title ${this.onChangeTitle()}`}>
            Click To Change Mode
          </h1>
          <button className="button" onClick={this.onChangeState}>
            {this.onChangeText()}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
