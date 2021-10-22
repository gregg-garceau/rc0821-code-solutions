import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false
    };
    this.handleTimer = this.handleTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleTimer() {
    if (!this.state.isOn) {
      this.setState({ isOn: true });
      this.interval = setInterval(() => {
        this.tick();
      }, 1000);
    } else {
      this.setState({ isOn: false });
      clearInterval(this.interval);
    }
  }

  tick() {
    this.setState({ time: this.state.time + 1 });
  }

  handleReset() {
    if (!this.state.isOn) {
      this.setState({
        time: 0
      });
    }
  }

  changeButton() {
    return (!this.state.isOn ? 'fas fa-play fa-2x' : 'fas fa-pause fa-2x');
  }

  time() {
    const time = this.state.time;

    return time;
  }

  render() {
    return (
      <div className='watch-cont'>
        <div className='clock' onClick={this.handleReset}>
          <h1>{this.time()}</h1>
        </div>
        <div className='button-container'>
          <i className={this.changeButton()} onClick={this.handleTimer}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
