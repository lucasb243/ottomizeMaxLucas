import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Searchform from "./forms/SearchForm";
import classes from "./RegisterModel.module.css"

function SearchModal(props) {

    return(
        <div className={classes.modal}>
            <Searchform show={props.isOpen} onClose={props.onCancel}/>
        </div>
    )
}
export default SearchModal;