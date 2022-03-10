import React from "react";
import Card from "../ui/Card.js"
import classes from "./GasStationItem.module.css"

function GasStationItem(props){
    return(
        <Card>
            <div className={classes.itemContainer}>
                <div className={classes.container1}>
                    <span className={classes.stationname}>{props.stationname}</span>
                    <span className={classes.additionalInfo}>{props.additionalInfo}</span>
                    <div>
                        <span className={classes.date}>{props.date}</span>
                    </div>
                </div> 
                <div className={classes.container2}>
                    <span className={classes.price}>{props.price}</span>
                </div>
                
            </div>    
        </Card>
    )
}
export default GasStationItem;