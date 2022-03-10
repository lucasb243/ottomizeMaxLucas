import React, { useState } from "react";
import ProfileIcon from "../ui/ProfileIcon";
import editIcon from "../ui/icons/edit.png";
import classes from "./AccountSettings.module.css"
import RegisterModal from "../ui/RegisterModal";
import Backdrop from "../ui/Backdrop";
import { Button } from "react-bootstrap";

function AccountSettingsPage() {
    const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);

    const [userLoggedIn, setUserLoggedIn] = useState(true);

    function logInHandler(){
        modalRegisterIsOpen ? setModalRegisterIsOpen(false) : setModalRegisterIsOpen(true);
    }

    function closeModalHandler(){
        setModalRegisterIsOpen(false);
    }
    return (
        <>
        { modalRegisterIsOpen && <RegisterModal isOpen={modalRegisterIsOpen} onCancel={closeModalHandler} /> }
            <div className={classes.container}>
                <div className={classes.container2}>
                    <h1>Account</h1>
                    <span className={classes.editIconContainer}>
                        <img className={classes.editIcon} src={editIcon} alt="Edit"/>
                    </span>
                </div>
                
                <div className={classes.container2}>

                
                </div>
                <ProfileIcon image="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg" name="Anoymous"/>
                
                <Button onClick={logInHandler}>Open Log in</Button>
            </div>
            <div className={classes.container2} >
            <h1>Settings</h1>
                    <span className={classes.editIconContainer}>
                        <img className={classes.editIcon} src={editIcon} alt="Edit"/>
                    </span>
            </div>
        </>
    )
}

export default AccountSettingsPage;
