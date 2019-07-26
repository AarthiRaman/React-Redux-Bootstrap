import React from "react";

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";

const Followers = ({ commentsList }) => (
<Container>
    <h4>Recent Comments</h4>
    {
        commentsList && commentsList.splice(0,10).map((comment) => <ListGroup>
        <ListGroup.Item>
        <Figure>
        <Figure.Image 
          inline
          width={50}
          height={50}
          alt="171x180"
          src={comment.thumbnailUrl}
        />
       
          {comment.title}
       
      </Figure>
        </ListGroup.Item>
        </ListGroup>)
    }
</Container>)
    
export default Followers;
