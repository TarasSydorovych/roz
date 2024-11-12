import css from "./style.module.css";
import { AiOutlineCheck } from "react-icons/ai";

import { useTranslation } from "react-i18next";
import vaglivo from "../../img/vaglivo.png";
import { FaCheck } from "react-icons/fa";

const ChomyVagluvo = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.wrapVagluvo}>
      <div className={css.firstVagluva}>
        <div className={css.titleVagluvo}>
          <img className={css.vaglivoImg} src={vaglivo} alt="vaglivo" />
          <p className={css.vaglivoPMain}> {t("chomyVagTitle")}</p>
        </div>
        <p className={css.vaglivoDesc}>{t("chomuVagDesc")}</p>
        <p className={css.listVag}>
          <FaCheck className={css.aiOutlineCheck} />
          {t("listvagOne")}
        </p>
        <p className={css.listVag}>
          <FaCheck className={css.aiOutlineCheck} />
          {t("listvagTwo")}
        </p>
        <p className={css.listVag}>
          <FaCheck className={css.aiOutlineCheck} />
          {t("listvagThre")}
        </p>
      </div>
      <div className={css.wrapCount}>
        <div className={css.coWrapO}>
          <p className={css.numberL}>750</p>
          <p className={css.numberLDesc}>{t("zadOne")}</p>
        </div>
        <div className={css.coWrapO}>
          <p className={css.numberL}>20</p>
          <p className={css.numberLDesc}>{t("zadTwo")}</p>
        </div>
        <div className={css.coWrapO}>
          <p className={css.numberL}>243</p>
          <p className={css.numberLDesc}>{t("zadThre")}</p>
        </div>
        <div className={css.coWrapO}>
          <p className={css.numberL}>99%</p>
          <p className={css.numberLDesc}>{t("zadFour")}</p>
        </div>
      </div>
    </div>
  );
};
export default ChomyVagluvo;
