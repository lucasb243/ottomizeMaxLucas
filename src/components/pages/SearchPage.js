import React from "react";
import classes from "./SearchPage.module.css";
import Card from "../ui/Card";
import MapsView from "../ui/MapsView";
import GasStationList from "../gasstations/GasStationList";
import TestMapsView from "../ui/TestMapsView";

function SearchPage() {
  const DUMMY_DATA = [
    {
      uuid: "1",
      stationname: "Tankstelle 1",
      additionalinfo: "12km",
      price: "1,23€",
      date: "05.03.2022",
    },
    {
      uuid: "2",
      stationname: "Tankstelle 1",
      additionalinfo: "12km",
      price: "1,23€",
      date: "05.03.2022",
    },
    {
      uuid: "3",
      stationname: "Tankstelle 1",
      additionalinfo: "12km",
      price: "1,23€",
      date: "05.03.2022",
    },
  ];

  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerOverview}>
          <h1>Overview</h1>
          <div className={classes.containerMap}>
            <MapsView />
          </div>
        </div>
        <div className={classes.containerOverview}>
          <h1>Overview</h1>
          <div className={classes.containerMap}>
            <TestMapsView />
          </div>
        </div>
        <div className={classes.containerList}>
          <h1>Gas stations nearby:</h1>
          <div className={classes.listContainer}>
            <GasStationList gasStations={DUMMY_DATA} />
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchPage;
