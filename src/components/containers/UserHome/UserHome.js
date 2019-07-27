import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PhotoGallery from "../../commonComponents/PhotoGallery/PhotoGallery";
import Followers from "../../commonComponents/Followers/Followers";
import StyledModal from "../../commonComponents/ModalWindow/ModalWindow";

import {
  toggleModal
} from "../../../actions/userHomeActions";

import { connect } from "react-redux";

const UserHome = ({ globalData, activity, dispatchToggleModal }) => {
  const {
    modalContent,
    showModal
  } = activity;

  return <div>
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
        <PhotoGallery photosList={activity.recentPhotos} onPhotoClick={dispatchToggleModal} /> 
      </Col>
      <Col sm={12} md={3} >
        <Followers commentsList={activity.recentPhotos} /> 
      </Col>
      <Col>
      
      </Col>
    </Row> 
    </Container>
    <StyledModal modalContent={modalContent} 
      showModal={showModal} 
      onModalClose={dispatchToggleModal} />
  </div>
};

const mapDispatchToProps = {
  dispatchToggleModal: toggleModal
};

const mapStateToProps = ({ 
  globalData,
  activity
}) => ({
  globalData,
  activity
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
