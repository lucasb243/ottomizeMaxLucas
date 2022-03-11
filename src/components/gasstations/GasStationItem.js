import React from "react";
import Card from "../ui/Card.js";
import classes from "./GasStationItem.module.css";
import { Row, Col } from "react-bootstrap";

function GasStationItem(props) {
  return (
    <Card>
      <div className={classes.itemContainer}>
        <div className={classes.container1}>
          <span className={classes.stationname}>{props.stationname}</span>
          <span className={classes.additionalInfo}>{props.additionalInfo}</span>
          <Row>
            <Col>
              <span className={classes.date}>{props.date}</span>
            </Col>
            <Col className={classes.container2}>
              <span className={classes.price}>{props.time}</span>
            </Col>
            <Col className={classes.container3}>
              <span className={classes.price}>{props.price}</span>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  );
}
export default GasStationItem;
