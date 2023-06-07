// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {isTimerRunning: false, timerLimit: 25}

  startOrStopTimer = () => {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onDecrementLimit = () => {
    this.setState(prevState => ({timerLimit: prevState.timerLimit - 1}))
  }

  onIncrementLimit = () => {
    this.setState(prevState => ({timerLimit: prevState.timerLimit + 1}))
  }

  render() {
    const {isTimerRunning, timerLimit} = this.state

    const startOrPauseImgUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const startOrPauseAltText = isTimerRunning ? 'pause icon' : 'play icon'
    const statusText = isTimerRunning ? 'Running' : 'Paused'

    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>

        <div className="display-container">
          <div className="digital-timer-container">
            <div className="display-timer">{statusText}</div>
          </div>
          <div className="set-timer-container">
            <div className="btn-container">
              <button
                onClick={this.startOrStopTimer}
                className="start-btn"
                type="button"
              >
                <img
                  className="start-img"
                  src={startOrPauseImgUrl}
                  alt={startOrPauseAltText}
                />
                <p>{isTimerRunning ? 'Pause' : 'Start'}</p>
              </button>
              <button className="start-btn" type="button">
                <img
                  className="start-img"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                  alt="reset icon"
                />
                <p>Reset</p>
              </button>
            </div>
            <div>
              <p>Set timer limit</p>
              <div className="buttons">
                <button
                  onClick={this.onDecrementLimit}
                  className="limit-set-btn"
                  type="button"
                >
                  -
                </button>
                <p className="timer">{timerLimit}</p>
                <button
                  onClick={this.onIncrementLimit}
                  className="limit-set-btn"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
