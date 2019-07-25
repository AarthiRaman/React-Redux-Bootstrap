import React from "react";
import styled from "styled-components";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = ({ i18n, isLoggedIn, userId, onLogin }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{i18n.en.brand}</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      {isLoggedIn && (
        <Navbar.Text>
          {i18n.en.loggedIn.text} <a href="#login">{userId}</a>
        </Navbar.Text>
      )}
      {!isLoggedIn && (
        <Button onClick={() => onLogin()}>{i18n.en.notLoggedIn.text}</Button>
      )}
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
