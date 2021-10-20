import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isButtonClicked = this.state.isClicked;
    let button;
    if (isButtonClicked) {
      button = <button>Thanks!</button>;
    } else {
      button = <button onClick={this.handleClick}>Click Me!</button>;
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
