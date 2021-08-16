import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style/Header.module.css";
import logo from "../../img/Home/logo.svg";

import inst from "../../img/Home/Header/Instagram.svg";
import youtube from "../../img/Home/Header/Youtube.svg";
import twitter from "../../img/Home/Header/Twitter.svg";
import dribble from "../../img/Home/Header/Facebook.svg";

export const Header = () => {
  return (
    <div className={style.header_wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <ul className={style.menu}>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <NavLink to="/doctor">
              <li>Doctor</li>
            </NavLink>
            <NavLink to="/blog">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
          <div className={style.logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className={style.contacts}>
            <li>
              <NavLink to="/">
                <img src={inst} alt="inst" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src={youtube} alt="inst" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src={twitter} alt="inst" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src={dribble} alt="inst" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
