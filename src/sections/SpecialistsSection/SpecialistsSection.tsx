import React from 'react'
import style from './style/SpecialistsSection.module.css'

import facebook from "../../img/Home/facebook.svg";
import inst from "../../img/Home/inst.svg";
import twitter from "../../img/Home/twitter.svg";
import specialist_01 from "../../img/Home/specialist_01.png";

const SpecialistsSection = () => {
    return (
        <div className={style.specialists}>
        <div className={style.container}>
          <div className={style.specialists__title}>
            <h2>Our Distinguished Dental Specialists</h2>
          </div>
          <div className={style.specialists__card_wrapper}>
            <div className={style.specialists__card}>
              <img src={specialist_01} alt="" />
              <div className={style.specialists_text}>
                <h4>Akash Kumar</h4>
                <p>Dentist</p>
                <div className={style.specialists_contacts}>
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={inst} alt="" />
                </div>
              </div>
            </div>
            <div className={style.specialists__card}>
              <img src={specialist_01} alt="" />
              <div className={style.specialists_text}>
                <h4>Akash Kumar</h4>
                <p>Dentist</p>
                <div className={style.specialists_contacts}>
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={inst} alt="" />
                </div>
              </div>
            </div>
            <div className={style.specialists__card}>
              <img src={specialist_01} alt="" />
              <div className={style.specialists_text}>
                <h4>Akash Kumar</h4>
                <p>Dentist</p>
                <div className={style.specialists_contacts}>
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={inst} alt="" />
                </div>
              </div>
            </div>
            <div className={style.specialists__card}>
              <img src={specialist_01} alt="" />
              <div className={style.specialists_text}>
                <h4>Akash Kumar</h4>
                <p>Dentist</p>
                <div className={style.specialists_contacts}>
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={inst} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SpecialistsSection
