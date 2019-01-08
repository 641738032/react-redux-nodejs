import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import App from "./App.js"
import { logout } from "./Auth.redux.js"
import { Button } from "antd-mobile";
function Erying () {
    return (<h2>二营</h2>)
}
function QiBingLian () {
    return (<h2>骑兵连</h2>)
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log("Dashboard: ",this.props);
      const redirectToLogin = <Redirect to="login" />
      const app=(
        <div>
            <h1>独立团</h1>
            {this.props.auth.isAuth ? <Button onClick={()=>{this.props.logout()}} type="warning">注销</Button> : ""}
          <ul>
            <li>
              <Link to="/dashboard/">一营</Link>
            </li>
            <li>
              <Link to="/dashboard/erying">二营</Link>
            </li>
            <li>
              <Link to="/dashboard/qibinglian">骑兵连</Link>
            </li>
          </ul>
          <Route path="/dashboard/" exact component={App}></Route>
          <Route path="/dashboard/erying" component={Erying}></Route>
          <Route path="/dashboard/qibinglian" component={QiBingLian}></Route>
        </div>
      )
    return this.props.auth.isAuth ? app : redirectToLogin;
  }
}

Dashboard = connect(
    state=>({auth: state.auth}), 
    {logout}
    )(Dashboard);
export default Dashboard;