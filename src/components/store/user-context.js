import { createContext, useState } from "react";

const DUMMY_USER_DATA = [{
    name: "not signed in",
    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    email: "",
    addresses: []
},{
    name: "Anonymous",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg",
    email: "lucas.brach@sap.com",
    addresses: [
        {id: 1, street:"Seckenheimer Landstaße 4a", city: "Mannheim", postcode: 68163, type:"Home"},
        {id: 2, street:"Hauptstraße 14", city: "Minfeld", postcode: 76872, type:"Home"}
    ]
}]


const UserContext = createContext({
    name: "uname",
    loggedIn: false,
    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    email: "email",
    addresses: [{id: -1, street:"", city: "", postcode: -1, type:""}],
    logInUser:  (user) =>{},
    logOutUser:  (user) =>{},
    changeEmail:    (newEmail) => {},
    changeUserName: (newUserName) => {},
    changePassword: (newPassword) => {},
    changeLoggedIn: (newLogInState) => {},
    changeIcon:     (newIcon) => {} 
});

export function UserContextProvider(props){
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userIcon, setUserIcon] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png");
    const [userEmail, setUserEmail] = useState("");
    const [userAddresses, setUserAddresses] = useState([{id: -1, street:"", city: "", type:""}]);

    function changeUserNameHandler(userName){setUserName(userName)}
    function changeLoggedInHandler(){setUserLoggedIn(!userLoggedIn)}
    function changeIconHandler(iconUrl){setUserIcon(iconUrl)}
    function addAddressesHandler(address){
        setUserAddresses((prevUserAddresses) =>{
            return prevUserAddresses.concat(address)
        });
    }
    function removeAddressesHandler(addressId){
            setUserAddresses(prevUserAddresses =>{
                return prevUserAddresses.filter(address => address.id !== addressId)
            })
    }
    function changeEmailHandler(){}
    function changePasswordHandler(){}


    function logInHandler(user){
        setUserLoggedIn(true)
        setUserIcon(user.icon)
        setUserName(user.name)
        setUserEmail(user.email)
        setUserAddresses(user.addresses)
    }
    function logOutHandler(){
        context.changeIcon("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png")
        context.changeUserName("")
        context.changeEmail("email")
        context.changeLoggedIn(false)
        context.setUserAddresses([])
    }

    const context = {
            loggedIn: userLoggedIn,
            name: userName,
            icon: userIcon,
            addresses: userAddresses,
            logInUser:  logInHandler,
            logOutUser: logOutHandler,
            changeEmail: changeEmailHandler,
            changeUserName: changeUserNameHandler,
            changePassword: changePasswordHandler,
            changeLoggedIn: changeLoggedInHandler,
            changeIcon: changeIconHandler,
            removeAddresses: removeAddressesHandler,
            addAddresses: addAddressesHandler,
    };

    return <UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>
}
export default UserContext;