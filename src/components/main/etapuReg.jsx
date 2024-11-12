import css from "./style.module.css";
import { AiOutlineCheck } from "react-icons/ai";

import { useTranslation } from "react-i18next";
import vaglivo from "../../img/vaglivo.png";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const EtapuReg = ({ openPopup }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={css.wrapEtap}>
      <p className={css.vaglivoPMain}> {t("etapuO")}</p>
      <div className={css.wrapBlockEtap}>
        <span className={css.spanInEtap}>1.</span>
        <p className={css.pInEtapO}>{t("firstEtap")}</p>
      </div>
      <div className={css.wrapBlockEtap}>
        <span className={css.spanInEtap}>2.</span>
        <p className={css.pInEtapO}>{t("secondEtap")}</p>
      </div>
      <div className={css.wrapBlockEtap}>
        <span className={css.spanInEtap}>3.</span>
        <p className={css.pInEtapO}>{t("threEtap")}</p>
      </div>
      <div className={css.wrapBlockEtap}>
        <span className={css.spanInEtap}>4.</span>
        <p className={css.pInEtapO}>{t("fourEtap")}</p>
      </div>
      <div className={css.wrapBlockEtap}>
        <span className={css.spanInEtap}>5.</span>
        <p className={css.pInEtapO}>{t("fiveEtap")}</p>
      </div>
      <div className={css.wrapBlockEtap}>
        <span className={css.spanInEtap}>6.</span>
        <p className={css.pInEtapO}>{t("sixEtap")}</p>
      </div>
      <div className={css.wrapBlockEtap}>
        <span className={css.spanInEtap}>7.</span>
        <p className={css.pInEtapO}>{t("sevenEtap")}</p>
      </div>
      <div className={css.popUpButton} onClick={openPopup}>
        {t("connect")}
      </div>
    </div>
  );
};
export default EtapuReg;
