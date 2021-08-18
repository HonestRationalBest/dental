import React from 'react'
import style from "./style/ServicesSection.module.css"

import explore_arrow from "../../img/Home/explore_arrow.svg";
import explore_all from "../../img/Home/explore_all.svg";
import { NavLink } from "react-router-dom";

const ServicesSection = () => {
    return (
        <div className={style.services_section}>
        <div className={style.container}>
          <div className={style.services_section__body}>
            <div className={style.services_section__title}>
              <h2>Our Umbrella of Services</h2>
              <h2>
                <span>Pain free procedures in dentistry</span>
              </h2>
            </div>
            <div className={style.services_section__cards_wrapper}>
              <div className={style.services_section_card}>
                <h3>Teeth Whitening</h3>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                  sed nam sem tellus erat.
                </p>
                <NavLink
                  to="/"
                  className={style.services_section_explore_arrow}
                >
                  <p>Explore</p>
                  <img src={explore_arrow} alt="" />
                </NavLink>
              </div>
              <div className={style.services_section_card}>
                <h3>Teeth Whitening</h3>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                  sed nam sem tellus erat.
                </p>
                <NavLink
                  to="/"
                  className={style.services_section_explore_arrow}
                >
                  <p>Explore</p>
                  <img src={explore_arrow} alt="" />
                </NavLink>
              </div>
              <div className={style.services_section_card}>
                <h3>Teeth Whitening</h3>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                  sed nam sem tellus erat.
                </p>
                <NavLink
                  to="/"
                  className={style.services_section_explore_arrow}
                >
                  <p>Explore</p>
                  <img src={explore_arrow} alt="" />
                </NavLink>
              </div>
            </div>
            <div className={style.services_section__cards_wrapper}>
              <div className={style.services_section_card}>
                <h3>Teeth Whitening</h3>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                  sed nam sem tellus erat.
                </p>
                <NavLink
                  to="/"
                  className={style.services_section_explore_arrow}
                >
                  <p>Explore</p>
                  <img src={explore_arrow} alt="" />
                </NavLink>
              </div>
              <div className={style.services_section_card}>
                <h3>Teeth Whitening</h3>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                  sed nam sem tellus erat.
                </p>
                <NavLink
                  to="/"
                  className={style.services_section_explore_arrow}
                >
                  <p>Explore</p>
                  <img src={explore_arrow} alt="" />
                </NavLink>
              </div>
              <div className={style.services_section_card}>
                <h3>Teeth Whitening</h3>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                  sed nam sem tellus erat.
                </p>
                <NavLink
                  to="/"
                  className={style.services_section_explore_arrow}
                >
                  <p>Explore</p>
                  <img src={explore_arrow} alt="" />
                </NavLink>
              </div>
            </div>
            <div className={style.services_section_explore_all}>
              <h3>Explore all</h3>
              <img src={explore_all} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default ServicesSection
