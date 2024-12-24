import React from "react";
import coachImg from "../assets/coach.png"

const Coaches = () => {
    return (
        <div className="main_content_coach">
            <h2 className="main_content_coach_h">Наши тренеры</h2>
            <ul className="main_content_coach_ul">
                {[...Array(4)].map((_, index) => (
                    <li className="main_content_coach_ul_item" key={index}>
                        <div>
                            <img src={coachImg} alt="Тренер" className="main_content_coach_ul_item_img" />
                            <h3 className="main_content_coach_ul_item_name">Имя Фамилия</h3>
                        </div>
                        <p className="main_content_coach_ul_item_p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur est dignissimos et ullam sapiente sint, suscipit possimus. Fugit in nisi reiciendis veritatis eum ratione minima quaerat. Neque est porro officiis repellendus nisi! Minima veritatis quo ratione amet eveniet laborum voluptates non aut, labore officiis dolore ad dolores nostrum quidem?
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Coaches;
