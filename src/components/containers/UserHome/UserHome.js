import React from "react";
import styled from "styled-components";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PhotoGallery from "../../commonComponents/PhotoGallery/PhotoGallery";
import Followers from "../../commonComponents/Followers/Followers";

import { connect } from "react-redux";

const UserHome = ({ globalData, activity }) => (
  <div>

    <Jumbotron>
      <Container>
        <h1>Hey {globalData.user.username} !</h1>
        <h4>Check out your recent activity</h4>
        <p>
          <Button variant="primary">Go to Albums</Button>
        </p>
      </Container>
    </Jumbotron>

    <Container>
    <Row>
      <Col sm={12} md={9} >
        <PhotoGallery photosList={activity.recentPhotos} /> 
      </Col>
      <Col sm={12} md={3} >
        <Followers commentsList={activity.recentPhotos} /> 
      </Col>
      <Col>
      
      </Col>
    </Row> 
    </Container>

  </div>
);

const mapStateToProps = ({ 
  globalData,
  activity
}) => ({
  globalData,
  activity
});

export default connect(mapStateToProps, {})(UserHome);
