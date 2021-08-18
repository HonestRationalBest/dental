import React from 'react'
import style from "./style/HomeCards.module.css"

import icon1 from "../../img/Home/Cards/Card1.svg";
import icon2 from "../../img/Home/Cards/Card2.svg";
import icon3 from "../../img/Home/Cards/Card3.svg";
import icon4 from "../../img/Home/Cards/Card4.svg";
import { Card } from '../../pages/Home/components/Card';

const HomeCards = () => {
    return (
        <div className={style.homeCards}>
        <div className={style.container}>
          <div className={style.homeCards__body}>
            <Card
              icon={icon1}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              title="Teeth Testing"
            />
            <Card
              icon={icon2}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              title="Teeth Testing"
            />
            <Card
              icon={icon3}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              title="Teeth Testing"
            />
            <Card
              icon={icon4}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              title="Teeth Testing"
            />
          </div>
        </div>
      </div>
    )
}

export default HomeCards
