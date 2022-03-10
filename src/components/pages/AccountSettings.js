import React, { useState, useContext } from "react";
import ProfileIcon from "../ui/ProfileIcon";
import editIcon from "../ui/icons/edit.png";
import classes from "./AccountSettings.module.css"
import RegisterModal from "../ui/RegisterModal";
import Backdrop from "../ui/Backdrop";
import { Button, Col, Container, Row } from "react-bootstrap";
import UserContext from "../store/user-context";

function AccountSettingsPage(props) {

    const userCtx = useContext(UserContext);

    const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);

    

    function logInHandler(){
        modalRegisterIsOpen ? setModalRegisterIsOpen(false) : setModalRegisterIsOpen(true);
    }

    function closeModalHandler(){
        setModalRegisterIsOpen(false);
    }

    function handleLoginSubmit(){ 
        userCtx.logInUser({
            name: "Anonymous",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg"
        });
        closeModalHandler();
    }

    return (
        <>
            <div className={classes.container}>

                <div className={classes.container2} >
                    <h1>Account</h1>
                    <div className={classes.editIconContainer}>
                        <img className={classes.editIcon} src={editIcon} alt="Edit"/>
                    </div>
                </div>
                    <div className={classes.container1}>
                        <ProfileIcon  image={ userCtx.icon } name={ userCtx.name } />
                        { modalRegisterIsOpen && <RegisterModal isOpen={modalRegisterIsOpen} onSubmit={handleLoginSubmit} onCancel={closeModalHandler} /> }
                        { !userCtx.loggedIn && <Button size="sm" variant="link" onClick={logInHandler} >Log in</Button>}
                    </div>
            
                <div className={classes.container2}>
                
                </div>
                <div className={classes.container2} >
                    <h1>Settings</h1>
                    <span className={classes.editIconContainer}>
                        <img className={classes.editIcon} src={editIcon} alt="Edit"/>
                    </span>
                </div>
            </div>
        </>
    )
}

export default AccountSettingsPage;
