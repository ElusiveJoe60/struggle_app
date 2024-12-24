import React from 'react';
import "../App.css"
import logo from "../assets/logoWithoutBackground.png"
import newsImg from "../assets/news_img.jpg"
import coach from "../assets/coach.png"

const Home = () => {

        return (
                <div className='main'>
                        <div className='main_content'>
                                <div className='main_content_intro'>
                                <h1 className='main_h1'>
                                Борьба Куреш, древняя борьба тюрко-язычных народов.
                                В настоящее время Корэш имеет несколько разновидностей, не отличающихся между собой принципиально,
                                отличия лишь в не значительных деталях.
                                </h1>
                                <img className='main_content_intro_img' src={logo}></img>
                                </div>
                                <div className='main_content_news'>
                                <h2 className='main_content_news_text'>Наши новости</h2>
                                <ul className='main_content_news_ul'>
                                <li className='main_content_news_ul_item'>
                                <img src={newsImg}></img>
                                <h3 className='main_content_news_ul_item_h'>Результаты соревнования города Симферополь</h3>
                                <p className='main_content_news_ul_item_p'>
                                        10 декабря 2024
                                </p>
                                </li>
                                <li className='main_content_news_ul_item'>
                                <img src={newsImg}></img>
                                <h3 className='main_content_news_ul_item_h'>Результаты соревнования города Симферополь</h3>
                                <p className='main_content_news_ul_item_p'>
                                        10 декабря 2024
                                </p>
                                </li>
                                <li className='main_content_news_ul_item'>
                                <img src={newsImg}></img>
                                <h3 className='main_content_news_ul_item_h'>Результаты соревнования города Симферополь</h3>
                                <p className='main_content_news_ul_item_p'>
                                        10 декабря 2024
                                </p>
                                </li>
                                <li className='main_content_news_ul_item'>
                                <img src={newsImg}></img>
                                <h3 className='main_content_news_ul_item_h'>Результаты соревнования города Симферополь</h3>
                                <p className='main_content_news_ul_item_p'>
                                        10 декабря 2024
                                </p>
                                </li>
                                <li className='main_content_news_ul_item'>
                                <img src={newsImg}></img>
                                <h3 className='main_content_news_ul_item_h'>Результаты соревнования города Симферополь</h3>
                                <p className='main_content_news_ul_item_p'>
                                        10 декабря 2024
                                </p>
                                </li>
                                <li className='main_content_news_ul_item'>
                                <img src={newsImg}></img>
                                <h3 className='main_content_news_ul_item_h'>Результаты соревнования города Симферополь</h3>
                                <p className='main_content_news_ul_item_p'>
                                        10 декабря 2024
                                </p>
                                </li>
                                <li className='main_content_news_ul_item'>
                                <img src={newsImg}></img>
                                <h3 className='main_content_news_ul_item_h'>Результаты соревнования города Симферополь</h3>
                                <p className='main_content_news_ul_item_p'>
                                        10 декабря 2024
                                </p>
                                </li>
                                <li className='main_content_news_ul_item'>
                                <img src={newsImg}></img>
                                <h3 className='main_content_news_ul_item_h'>Результаты соревнования города Симферополь</h3>
                                <p className='main_content_news_ul_item_p'>
                                        10 декабря 2024
                                </p>
                                </li>
                                </ul>
                                </div>

                                <div className='main_content_clubs'>
                                <h2 className='main_content_clubs_h'>
                                Наши клубы
                                </h2>
                                <div className='main_content_clubs_list'>
                                <div className='main_content_clubs_list_item'>
                                <h3 className='main_content_clubs_list_item_h'>
                                        Более 50
                                </h3>
                                <p className='main_content_clubs_list_item_p'>
                                        ТУРНИРОВ
                                </p>
                                </div>
                                <div className='main_content_clubs_list_item'>
                                <h3 className='main_content_clubs_list_item_h'>
                                        15
                                </h3>
                                <p className='main_content_clubs_list_item_p'>
                                        РЕГИОНОВ
                                </p>
                                </div>
                                <div className='main_content_clubs_list_item'>
                                <h3 className='main_content_clubs_list_item_h'>
                                        Более 500
                                </h3>
                                <p className='main_content_clubs_list_item_p'>
                                        УЧАСТНИКОВ
                                </p>
                                </div>
                                </div>
                                </div>

                                <div className='main_content_competitions'>
                                <h2 className='main_content_competitions_h'>
                                Соревнования
                                </h2>
                                <div className='main_content_competitions_list'>
                                <div>
                                <h3 className='main_content_competitions_list_h'>
                                        Более 15
                                </h3>
                                <p className='main_content_competitions_list_p'>
                                        КЛУБОВ
                                </p>
                                </div>
                                <div>
                                <h3 className='main_content_competitions_list_h'>
                                        Более 1500
                                </h3>
                                <p className='main_content_competitions_list_p'>
                                        ПОСЛЕДОВАТЕЛЕЙ
                                </p>
                                </div>
                                </div>
                                </div>

                                <div className='main_content_coach'>
                                <h2 className='main_content_coach_h'>
                                Наши тренеры
                                </h2>
                                <ul className='main_content_coach_ul'>
                                <li className="main_content_coach_ul_item">
                                <div>
                                        <img src={coach} className='main_content_coach_ul_item_img'></img>
                                        <h3 className='main_content_coach_ul_item_name'>
                                        Имя Фамилия
                                        </h3>
                                </div>
                                <p className='main_content_coach_ul_item_p'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur est dignissimos et ullam sapiente sint, suscipit possimus. Fugit in nisi reiciendis veritatis eum ratione minima quaerat. Neque est porro officiis repellendus nisi! Minima veritatis quo ratione amet eveniet laborum voluptates non aut, labore officiis dolore ad dolores nostrum quidem?
                                </p>
                                </li>
                                <li className="main_content_coach_ul_item">
                                <div>
                                        <img src={coach} className='main_content_coach_ul_item_img'></img>
                                        <h3 className='main_content_coach_ul_item_name'>
                                        Имя Фамилия
                                        </h3>
                                </div>
                                <p className='main_content_coach_ul_item_p'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur est dignissimos et ullam sapiente sint, suscipit possimus. Fugit in nisi reiciendis veritatis eum ratione minima quaerat. Neque est porro officiis repellendus nisi! Minima veritatis quo ratione amet eveniet laborum voluptates non aut, labore officiis dolore ad dolores nostrum quidem?
                                </p>
                                </li>
                                <li className="main_content_coach_ul_item">
                                <div>
                                        <img src={coach} className='main_content_coach_ul_item_img'></img>
                                        <h3 className='main_content_coach_ul_item_name'>
                                        Имя Фамилия
                                        </h3>
                                </div>
                                <p className='main_content_coach_ul_item_p'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur est dignissimos et ullam sapiente sint, suscipit possimus. Fugit in nisi reiciendis veritatis eum ratione minima quaerat. Neque est porro officiis repellendus nisi! Minima veritatis quo ratione amet eveniet laborum voluptates non aut, labore officiis dolore ad dolores nostrum quidem?
                                </p>
                                </li>
                                <li className="main_content_coach_ul_item">
                                <div>
                                        <img src={coach} className='main_content_coach_ul_item_img'></img>
                                        <h3 className='main_content_coach_ul_item_name'>
                                        Имя Фамилия
                                        </h3>
                                </div>
                                <p className='main_content_coach_ul_item_p'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur est dignissimos et ullam sapiente sint, suscipit possimus. Fugit in nisi reiciendis veritatis eum ratione minima quaerat. Neque est porro officiis repellendus nisi! Minima veritatis quo ratione amet eveniet laborum voluptates non aut, labore officiis dolore ad dolores nostrum quidem?
                                </p>
                                </li>
                                </ul>
                                </div>
                        </div>

                        
        </div>
        )
}

export default Home