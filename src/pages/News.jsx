import React from "react";
import newsImg from "../assets/news_img.jpg"

const News = () => {
    return (
        <div className="main_content_news">
            <h2 className="main_content_news_text">Наши новости</h2>
            <ul className="main_content_news_ul">
                {[...Array(8)].map((_, index) => (
                    <li className="main_content_news_ul_item" key={index}>
                        <img src={newsImg} alt="Новость" className="main_content_news_ul_item_img" />
                        <h3 className="main_content_news_ul_item_h">
                            Результаты соревнования города Симферополь
                        </h3>
                        <p className="main_content_news_ul_item_p">10 декабря 2024</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
