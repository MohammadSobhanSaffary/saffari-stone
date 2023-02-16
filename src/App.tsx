import React from "react";
import "./App.css";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { messageEn } from "./constants/messageEn";
import { messageFa } from "./constants/messageFa";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper";


const resources = {
  en: {
    translation: messageEn,
  },
  fa: {
    translation: messageFa,
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

function App() {
  const { t } = useTranslation();
  return (
    <>
    <div className="App  text-3xl font-bold underline">{t("SaffariStone")}</div>
    <Swiper
    modules={[Autoplay]} pagination={{
      clickable: true,
     
  }}
  autoHeight
  
  className={`min-vh-100`}
  autoplay={{
      delay: 4000,
      disableOnInteraction: false
  }}
    >
      <SwiperSlide><img src="/assets/1.jpg" /></SwiperSlide>
      <SwiperSlide><img src="/assets/3.jpg" /></SwiperSlide>
      <SwiperSlide><img src="/assets/2.jpg" /></SwiperSlide>

    </Swiper>
    </>
  );
}

export default App;
