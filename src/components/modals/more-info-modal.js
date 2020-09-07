import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MoreInfoModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button onClick={handleShow}>
                More information
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>More information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <h5>Assignment</h5>
                        <h6>Intro</h6>
                        We want to write a system that allows our admins to submit a bunch of credit card
                        numbers for validation.
                        <h6>Requirements</h6>
                        Build a front-end application that can do the following:
                        <ul>
                            <li>Allow the user to submit credit card details, including the country that it is
                                from.
                            </li>
                            <li>
                                Check the specified country to make sure it doesn’t exist in a list of banned
                                countries.
                            </li>
                            <li>
                                Make the list of banned countries configurable.
                            </li>
                            <li>
                                If the card is valid – store it somewhere for the session.
                            </li>
                            <li>
                                Display all the credit cards that have been captured during the session.
                            </li>
                            <li>
                                Don’t capture the same card twice.
                            </li>
                        </ul>
                        <h6>Guidelines</h6>
                        <ul>
                            <li>Make use of 3rd party services if you want.</li>
                            <li> Add your application to a git repository and send that to us.</li>
                            <li>Don’t hesitate to reach out to us if you have questions.</li>
                            <li>Good luck and have fun!</li>
                        </ul>
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MoreInfoModal;
