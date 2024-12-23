import React from "react";
import classes from "./Navbar.module.css"; 
import logo from "../../assets/logoWithoutBackground.png"

const Navbar = () => {
        
        return (
                <div className={classes.navbar_main}>
                        <img className={classes.navbar_img} src={logo}></img>
                        <ul className={classes.navbar_ul}>
                                <li className={classes.navbar_ul_item}>Новости</li>
                                <li className={classes.navbar_ul_item}>Клубы</li>
                                <li className={classes.navbar_ul_item}>Соревнования</li>
                                <li className={classes.navbar_ul_item}>Наши тренеры</li>      
                        </ul>
                </div>
        )
}

export default Navbar;