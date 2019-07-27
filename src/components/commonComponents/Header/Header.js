import React from "react";
import PropTypes from 'prop-types';

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

const Header = ({ i18n, isLoggedIn, userId, onLogin }) => (
  <Navbar bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">{i18n.en.brand}</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    {isLoggedIn && (
      <Navbar.Text>
        {i18n.en.loggedInPage.buttonText} <a href="#login">{userId}</a>
      </Navbar.Text>
    )}
    {!isLoggedIn && (
      <Button onClick={() => onLogin()}>{i18n.en.notLoggedInPage.buttonText}</Button>
    )}
  </Navbar.Collapse>
  </Container>
  </Navbar>

);

Header.protoTypes = {
  isLoggedIn: PropTypes.bool,
  userId: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired
};

Header.defaultProps = {
  isLoggedIn: false
}

export default Header;
