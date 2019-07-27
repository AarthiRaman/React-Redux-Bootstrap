import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { onLogin } from '../../../actions/loginActions';

const Home = ({ globalData, i18n, dispatchedOnLogin }) => (<div>
  <Jumbotron>
  <Container>
    <h1>{i18n.banner}</h1>
    <h4>{i18n.subText}</h4>
    <p>
      <Button onClick={() => dispatchedOnLogin()} variant="primary">{i18n.buttonText}</Button>
    </p>
    </Container>
  </Jumbotron>
  </div>
);

const mapDispatchToProps = {
  dispatchedOnLogin: onLogin
};

const mapStateToProps = ({ globalData, i18n }) => ({
  globalData,
  i18n: i18n.en.notLoggedInPage
});

Home.protoTypes = {
  globalData: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
