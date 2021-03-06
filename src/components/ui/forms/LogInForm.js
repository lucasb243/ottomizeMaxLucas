import {Button, Modal} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from 'react-bootstrap';


function LogInForm(props) {

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
        props.onSubmit()
    }
    const handleClick = () => handleSubmit(props);

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    return (
        <>
        {/*https://react-bootstrap.netlify.app/forms/validation --> for checking user inputs before sendig it to server*/}
            <div>
            <Form>
                <Modal show={props.show} onHide={props.onClose} centered
                aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Dialog className="m-0">
                        <Modal.Header closeButton>
                            <Modal.Title>Log in</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col}
                                    controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Button variant="link" type="button" onClick={props.onRegister} size="sm">
                                    No account yet? Register here
                                </Button>
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
                                {isLoadingSubmit ? 'Loading???' : 'Submit'} 
                            </Button>

                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </Form>
            </div>
        </>
    )
}

export default LogInForm;
