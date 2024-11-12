import css from "./style.module.css";
import { useTranslation } from "react-i18next";
import popRoz from "../../img/new/popRoz.png";
import cloudY from "../../img/new/cloudY.png";
import grafInc from "../../img/new/grafInc.png";
import tirDef from "../../img/new/tirDef.png";
import lapto from "../../img/new/lapto.png";
import miroca from "../../img/new/miroca.png";
const BlockRozetcaFirst = ({ openPopup }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.wrapFirstRozetca} id="section5">
      <p className={css.pMainInRozetca}>{t("rozetcaTitle")}</p>
      <p className={css.pDrscInRozetca}>{t("rozetcaWrpaO")}</p>
      <div className={css.popUpButton} onClick={openPopup}>
        {t("connect")}
      </div>
      <p className={css.pDrscInRozetcaSmall}>{t("rozetcaWrapD")}</p>
      <div className={css.wrapBlockPosl}>
        <div className={css.wrapOnePosRoz}>
          <img className={css.popRoz} src={popRoz} alt="popRoz" />
          <p className={css.pInDecasRozet}>{t("includeUseOne")}</p>
          <ul className={css.ulInRoxatcaProd}>
            <li className={css.liRozetcaProd}>{t("includeUseOnedescOne")}</li>
            <li className={css.liRozetcaProd}>{t("includeUseOnedescTwo")}</li>
            <li className={css.liRozetcaProd}>{t("includeUseOnedescThre")}</li>
          </ul>
        </div>
        <div className={css.wrapOnePosRoz}>
          <img className={css.popRoz} src={cloudY} alt="popRoz" />
          <p className={css.pInDecasRozet}>{t("includeUseTwo")}</p>
          <ul className={css.ulInRoxatcaProd}>
            <li className={css.liRozetcaProd}>{t("includeUseTwodescOne")}</li>
          </ul>
        </div>
        <div className={css.wrapOnePosRoz}>
          <img className={css.popRoz} src={tirDef} alt="popRoz" />
          <p className={css.pInDecasRozet}>{t("includeUseFour")}</p>
          <ul className={css.ulInRoxatcaProd}>
            <li className={css.liRozetcaProd}>{t("includeUseFourdescOne")}</li>
            <li className={css.liRozetcaProd}>{t("includeUseFourdescTwo")}</li>
            <li className={css.liRozetcaProd}>{t("includeUseFourdescThre")}</li>
          </ul>
        </div>
        <div className={css.wrapOnePosRoz}>
          <img className={css.popRoz} src={grafInc} alt="popRoz" />
          <p className={css.pInDecasRozet}>{t("includeUseThre")}</p>
          <ul className={css.ulInRoxatcaProd}>
            <li className={css.liRozetcaProd}>{t("includeUseThredescOne")}</li>
          </ul>
        </div>

        <div className={css.wrapOnePosRoz}>
          <img className={css.popRoz} src={lapto} alt="popRoz" />
          <p className={css.pInDecasRozet}>{t("includeUseFive")}</p>
          <ul className={css.ulInRoxatcaProd}>
            <li className={css.liRozetcaProd}>{t("includeUseFivedescOne")}</li>
          </ul>
        </div>
        <div className={css.wrapOnePosRoz}>
          <img className={css.popRoz} src={miroca} alt="popRoz" />
          <p className={css.pInDecasRozet}>{t("includeUseSix")}</p>
          <ul className={css.ulInRoxatcaProd}>
            <li className={css.liRozetcaProd}>{t("includeUseSixdescOne")}</li>
          </ul>
        </div>
      </div>
      <p className={css.pDrscInRozetca}>{t("bigDesckInRoz")}</p>
    </div>
  );
};
export default BlockRozetcaFirst;
