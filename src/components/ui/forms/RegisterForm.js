import {Button, Modal} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from 'react-bootstrap';


function Registerform(props) {

    const [isLoadingSubmit, setLoading] = useState(false);

    useEffect(() => {
        if (isLoadingSubmit) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoadingSubmit]);

    function handleSubmit(props){
        setLoading(true);
        props.onClickSubmit()
    }
    const handleClick = () => handleSubmit(props);

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    return (
        <>
            <Form>
                <Modal show={props.show} onHide={props.onClose} centered
                aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Dialog className="m-0">
                        <Modal.Header closeButton>
                            <Modal.Title>Register</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <Form.Group controlId="formGridUserName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username"/>
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col}
                                    controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>

                                <Form.Group as={Col}
                                    controlId="formGridPasswordConfirm">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Repeat password"/>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor"/>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col}
                                    controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control/>
                                </Form.Group>

                                <Form.Group as={Col}
                                    controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col}
                                    controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                            </Row>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" type="button"
                                onClick={
                                    props.onClose
                                }
                                size="lg">
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit" size="lg" disabled={isLoadingSubmit} onClick={ !isLoadingSubmit ? handleClick : null}> 
                                {isLoadingSubmit ? 'Loading…' : 'Submit'} 
                            </Button>

                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </Form>
        </>
    )
}

export default Registerform;
