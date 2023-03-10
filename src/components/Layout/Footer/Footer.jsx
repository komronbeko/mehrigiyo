import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import badges from "../../../assets/Badges.png";
import home from "../../../assets/home-1-blog-bg 1.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <h4>Logo</h4>
          <div className="footer__main">
            <ul>
              <li>
                <p>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</p>
              </li>
              <li>
                <p>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</p>
              </li>
              <li>
                <Link to={"https://www.facebook.com/"}>
                  <FacebookIcon />
                </Link>
                <Link to={"https://www.instagram.com/"}>
                  <InstagramIcon />
                </Link>
                <Link to={"https://web.telegram.org"}>
                  <TelegramIcon />
                </Link>
                <Link to={"https://www.youtube.com/"}>
                  <YouTubeIcon />
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <ul>
                  <li>
                    <strong>Huquqiy</strong>
                  </li>
                  <li>
                    <p>Maxfiylik siyosati</p>
                  </li>
                  <li>
                    <p>Xizmat ko'rsatish shartlari</p>
                  </li>
                  <li>
                    <p>Huquqni muhofaza qilish</p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Ilovani yuklab olish</h3>
                <img src={badges} alt="badges" />
              </li>
            </ul>
            <div className="footer__contact">
              <div>
                <p>E-mail</p>
                <strong>info@mehrigiyo.uz</strong>
              </div>
              <div>
                <p>Bizga qo'ng'iroq qiling</p>
                <strong>+99898 125 31 03</strong>
              </div>
            </div>
          </div>
        </div>
        <img src={home} alt="home" className="footer__home" />
      </div>
      <div className="footer-bottom container">
        <p>
          © 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. Saytdan olingan
          barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy.
        </p>
        <ul>
          <li>
            <strong>Bosh Sahifa</strong>
            <strong>Biz Haqimizda</strong>
            <strong>Yangiliklar</strong>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
