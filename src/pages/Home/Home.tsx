import React from "react";
import { Header } from "../../components/Header/Header";
import style from "./style/Home.module.css";
import header_img from "../../img/Home/header_img.png";
import blue_circle from "../../img/Home/blue_circle.png";

import HomeCards from "../../sections/HomeCards/HomeCards";
import OfferSection from "../../sections/OfferSection/OfferSection";
import ServicesSection from "../../sections/ServicesSection/ServicesSection";
import SpecialistsSection from "../../sections/SpecialistsSection/SpecialistsSection";
import OurBlogSection from "../../sections/OurBlogSection/OurBlogSection";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <header>
        <Header />
        <div className={style.main}>
          <div className={style.container}>
            <div className={style.offer}>
              <div className={style.offer__body}>
                <p className={style.offer_welcome}>Welcome to Dental Clinic</p>
                <h1>Professional,Warm and friendly Dental care for you</h1>
                <p className={style.offer_suggest}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>
                <button>Make Appointment</button>
              </div>
              <div className={style.header__img}>
                <img src={header_img} alt="" />
              </div>
            </div>
          </div>
          <div className={style.blue_ellipse}>
            <img src={blue_circle} alt="" />
          </div>
        </div>
      </header>
      <section className={style.intermediate_section}>
        Get in touch with us today <span>(02) 9955 4239</span>
      </section>
      <div className={style.container}>
        <HomeCards />
        <OfferSection />
        <ServicesSection />
        <SpecialistsSection />
        <OurBlogSection />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
