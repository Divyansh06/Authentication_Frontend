import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

function index(props) {
  return (
    <Router>
      <Route exact path={"/"} component={Dashboard} />
      <Route exact path={"/signin"} component={Signin} />
      <Route exact path={"/signup"} component={Signup} />
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
