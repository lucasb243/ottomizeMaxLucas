import { createContext, useState } from "react";

const USERDATA_NOT_LOGGED_IN = [{
    name: "not signed in",
    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
},{
    name: "Anonymous",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg"
}]


const UserContext = createContext({
    name: "uname",
    loggedIn: false,
    icon: "url",
    email: "email",
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
    const [userEmail, setUserEmail] = useState("lucas.brach@sap.com");

    function changeUserNameHandler(userName){setUserName(userName)}
    function changeLoggedInHandler(){setUserLoggedIn(!userLoggedIn)}
    function changeIconHandler(iconUrl){setUserIcon(iconUrl)}
    function logInHandler(user){
        setUserIcon(user.icon)
        setUserName(user.name)
        setUserEmail(user.email)
        setUserLoggedIn(true)
    }
    function logOutHandler(){
        context.changeIcon("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png")
        context.changeUserName("")
        context.changeEmail("email")
        context.changeLoggedIn(false)
    }

    function changeEmailHandler(){}
    function changePasswordHandler(){}

    const context = {
            loggedIn: userLoggedIn,
            name: userName,
            icon: userIcon,
            logInUser:  logInHandler,
            logOutUser: logOutHandler,
            changeEmail: changeEmailHandler,
            changeUserName: changeUserNameHandler,
            changePassword: changePasswordHandler,
            changeLoggedIn: changeLoggedInHandler,
            changeIcon: changeIconHandler
    };

    return <UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>
}
export default UserContext;