import React, { useState } from "react";
import ProfileIcon from "../ui/ProfileIcon";
import editIcon from "../ui/icons/edit.png";
import classes from "./AccountSettings.module.css"
import RegisterModal from "../ui/RegisterModal";
import Backdrop from "../ui/Backdrop";
import { Button, Col, Container, Row } from "react-bootstrap";

function AccountSettingsPage(props) {

    const DUMMY_DATA =[{
        name: "not signed in",
        icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
    },{
        name: "Anonymous",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg"
    }]
    const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    function logInHandler(){
        modalRegisterIsOpen ? setModalRegisterIsOpen(false) : setModalRegisterIsOpen(true);
    }

    function closeModalHandler(){
        setModalRegisterIsOpen(false);
    }

    function handleLoginSubmit(){ 
        console.log("1")
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
                        <ProfileIcon  image={userLoggedIn ? DUMMY_DATA[1].icon : DUMMY_DATA[0].icon} name={userLoggedIn ? DUMMY_DATA[1].name : DUMMY_DATA[0].name}/>
                        { modalRegisterIsOpen && <RegisterModal isOpen={modalRegisterIsOpen} onSubmit={handleLoginSubmit} onCancel={closeModalHandler} /> }
                        { !userLoggedIn && <Button size="sm" variant="link" onClick={logInHandler} >Log in</Button>}
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
