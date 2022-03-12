import React from "react";
import Searchform from "./forms/SearchForm";

function SearchModal(props) {

    return(
        <div>
            <Searchform show={props.isOpen} onClose={props.onCancel}/>
        </div>
    )
}
export default SearchModal;