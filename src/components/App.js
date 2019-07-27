import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Header from "./commonComponents/Header/Header";

import UserHome from "./containers/UserHome/UserHome";
import Home from "./containers/Home/Home";

import { onLogin } from "../actions/loginActions";

function App({ i18n, globalData, dispatchedOnLogin }) {
  const {
    isLoggedIn,
    user
  } = globalData;

  return (
    <div className="App">
      <Header
        onLogin={dispatchedOnLogin}
        i18n={i18n}
        isLoggedIn={isLoggedIn}
        userId={user.username}
      />

      {isLoggedIn && <UserHome />}
      {!isLoggedIn && <Home />}
    </div>
  );
}

const mapDispatchToProps = {
  dispatchedOnLogin: onLogin
};

const mapStateToProps = ({ i18n, globalData }) => ({
  i18n,
  globalData
});

App.propTypes = {
  i18n: PropTypes.object.isRequired,
  globalData: PropTypes.object.isRequired,
  dispatchedOnLogin: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
