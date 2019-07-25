import React from "react";
import { connect } from "react-redux";

import Header from "./commonComponents/Header/Header";
import Footer from "./commonComponents/Footer/Footer";

import UserHome from "./containers/UserHome/UserHome";
import Home from "./containers/Home/Home";

import { onLogin } from "../actions/loginActions";

function App({ i18n, global, dispatchedOnLogin }) {
  return (
    <div className="App">
      <Header
        onLogin={dispatchedOnLogin}
        i18n={i18n}
        isLoggedIn={global.isLoggedIn}
        userId={global.userId}
      />

      {global.isLoggedIn && <UserHome />}
      {!global.isLoggedIn && <Home />}
      <Footer />
    </div>
  );
}

const mapDispatchToProps = {
  dispatchedOnLogin: onLogin
};

const mapStateToProps = ({ i18n, global }) => ({
  i18n,
  global
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
