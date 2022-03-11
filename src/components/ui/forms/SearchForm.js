import {
  Button,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Modal,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import classes from "./SearchForm.module.css";

function Searchform(props) {
  const [isLoadingSubmit, setLoading] = useState(false);

  useEffect(() => {
    if (isLoadingSubmit) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoadingSubmit]);

  const handleClick = () => setLoading(true);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <>
      <Form>
        <Modal
          show={props.show}
          onHide={props.onClose}
          centered
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Dialog className="m-0">
            <Modal.Header closeButton>
              <Modal.Title>New Search</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group controlId="formGridUserName">
                <Form.Label>Post code</Form.Label>
                <Form.Control type="text" placeholder="Enter post code" />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Radius</Form.Label>
                <Form.Control type="text" placeholder="Enter Radius" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Fuel type</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    aria-label="Text input with dropdown button"
                    placeholder="Select fuel type"
                  />

                  <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-2"
                    align="end"
                  >
                    <Dropdown.Item href="#">Diesel</Dropdown.Item>
                    <Dropdown.Item href="#">Super E5</Dropdown.Item>
                    <Dropdown.Item href="#">Super E10</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Date from</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Date to</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Time from</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Time to</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
              </Row>

              {/* <Row className="mb-3">
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
                            </Row> */}
            </Modal.Body>
            <Modal.Footer>
              <div className={classes.containerOverview}>
                <Row className="row">
                  <Button
                    variant="secondary"
                    type="button"
                    size="lg"
                  >
                    Show result
                  </Button>
                </Row>
                <Row>
                  <Button
                    variant="secondary"
                    type="button"
                    size="lg"
                  >
                    Save to favorite
                  </Button>
                </Row>
              </div>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Form>
    </>
  );
}

export default Searchform;
