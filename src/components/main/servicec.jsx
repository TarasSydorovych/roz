import css from "./style.module.css";
import { useTranslation } from "react-i18next";
const Servicec = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.wrapServiced} id="section2">
      <div className={css.wrapSmallService}>
        <p className={css.servPMain}>{t("ourInclude")}</p>
        <div className={css.wrapServicec}>
          <div className={css.wrapInfDSsa}>
            <div className={css.wrapServCirk}>
              <div className={css.circuitYu}></div>
              <div className={css.wrapAllPoslug}>
                <p className={css.servNamr}>{t("poslugIone")}</p>
                <p className={css.servNamrDescript}>{t("poslugIoneDecs")}</p>
              </div>
            </div>
            <div className={css.wrapServCirk}>
              <div className={css.circuitYu}></div>
              <div className={css.wrapAllPoslug}>
                <p className={css.servNamr}>{t("poslugITwo")}</p>
                <p className={css.servNamrDescript}>{t("poslugITwoDecs")}</p>
              </div>
            </div>
            <div className={css.wrapServCirk}>
              <div className={css.circuitYu}></div>
              <div className={css.wrapAllPoslug}>
                <p className={css.servNamr}>{t("poslugIThre")}</p>
                <p className={css.servNamrDescript}>{t("poslugIThreDecs")}</p>
              </div>
            </div>{" "}
            <div className={css.wrapServCirk}>
              <div className={css.circuitYu}></div>
              <div className={css.wrapAllPoslug}>
                <p className={css.servNamr}>{t("poslugIFour")}</p>
                <p className={css.servNamrDescript}>{t("poslugIFourDecs")}</p>
              </div>
            </div>
            <div className={css.wrapServCirk}>
              <div className={css.circuitYu}></div>
              <div className={css.wrapAllPoslug}>
                <p className={css.servNamr}>{t("poslugIFive")}</p>
                <p className={css.servNamrDescript}>{t("poslugIFiveDecs")}</p>
              </div>
            </div>
          </div>
          <div className={css.wrapInfDSsa}>
            <div className={css.wrapServCirk}>
              <div className={css.circuitYu}></div>
              <div className={css.wrapAllPoslug}>
                <p className={css.servNamr}>{t("poslugISix")}</p>
                <p className={css.servNamrDescript}>{t("poslugISixDecs")}</p>
              </div>
            </div>
            <div className={css.wrapServCirk}>
              <div className={css.circuitYu}></div>
              <div className={css.wrapAllPoslug}>
                <p className={css.servNamr}>{t("poslugISeven")}</p>
                <p className={css.servNamrDescript}>{t("poslugISevenDecs")}</p>
              </div>
            </div>
            <div className={css.wrapServCirk}>
              <div className={css.circuitYu}></div>
              <div className={css.wrapAllPoslug}>
                <p className={css.servNamr}>{t("poslugIeight")}</p>
                <p className={css.servNamrDescript}>{t("poslugIeightDecs")}</p>
              </div>
            </div>
            <div className={css.wrapServCirk}>
              <div className={css.circuitYu}></div>
              <div className={css.wrapAllPoslug}>
                <p className={css.servNamr}>{t("poslugINine")}</p>
                <p className={css.servNamrDescript}>{t("poslugINineDecs")}</p>
              </div>
            </div>
          </div>
        </div>
        <p className={css.pInServicedO}>{t("whiNeedR")}</p>
      </div>
    </div>
  );
};
export default Servicec;
