import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  getText() {
    return this.state.isOn ? 'ON' : 'OFF';
  }

  changeColor() {
    return this.state.isOn ? 'back-olive' : 'back-grey';
  }

  changePosition() {
    return this.state.isOn ? 'pos-right' : null;
  }

  render() {
    return (
      <div className='flex'>
        <div className={`toggle-container ${this.changeColor()}`} onClick={this.handleClick}>
          <div className={`toggle ${this.changePosition()}`}></div>
        </div>
        <span className='mar-left'>{this.getText()}</span>
      </div>
    );
  }
}

export default ToggleSwitch;
