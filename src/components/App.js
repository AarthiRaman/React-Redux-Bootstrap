import React from "react";
import { connect } from "react-redux";

import Header from "./commonComponents/Header/Header";
import Footer from "./commonComponents/Footer/Footer";

import UserHome from "./containers/UserHome/UserHome";
import Home from "./containers/Home/Home";

import { onLogin } from "../actions/loginActions";

function App({ i18n, globalData, dispatchedOnLogin }) {
  return (
    <div className="App">
      <Header
        onLogin={dispatchedOnLogin}
        i18n={i18n}
        isLoggedIn={globalData.isLoggedIn}
        userId={globalData.user.username}
      />

      {globalData.isLoggedIn && <UserHome />}
      {!globalData.isLoggedIn && <Home />}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
