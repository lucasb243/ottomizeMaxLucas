import React from "react";
import GasStationItem from "./GasStationItem";
import classes from "./GasStationList.module.css"

function GasStationList(props){
    return (
        <ul className={classes.list}>
            {props.gasStations.map(gasStation =>
            <GasStationItem 
            key={gasStation.uuid} 
            uuid={gasStation.uuid} 
            stationname={gasStation.stationname}
            additionalInfo={gasStation.additionalInfo}
            price={gasStation.price}
            date={gasStation.date}
            time={gasStation.time}/>
            )
        } </ul>
    )
}
export default GasStationList;