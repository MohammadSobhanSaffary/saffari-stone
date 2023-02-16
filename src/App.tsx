import React from "react";
import logo from "./logo.svg";
import "./App.css";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { messageEn } from "./constants/messageEn";
import { messageFa } from "./constants/messageFa";
import i18next from "i18next";

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
    <div className="App  text-3xl font-bold ">{t("SaffariStone")}</div>
  );
}

export default App;
