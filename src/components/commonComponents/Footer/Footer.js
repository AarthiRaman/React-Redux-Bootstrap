import React from "react";
import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";

const StyledFooter = styled(Column)`
  bottom: 0;
`;

const Footer = ({}) => (
  <Row>
    <StyledFooter>Your Footer content goes here</StyledFooter>
  </Row>
);

export default Footer;
