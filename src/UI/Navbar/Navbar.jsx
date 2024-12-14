import React from "react";
import classes from "./Navbar.module.css"; 
import logo from "../../assets/logoWithoutBackground.png"

const Navbar = () => {
        
        return (
                <div className={classes.navbar_main}>
                        <img className={classes.navbar_img} src={logo}></img>
                </div>
        )
}

export default Navbar;