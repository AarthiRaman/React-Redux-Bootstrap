import React from "react";
import styled from "styled-components";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { connect } from "react-redux";

const Home = ({ globalData }) => (
  <div>
  <Jumbotron>
  <Container>
    <h1>Hey User</h1>
    <h4>Check out our new features</h4>
    <p>
      <Button variant="primary">Sign up Now</Button>
    </p>
    </Container>
  </Jumbotron>
  </div>
);

const mapStateToProps = ({ globalData }) => ({
  globalData
});

export default connect()(Home);
