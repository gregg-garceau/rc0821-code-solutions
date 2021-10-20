import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  buttonColor() {
    if (this.state.count >= 3 && this.state.count < 6) {
      return 'btn-cold';
    } else if (this.state.count >= 6 && this.state.count < 9) {
      return 'btn-cool';
    } else if (this.state.count >= 9 && this.state.count < 12) {
      return 'btn-warm';
    } else if (this.state.count >= 12 && this.state.count < 15) {
      return 'btn-hot';
    } else if (this.state.count >= 15 && this.state.count < 18) {
      return 'btn-inferno';
    } else if (this.state.count >= 18) {
      return 'btn-nuclear';
    }
  }

  render() {
    return (
      <button className={`btn ${this.buttonColor()}`} onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
