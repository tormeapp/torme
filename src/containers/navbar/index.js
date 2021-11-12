import React from "react";
import './index.scss';

import Button from "../../componenets/button";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-items">
                <div className="nav-item">
                    Home
                </div>
                <div className="nav-item">
                    Users
                </div>
                <div className="nav-item">
                    Businesses
                </div>
                <div className="nav-item">
                    Reports
                </div>
                <div className="nav-item">
                    Analytics
                </div>
            </div>
            <div className="logout-btn">
                <Button
                    text={'LOG OUT'}
                    type={'cancel'}
                    handleOnClick={() => { }}
                />

            </div>
        </div>
    )
}

export default Navbar;