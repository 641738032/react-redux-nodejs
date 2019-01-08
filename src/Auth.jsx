import React from "react";
import { connect } from "react-redux";
import { login, logout } from "./Auth.redux.js";
import { Redirect } from "react-router-dom";
import { Button } from "antd-mobile";
class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("Auth props: ", this.props.auth);
    return (
      <div>
        {this.props.auth.isAuth ? <Redirect to="/dashboard" /> : ""}
        <h2>你没有权限，需要登录</h2>
        <Button type="primary" onClick={()=>this.props.login()}>登录</Button>
      </div>
    );
  }
}

Auth = connect(
  state => ({ auth: state.auth }),
  { login, logout }
)(Auth);
export default Auth;
