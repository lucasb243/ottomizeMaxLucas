import {Button, Modal} from 'react-bootstrap';
import React, {useEffect, useState, useContext} from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import UserContext from '../../store/user-context';
import AddressItem from '../AddressItem';


function EditAddressesForm(props) {

    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)
      }

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

    const userCtx = useContext(UserContext);

    const [addNewAddress, setAddNewAddress] = useState(false)

    function handleCloseNewAddress(){
        setAddNewAddress(false)
    }
    function handleOpenNewAddress(){
        setAddNewAddress(true)
    }

    return (
        <>
            <Form onSubmit={onFormSubmit}>
                <Modal show={props.show} onHide={props.onClose} centered
                aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Dialog className="m-0">
                        <Modal.Header closeButton>
                            <Modal.Title>Edit your addresses</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            {userCtx.loggedIn ? (userCtx.addresses.map(address =>
                            <Form.Group key="address.id" className="mb-3" controlId={"formGridAddress"+address.id}>
                                <h6>Address {userCtx.addresses.indexOf(address)+1}</h6>
                                <Row>
                                    <Col>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control placeholder={address.city}/>
                                    </Col>
                                    <Col>
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control placeholder={address.postcode}/>
                                    </Col>
                                </Row>
                                <Form.Label>Street</Form.Label>
                                <Form.Control placeholder={address.street}/>
                            </Form.Group>
                            )) : null} 
                            
                            {addNewAddress ? (
                                <Form.Group key={userCtx.addresses.length} className="mb-3" controlId={"formGridAddressNew"}>
                                <h6>New Address</h6>
                                <Row>
                                    <Col>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control placeholder="City"/>
                                    </Col>
                                    <Col>
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control placeholder="Postcode"/>
                                    </Col>
                                </Row>
                                <Form.Label>Street</Form.Label>
                                <Form.Control placeholder="Street"/>
                            </Form.Group>
                            ) : null}
                        {!addNewAddress ? <Button size='sm' variant='primary' onClick={handleOpenNewAddress}>Add new address</Button> 
                        : <Button size='sm' variant='light' onClick={handleCloseNewAddress}>Cancle adding</Button>}
                       
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

export default EditAddressesForm;
