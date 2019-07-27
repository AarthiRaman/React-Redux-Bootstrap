import React from "react";
import PropTypes from "prop-types";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PhotoGallery from "../../commonComponents/PhotoGallery/PhotoGallery";
import Followers from "../../commonComponents/Followers/Followers";
import ModalWindow from "../../commonComponents/ModalWindow/ModalWindow";

import {
  toggleModal
} from "../../../actions/userHomeActions";

import { connect } from "react-redux";

const UserHome = ({ globalData, activity, dispatchToggleModal, i18n }) => {
  const {
    modalContent,
    showModal
  } = activity;

  return <div>
    <Jumbotron>
      <Container>
        <h1>{i18n.banner} {globalData.user.username} !</h1>
        <h4>{i18n.subText}</h4>
        <p>
          <Button variant="primary">{i18n.bannerButton}</Button>
        </p>
      </Container>
    </Jumbotron>

    <Container>
    <Row>
      <Col sm={12} md={9} >
        <PhotoGallery i18n={i18n} photosList={activity.recentPhotos} onPhotoClick={dispatchToggleModal} /> 
      </Col>
      <Col sm={12} md={3} >
        <Followers i18n={i18n} commentsList={activity.recentComments} /> 
      </Col>
    </Row> 
    </Container>

    <ModalWindow modalContent={modalContent} 
      showModal={showModal} 
      i18n={i18n}
      onModalClose={dispatchToggleModal} />
  </div>
};

const mapDispatchToProps = {
  dispatchToggleModal: toggleModal
};

const mapStateToProps = ({ 
  globalData,
  activity,
  i18n
}) => ({
  globalData,
  activity,
  i18n: i18n.en.loggedInPage
});

UserHome.propTypes = {
  globalData: PropTypes.object.isRequired,
  activity: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  dispatchToggleModal: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
