import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import GasStationList from "../gasstations/GasStationList";
import LogInForm from "../ui/forms/LogInForm";
import GasChart from "../ui/GasChart";
import classes from "./Overview.module.css"


function OverviewPage() {

    const DUMMY_DATA = [
        {
            uuid: "1",
            stationname: "Tankstelle 1",
            additionalinfo: "12km",
            price: "1,23€",
            date: "05.03.2022"
        }, {
            uuid: "2",
            stationname: "Tankstelle 1",
            additionalinfo: "12km",
            price: "1,23€",
            date: "05.03.2022"
        }, {
            uuid: "3",
            stationname: "Tankstelle 1",
            additionalinfo: "12km",
            price: "1,23€",
            date: "05.03.2022"
        }
    ]

    return (
        <>
            <div className={
                classes.container}>
                <div className={classes.containerOverview}>
                    <h1>Overview</h1>
                    <Container>
                        <Row>
                            <Col p={8}>
                                <Card>          
                                    <GasChart className={classes.chart}/>
                                </Card>
                            </Col>
                            <Col p={4}>
                                <Card>
                                    <div className={classes.chartinfos}>
                                        <ul>
                                            <li>Hallo</li>
                                            <li>Hallo das</li>
                                            <li>Hallo das ist ein Test</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <div className={classes.containerList}>
                                <h1>Gas stations nearby:</h1>
                                <div className={classes.listContainer}>
                                    <GasStationList gasStations ={DUMMY_DATA}/>
                                </div>
                            </div>
                        </Row>
                    </Container>    
                </div>


            </div>
        </>
    )
}

export default OverviewPage;
