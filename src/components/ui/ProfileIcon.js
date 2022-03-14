import React from "react";
import classes from "./ProfileIcon.module.css"

import  { Image} from 'react-bootstrap';

function ProfileIcon(props){
    return(
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <Image roundedCircle className={classes.image} src={props.image} alt="Profile picture" />
            </div>
            <h3>{props.name}</h3>
        </div>
    )
}
export default ProfileIcon;