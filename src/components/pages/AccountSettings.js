import React, { useState, useContext } from "react";
import ProfileIcon from "../ui/ProfileIcon";
import editIcon from "../ui/icons/edit.png";
import classes from "./AccountSettings.module.css";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import UserContext from "../store/user-context";
import EditProfileForm from "../ui/forms/EditProfileForm";
import AddressList from "../ui/AddressList";
import LogInForm from "../ui/forms/LogInForm";
import Registerform from "../ui/forms/RegisterForm";
import SettingsForm from "../ui/forms/SettingsForm";
import EditAddressesForm from "../ui/forms/EditAddressesForm";

function AccountSettingsPage(props) {

    const userCtx = useContext(UserContext);

    const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);
    const [modalLogInIsOpen, setModalLogInIsOpen] = useState(false);
    const [modalEditAccountIsOpen, setModalEditAccountIsOpen] = useState(false);
    const [modalEditAddressesIsOpen, setModalEditAddressesIsOpen] = useState(false);

    

    function logInButtonHandler(){
        setModalLogInIsOpen(true)
    }
    function logOutHandler(){
        userCtx.logOutUser()
    }

    function closeLogInModalHandler(){setModalLogInIsOpen(false);}
    function closeRegisterModalHandler(){setModalRegisterIsOpen(false);}
    function closeEditAccountModalHandler(){setModalEditAccountIsOpen(false);}
    function closeEditAddressesHandler(){setModalEditAddressesIsOpen(false);}
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
    function handleEditAddressesButton(){
        setModalEditAddressesIsOpen(true);
    }
    function handleEditUserSubmit(){}
    function handleEditAddressesSubmit(){}
    
    return (
        <>
            <div className={classes.container}>

                <div className={classes.container2} >
                    <h1>Account</h1>
                    {userCtx.loggedIn ? <span className={classes.editIconContainer} onClick={handleEditUserButton}>
                        <Image fluid className={classes.editIcon} src={editIcon} alt="Edit User Data"/>
                    </span> : null}
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
                    <div className={classes.container2}>
                        <h1>Addresses</h1>
                        {userCtx.loggedIn ?<span className={classes.editIconContainer} onClick={handleEditAddressesButton}>
                        <Image fluid className={classes.editIcon} src={editIcon} alt="Edit Addresses"/>
                    </span> : null}
                        { modalEditAddressesIsOpen && <EditAddressesForm show={modalEditAddressesIsOpen} onSubmit={handleEditAddressesSubmit} onClose={closeEditAddressesHandler} /> }
                    </div>
                    {userCtx.loggedIn ? <AddressList list={userCtx.addresses} /> : <p>Please log in</p>}
                </div>
                <div className={classes.container1} >
                    <h1>Settings</h1>
                    <SettingsForm />
                    
                </div>
            </div>
        </>
    )
}

export default AccountSettingsPage;
