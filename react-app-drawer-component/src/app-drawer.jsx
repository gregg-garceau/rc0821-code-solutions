import React from 'react';

class CustomAppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.active === false) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  render() {
    let modal;
    let full;
    let overlay;
    const icon = 'fas fa-bars';
    if (this.state.active === false) {
      modal = 'modal-container hidden';
      full = 'modal-container-full';
      overlay = 'overlay overlay-hidden';
    } else {
      modal = 'modal-container view shadow';
      full = 'modal-container-full';
      overlay = 'overlay';
    }
    return (
      <div>
        <div className={full}>
        </div>
        <div onClick={this.handleClick} className={overlay}></div>
        <div className={modal}>
          <ul>
            <h1 className='menu-style'>Menu</h1>
            <li onClick={this.handleClick}>About</li>
            <li onClick={this.handleClick}>Get Started</li>
            <li onClick={this.handleClick}>Sign In</li>
          </ul>
        </div>
        <i onClick={this.handleClick} className={icon}></i>
      </div>
    );
  }
}

export default CustomAppDrawer;
