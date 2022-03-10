import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


function Sidebar(props) {
    return (
        <>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <i class="fs-4 bi-house"></i>
                                    <Link class="nav-link align-middle px-0" to="/">Overview
                                        <span class="ms-1 d-none d-sm-inline"/></Link>
                                </li>
                                <li>
                                    <i class="fs-4 bi-speedometer2"></i>
                                    <Link class="nav-link align-middle px-0" to="/search-page">Search Page
                                        <span class="ms-1 d-none d-sm-inline"/></Link>
                                </li>
                                <li>
                                    <i class="fs-4 bi-person"></i>
                                    <Link class="nav-link align-middle px-0" to="/account">Account
                                        <span class="ms-1 d-none d-sm-inline"/></Link>
                                </li>
                            </ul>
                            <hr></hr>

                        </div>
                    </div>
                    <div class="col py-3">
                        {props.children}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Sidebar;
