import css from "./style.module.css";
import newOned from "../../img/new/newOned.png";
import asdf from "../../img/new/asdf.png";
import kauhsdf from "../../img/new/kauhsdf.png";
import kaluhsdh from "../../img/new/kaluhsdh.png";
import ifhgds from "../../img/new/ifhgds.png";
import iaudcx from "../../img/new/iaudcx.png";
import { useTranslation } from "react-i18next";
import features from "../../img/features.jpg";
const BlockNew = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.wrapCinnosts} id="section2">
      <p className={css.pCinnostiQ}> {t("newBlockFirstTitle")}</p>
      <p className={css.pCinnostiNew}> {t("weGiceFor")}</p>
      <div className={css.naSebeBlock}>
        <div className={css.wrapAllPro}>
          <div className={css.wrapOneEnd}>
            <p className={css.newOnePost}>{t("tiOne")}</p>
            <img className={css.newOned} src={newOned} alt="newOned" />
          </div>
          <div className={css.wrapOneEnd}>
            <p className={css.newOnePost}>{t("tiTwo")}</p>
            <img className={css.newOned} src={asdf} alt="newOned" />
          </div>
          <div className={css.wrapOneEnd}>
            <p className={css.newOnePost}>{t("tiThre")}</p>
            <img className={css.newOned} src={iaudcx} alt="newOned" />
          </div>
        </div>
        <img className={css.centerPicture} src={features} alt="features" />
        <div className={css.wrapAllProMirrov}>
          <div className={css.wrapOneEnd}>
            <img className={css.kaluhsdh} src={kaluhsdh} alt="newOned" />
            <p className={css.newOnePostmirov}>{t("tiFour")}</p>
          </div>
          <div className={css.wrapOneEnd}>
            <img className={css.kaluhsdh} src={ifhgds} alt="newOned" />
            <p className={css.newOnePostmirov}>{t("tiFive")}</p>
          </div>
          {/* <div className={css.wrapOneEnd}>
            <img className={css.kaluhsdh} src={kauhsdf} alt="newOned" />
            <p className={css.newOnePostmirov}>{t("tiThre")}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default BlockNew;
