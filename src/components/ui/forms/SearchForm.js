import {
  Button,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Modal,
  OverlayTrigger,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import classes from "./SearchForm.module.css";
import TestMapsView from "../TestMapsView"
import { Popover } from "bootstrap";
import RadiusPopOver from "../RadiusPopover"

function Searchform(props) {
  const [isLoadingSubmit, setLoading] = useState(false);
  const [value, setValue] = React.useState(10);
  const [selectRadiusIsOpen, setSelectRadiusIsOpen] = useState(true);

  useEffect(() => {
    if (isLoadingSubmit) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoadingSubmit]);

  function handleSubmit(props) {
    setLoading(true);
    props.onClickSubmit();
  }
  const handleClick = () => handleSubmit(props);

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
              <Form.Group controlId="formPostCode">
                <Form.Label className="mt-2">Post code</Form.Label>
                <Form.Control type="text" placeholder="Enter post code" />
              </Form.Group>

              <Form.Group controlId="formCity">
                <Form.Label className="mt-2">City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" />
              </Form.Group>

              <Row className="mb-2">
                <Form.Group as={Col} controlId="formRadius">
                  <Form.Label className="mt-2">Radius</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Select radius</option>
                    <option value="1">1 km</option>
                    <option value="2">2 km</option>
                    <option value="3">5 km</option>
                    <option value="3">10 km</option>
                    <option value="3">15 km</option>
                    <option value="3">20 km</option>
                    <option value="3">50 km</option>
                  </Form.Select>
                  {/* <Form.Control value={this.state.val}
                  onChange={e => this.setState({ val: e.target.value})}/> */}
                </Form.Group>

                <Form.Group as={Col} controlId="formFuelType">
                  <Form.Label className="mt-2">Fuel type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Select fuel type</option>
                    <option value="1">Diesel</option>
                    <option value="2">Super E5</option>
                    <option value="3">Super E10</option>
                  </Form.Select>
                  {/* <InputGroup className="mb-3">
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
                </InputGroup> */}
                </Form.Group>
              </Row>

              <Form.Group as={Row} controlId="formRadiusSlider">
                <Form.Label column sm="4" className="mt-2">
                  Radius
                </Form.Label>
                <Col sm="8">

                  <RangeSlider
                    className="mt-2"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    min={1}
                    max={20}
                    tooltipLabel={(currentValue) => `${currentValue} km`}
                  />
                </Col>
              </Form.Group>

              {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label className="mt-2">Date from</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label className="mt-2">Date to</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Row> */}

              <Row className="mb-2">
                <Form.Group as={Col} controlId="formDays">
                  <Form.Label className="mt-2">Days</Form.Label>
                  <Form.Select>
                    <option>Select days</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="1">4</option>
                    <option value="2">5</option>
                    <option value="3">6</option>
                    <option value="1">7</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formTimeFrom">
                  <Form.Label className="mt-2">Time from</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>

                <Form.Group as={Col} controlId="formTimeTo">
                  <Form.Label className="mt-2">Time to</Form.Label>
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
                   <div className={classes.radiusMap}>
                    {selectRadiusIsOpen && <TestMapsView  />}
                   </div>         
            </Modal.Body>
            <Modal.Footer>
                <Row >
                  <Col>
                    <Button
                        variant="light"
                        type="button"
                        onClick={props.onClose}
                      >Cancle</Button>
                  </Col>
                  <Col>
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={props.onClose}
                    >Save to favorite</Button>
                  </Col>
                  <Col >
                    <Button
                      variant="primary"
                      type="button"
                      onClick={props.onClose}
                    >Show results</Button>
                  </Col>
                </Row>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Form>
    </>
  );
}

export default Searchform;
