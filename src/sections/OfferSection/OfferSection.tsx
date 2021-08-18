import React from 'react'
import style from './style/OfferSection.module.css'

import offerSection__img from "../../img/Home/offerSection_img.png";
import gray_circle from "../../img/Home/gray_circle.png";

const OfferSection = () => {
    return (
        <div className={style.offerSection}>
        <div className={style.container}>
          <div className={style.offerSection__body}>
            <div className={style.offerSection__img}>
              <img src={offerSection__img} alt="" />
            </div>
            <div className={style.gray_circle}>
              <img src={gray_circle} alt="" />
            </div>
            <div className={style.offerSection_text}>
              <h3>Relax your dentist knows best</h3>
              <div className={style.offerSection_paragraph}>
                <h4>Dental hygiene never forget!</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className={style.offerSection_paragraph}>
                <h4>Dental hygiene never forget!</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className={style.offerSection_paragraph}>
                <h4>Dental hygiene never forget!</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default OfferSection
