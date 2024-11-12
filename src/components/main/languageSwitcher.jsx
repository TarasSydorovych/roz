import React from "react";
import { useTranslation } from "react-i18next";
import css from "../main/style.module.css";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={css.swatherWrap}>
      <button
        className={css.languageButton}
        onClick={() => changeLanguage("ua")}
      >
        UA
      </button>
      <p className={css.slesh}>/</p>
      <button
        className={css.languageButton}
        onClick={() => changeLanguage("ru")}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
