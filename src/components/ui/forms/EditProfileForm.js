import {Button, Modal} from 'react-bootstrap';
import React, {useContext, useEffect, useState} from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import UserContext from '../../store/user-context';


function EditProfileForm(props) {

    const userCtx = useContext(UserContext);

    return (
        <>
            <Form>
                <Modal show={props.show} onHide={props.onClose} centered
                aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Dialog className="m-0">
                        <Modal.Header closeButton>
                            <Modal.Title>Edit user</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <Form.Group controlId="formGridUserName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder={userCtx.name}/>
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder={userCtx.email}/>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col}
                                    controlId="formGridPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>

                                <Form.Group as={Col}
                                    controlId="formGridPasswordConfirm">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Repeat password"/>
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
                            <Button variant="primary" type="submit" size="lg" onClick={null}> 
                                Submit 
                            </Button>

                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </Form>
        </>
    )
}

export default EditProfileForm;
