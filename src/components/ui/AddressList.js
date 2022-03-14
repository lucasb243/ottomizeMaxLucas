import React, { useContext } from 'react';
import UserContext from '../store/user-context';
import AddressItem from './AddressItem';
import classes from "./AddressList.module.css";

function AddressList(){
    const userCtx = useContext(UserContext);
    return(
        <div>
            <ul className={classes.list}>
                    {userCtx.loggedIn ? (userCtx.addresses.map(address =>
                    <AddressItem 
                    key = {address.id}
                    street={address.street} 
                    city={address.city} />
                    )) : null} 
            </ul>
        </div>
    )
}
export default AddressList;