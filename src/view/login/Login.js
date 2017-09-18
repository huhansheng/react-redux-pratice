import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../reducer/login';
import _styles from './style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.clickAction = this.clickAction.bind(this);
  }
  clickAction() {
    this.props.addTodo();
  }

  render() {
    const { requestStatus, result } = this.props.login;
    return (
      <div>
        <span className={_styles.textFont} onClick={this.clickAction}>click here (open console to see)</span>
        <br />
        <span>{`request status : ${requestStatus}`}</span>
        <br />
        <span>{`request result : ${result}`}</span>
      </div>
    );
  }
}

export default connect(state => ({
	login: state.login
}), dispatch => (bindActionCreators({ addTodo }, dispatch)))(Login);
