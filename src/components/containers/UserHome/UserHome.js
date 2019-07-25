import React from "react";
import styled from "styled-components";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import { connect } from "react-redux";

const UserHome = ({ userId }) => (
  <>
    <Jumbotron>
      <h1>Hey {userId} !</h1>
      <h4>Check out your recent activity</h4>
      <p>
        <Button variant="primary">Go to Albums</Button>
      </p>
    </Jumbotron>
  </>
);

const mapStateToProps = ({ userId }) => {
  userId;
};

export default connect()(UserHome);
