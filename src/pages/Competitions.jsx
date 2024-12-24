import React from "react";
import compet from "../assets/competitions.jpg"

const Competitions = () => {
    return (
        <div className="container_container">
            <h1  className="competitions_h">Соревнования</h1>
            <ul className="competitions_ul">
                 {[...Array(4)].map((_, index) => (
                                    <li className="competitions_ul_item">
                                        <h2 className="competitions_ul_item_img">Соревнования в городе Евпатория</h2>
                                        <img src={compet}></img>
                                    </li>
                        ))}
            </ul>
        </div>
    );
};

export default Competitions;