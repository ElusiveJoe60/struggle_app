import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../assets/logoWithoutBackground.png";

const Navbar = () => {
    return (
        <div className={classes.navbar_main}>
            <Link to="/" className={classes.navbar_img_link}>
                <img className={classes.navbar_img} src={logo} alt="Logo" />
            </Link>
            <ul className={classes.navbar_ul}>
                <li className={classes.navbar_ul_item}>
                    <Link to="/news" className={classes.navbar_link}>Новости</Link>
                </li>
                <li className={classes.navbar_ul_item}>
                    <Link to="/clubs" className={classes.navbar_link}>Клубы</Link>
                </li>
                <li className={classes.navbar_ul_item}>
                    <Link to="/competitions" className={classes.navbar_link}>Соревнования</Link>
                </li>
                <li className={classes.navbar_ul_item}>
                    <Link to="/coaches" className={classes.navbar_link}>Наши тренеры</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
