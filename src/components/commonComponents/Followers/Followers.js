import React from "react";
import PropTypes from 'prop-types';

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const Followers = ({ commentsList, i18n }) => (
<Container>
    <h4>{i18n.commentList.heading}</h4>
    {
        commentsList && commentsList.slice(0,4).map((comment, index) => <ListGroup key={index}>
        <ListGroup.Item>{comment.name}</ListGroup.Item>
        </ListGroup>)
    }
</Container>)

Followers.protoTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  i18n: PropTypes.object.isRequired
};

export default Followers;
