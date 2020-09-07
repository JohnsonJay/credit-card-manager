import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const BanCountryModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button onClick={handleShow}>
                Ban a country
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {props.data.map((country, index) => <ListGroup.Item key={index}>{country}</ListGroup.Item>)}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BanCountryModal;
