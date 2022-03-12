import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from "../ui/Card.js";

function AddressItem(props){
    return(
        <Card>
            <Row>
                <Col>
                    <span>{props.street}</span>
                    <span> </span>
                    <span>{props.city}</span>
                </Col>
                <Col>
                    <span>{props.addressType}</span>
                </Col>
            </Row>
        </Card>
    )
}
export default AddressItem;