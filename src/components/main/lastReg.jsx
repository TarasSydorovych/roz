import css from "./style.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import newkjfgsdf from "../../img/business-sales-agreement.jpeg";
import { useTranslation } from "react-i18next";
import vaglivo from "../../img/vaglivo.png";
import { FaCheck } from "react-icons/fa";
import fotoDsd from "../../img/fotoDsd.jpg";
const LastReg = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.wrapEtapLast}>
      <img className={css.newkjfgsdf} src={newkjfgsdf} alt="fotoDsd" />
      <div className={css.wrapLastInfoBlock}>
        <p className={css.lastPMasd}>{t("lastTitle")}</p>
        <ul className={css.wrapUlO}>
          <li className={css.oneLiO}>{t("lastPFirst")}</li>
          <li className={css.oneLiO}>{t("lastPSecond")}</li>
          <li className={css.oneLiO}>{t("lastPThre")}</li>
          <li className={css.oneLiO}>{t("lastPFour")}</li>
          <li className={css.oneLiO}>{t("lastPFive")}</li>
          <li className={css.oneLiO}>{t("lastPSix")}</li>
        </ul>
      </div>
    </div>
  );
};
export default LastReg;
