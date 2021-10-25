import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.passwordInput = this.passwordInput.bind(this);
  }

  passwordInput(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const passLength = this.state.password.length < 8;
    const input = this.state.password === '';

    return (
      <form className='pass-form'>
        <label className='pass-label'>Password</label>
        <div className='flex'>
          <input className='pass-input' type="password" value={this.state.password} onChange={this.passwordInput} />
          <i className={passLength ? 'fas fa-times fa-lg' : 'fas fa-check fa-lg'}></i>
        </div>
        <div className='pass-text'>
          {input
            ? 'A password is required.'
            : passLength
              ? 'Your password is too short.'
              : ''}
        </div>
      </form>
    );
  }
}

export default ValidateInput;
