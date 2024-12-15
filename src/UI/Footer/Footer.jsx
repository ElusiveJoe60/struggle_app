import React from "react";
import classes from "./Footer.module.css";
import telegramIcon from "../../assets/telegramIcon"
import VkIcon from "../../assets/VkIcon"

const Footer = () => {
  return (
    <div className={classes.footer_main}>
      <div>
        <p className={classes.footer_p}>
          Региональная физкультурно-спортивная общественная организация
          Федерация национальных видов спорта и крымскотатарской борьбы
          Къушакъ куреши (Борьба на поясах)
        </p>
      </div>
      <div className={classes.footer_buttons}>
        <button className={classes.footer_buttons_item}>
          <a href="https://t.me/">
            <img
              className={classes.footer_buttons_item_img}
              src={telegramIcon}
              alt="Перейти в телеграм"
            />
          </a>
        </button>
        <button className={classes.footer_buttons_item}>
          <a href="https://vk.com/">
            <img
              className={classes.footer_buttons_item_img}
              src={VkIcon}
              alt="Перейти в ВК"
            />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Footer;
