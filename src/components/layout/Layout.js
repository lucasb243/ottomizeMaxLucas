import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Layout.module.css"
import Sidebar from "./navigation/Sidebar";

function Layout(props){
    return(
        <>
        <header className={classes.header}>
            <h1>Ottomize</h1><div>Leoren ipsum</div>
        </header>
        <div className={classes.screen}>
            <Sidebar />
            <Container className={classes.container}>
                
                <div className={classes.content}>
                    <main className={classes.main}>
                        {props.children}
                    </main>
                </div>
            </Container>
        </div>
        </>
    );
}

export default Layout;