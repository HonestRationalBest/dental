import React from 'react'
import style from './style/OurBlogSection.module.css'
import { NavLink } from 'react-router-dom';

import like from "../../img/Home/like.svg";
import stick from "../../img/Home/stick.svg";
import chat from "../../img/Home/chat.svg";
import ourblog_01 from "../../img/Home/ourblog_01.png";

const OurBlogSection = () => {
    return (
        <div className={style.ourblog}>
        <div className={style.container}>
          <div className={style.ourblog__title}>
            <h2>Our Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
          </div>
          <div className={style.ourblog__card_wrapper}>
            <div className={style.ourblog__card}>
              <img src={ourblog_01} alt="" className={style.ourblog_picture} />
              <div className={style.ourblog__activities}>
                <NavLink to="/">By Akash</NavLink>
                <div className={style.ourblog_stick}>
                  <img src={stick} alt="" />
                </div>
                <p>27 Sep 2020</p>
                <div className={style.ourblog_stick}>
                  <img src={stick} alt="" />
                </div>
                <img src={chat} alt="" />
                <p>280</p>
                <div className={style.ourblog_stick}>
                  <img src={stick} alt="" />
                </div>
                <img src={like} alt="" />
                <p>280</p>
              </div>
              <div className={style.ourblog_text}>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h3>
                <p>
                  Your bedroom is where you begin and end every day, and when
                  it’s styled just how you like it, it can set the perfect tone.
                  Whether you’re making a few easy updates or starting fresh ...
                </p>
              </div>
            </div>
            <div className={style.ourblog__card}>
              <img src={ourblog_01} alt="" className={style.ourblog_picture} />
              <div className={style.ourblog__activities}>
                <NavLink to="/">By Akash</NavLink>
                <div className={style.ourblog_stick}>
                  <img src={stick} alt="" />
                </div>
                <p>27 Sep 2020</p>
                <div className={style.ourblog_stick}>
                  <img src={stick} alt="" />
                </div>
                <img src={chat} alt="" />
                <p>280</p>
                <div className={style.ourblog_stick}>
                  <img src={stick} alt="" />
                </div>
                <img src={like} alt="" />
                <p>280</p>
              </div>
              <div className={style.ourblog_text}>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h3>
                <p>
                  Your bedroom is where you begin and end every day, and when
                  it’s styled just how you like it, it can set the perfect tone.
                  Whether you’re making a few easy updates or starting fresh ...
                </p>
              </div>
            </div>
            <div className={style.ourblog__card}>
              <img src={ourblog_01} alt="" className={style.ourblog_picture} />
              <div className={style.ourblog__activities}>
                <NavLink to="/">By Akash</NavLink>
                <div className={style.ourblog_stick}>
                  <img src={stick} alt="" />
                </div>
                <p>27 Sep 2020</p>
                <div className={style.ourblog_stick}>
                  <img src={stick} alt="" />
                </div>
                <img src={chat} alt="" />
                <p>280</p>
                <div className={style.ourblog_stick}>
                  <img src={stick} alt="" />
                </div>
                <img src={like} alt="" />
                <p>280</p>
              </div>
              <div className={style.ourblog_text}>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h3>
                <p>
                  Your bedroom is where you begin and end every day, and when
                  it’s styled just how you like it, it can set the perfect tone.
                  Whether you’re making a few easy updates or starting fresh ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default OurBlogSection
