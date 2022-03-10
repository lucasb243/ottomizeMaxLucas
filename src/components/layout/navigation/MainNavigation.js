import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import classes from "./MainNavigation.module.css"

function MainNavigation(props) {
    return(
    <div className={classes.container}>
        <div className={classes.sidebarHeader}>
            <img src="" alt="Logo" />
            <h1>Ottomize</h1>
        </div>
        <div className={classes.sidebar}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Overview
                        <span className={classes.iconimage} /></Link>
                    </li>
                    <li>
                        <Link to="/search-page">
                        <span className={classes.iconimage} />Search Page</Link>
                    </li>
                    <li>
                        <Link to="/account">
                        <span className={classes.iconimage} />Account</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    );
}

export default MainNavigation;
