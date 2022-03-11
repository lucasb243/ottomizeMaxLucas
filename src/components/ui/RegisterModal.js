import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Registerform from "./forms/RegisterForm";
import classes from "./RegisterModel.module.css"

function RegisterModal(props) {

    return(
        <div className={classes.modal}>
            <Registerform onClickSubmit={props.onSubmit} show={props.isOpen} onClose={props.onCancel}/>
        </div>
    )
}
export default RegisterModal;