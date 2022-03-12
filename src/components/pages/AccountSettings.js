import React, { useState, useContext } from "react";
import ProfileIcon from "../ui/ProfileIcon";
import editIcon from "../ui/icons/edit.png";
import classes from "./AccountSettings.module.css";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import UserContext from "../store/user-context";
import EditProfileForm from "../ui/forms/EditProfileFrom";
import AddressList from "../ui/AddressList";
import LogInForm from "../ui/forms/LogInForm";
import Registerform from "../ui/forms/RegisterForm";

function AccountSettingsPage(props) {

    const userCtx = useContext(UserContext);

    const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);
    const [modalLogInIsOpen, setModalLogInIsOpen] = useState(false);
    const [modalEditAccountIsOpen, setModalEditAccountIsOpen] = useState(false);

    

    function logInButtonHandler(){
        setModalLogInIsOpen(true)
    }
    function logOutHandler(){
        userCtx.logOutUser()
    }

    function closeLogInModalHandler(){setModalLogInIsOpen(false);}
    function closeRegisterModalHandler(){setModalRegisterIsOpen(false);}
    function closeEditAccountModalHandler(){setModalEditAccountIsOpen(false);}
    //TODO
    function getUserDataFromServer(){
        //do magic
        let user = {
            name: "Anonymous",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg",
            email: "lucas.brach@sap.com",
            addresses: [
                {id: 1, street:"Seckenheimer Landstaße 4a", city: "Mannheim", postcode: 68163, type:"Home"},
                {id: 2, street:"Hauptstraße 14", city: "14", postcode: 76872, type:"Home"}
            ]
        }
        return user;
    }

    function handleLogInSubmit(){ 
        userCtx.logInUser(getUserDataFromServer());
        closeLogInModalHandler();
    }
    function handleRegisterSubmit(){
        closeRegisterModalHandler()
    }
    
    function handleRegisterButton(){
        setModalLogInIsOpen(false);
        setModalRegisterIsOpen(true);
    }
    function handleEditUserButton(){
        setModalEditAccountIsOpen(true);
    }
    function handleEditUserSubmit(){

    }
    
    return (
        <>
            <div className={classes.container}>

                <div className={classes.container2} >
                    <h1>Account</h1>
                    <Button className={classes.editIconContainer} onClick={handleEditUserButton}>
                        <Image fluid className={classes.editIcon} src={editIcon} alt="Edit"/>
                    </Button>
                    { modalEditAccountIsOpen && <EditProfileForm show={modalEditAccountIsOpen} onSubmit={handleEditUserSubmit} onClose={closeEditAccountModalHandler} /> }
                </div>
                    <div className={classes.container1}>
                        <ProfileIcon  image={ userCtx.icon } name={ userCtx.name } />
                        
                        { modalLogInIsOpen && <LogInForm show={modalLogInIsOpen} onSubmit={handleLogInSubmit} onClose={closeLogInModalHandler} onRegister={handleRegisterButton} /> }
                        { modalRegisterIsOpen && <Registerform show={modalRegisterIsOpen} onSubmit={handleRegisterSubmit} onClose={closeRegisterModalHandler} /> }
                        { !userCtx.loggedIn ? <Button size="sm" variant="link" onClick={logInButtonHandler} >Log in</Button> 
                        : <Button size="sm" variant="link" onClick={logOutHandler} >Log out</Button> }
                </div>
                
                <div className={classes.container1}>
                    <h1>Addresses</h1>
                    {userCtx.loggedIn ? <AddressList list={userCtx.addresses} /> : <p>Please log in</p>}
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
