import React from "react";

import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const PhotosList = ({ photosList, onPhotoClick, i18n }) => (<Container xs={6} md={9}>
    <h4>{i18n.photoList.heading}</h4>
    <Row >
    {
        photosList && photosList.map((photo, index) => <Col key={index} md={3} sm={3}>
        <Figure>
            <Figure.Image
                width={171}
                key={index}
                height={180}
                onClick={() => onPhotoClick(true, photo)}
                alt={photo.title}
                src={photo.thumbnailUrl}
            />

        </Figure>
        </Col>)
    }
    </Row>
</Container>)
    
export default PhotosList;
