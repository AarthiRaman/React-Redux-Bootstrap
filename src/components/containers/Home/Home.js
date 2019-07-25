import React from "react";
import styled from "styled-components";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import { connect } from "react-redux";

const Home = ({ userId }) => (
  <>
    <Jumbotron>
      <h1>Hey User</h1>
      <h4>Check out our new features</h4>
      <p>
        <Button variant="primary">Sign up Now</Button>
      </p>
    </Jumbotron>
  </>
);

const mapStateToProps = ({ userId }) => {
  userId;
};

export default connect()(Home);
