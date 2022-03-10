import React from "react";
import classes from "./ProfileIcon.module.css"

import  { Image} from 'bootstrap/dist/css/bootstrap.min.css';

function ProfileIcon(props){
    return(
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={props.image} alt="Profile picture" />
            </div>
            <h3>{props.name}</h3>
        </div>
    )
}
export default ProfileIcon;