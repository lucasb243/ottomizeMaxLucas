import { Button, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

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

              <Form.Group as={Col} controlId="formGridPasswordConfirm">
                <Form.Label>Fuel type</Form.Label>
                <Form.Control type="text" placeholder="Enter fuel type" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Datespan</Form.Label>
                <Form.Control placeholder="YYYYMMDD - YYYYMMDD" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Timespan</Form.Label>
                <Form.Control placeholder="HHMM - HHMM" />
              </Form.Group>
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
              <Button
                variant="secondary"
                type="button"
                onClick={props.onClose}
                size="lg"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={isLoadingSubmit}
                onClick={!isLoadingSubmit ? handleClick : null}
              >
                {isLoadingSubmit ? "Loading…" : "Submit"}{" "}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Form>
    </>
  );
}

export default Searchform;
