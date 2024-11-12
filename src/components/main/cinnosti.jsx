// import css from "./style.module.css";

// import { useTranslation } from "react-i18next";
// const Cinnosti = () => {
//   const { t, i18n } = useTranslation();
//   return (
//     <div className={css.wrapCinnosts}>
//       <p className={css.pCinnosti}> {t("ourPoslug")}</p>
//       <div className={css.wrapPlf}>
//         <div className={css.wrapOpCinnosti}>
//           <p className={css.cinnostiMainP}>{t("secondBlockOneTitle")}</p>
//           <p className={css.cinnostDescP}>{t("secondBlockOneDesc")}</p>{" "}
//           <div className={css.detButton}>{t("detalnishe")}</div>
//         </div>
//         <div className={css.wrapOpCinnosti}>
//           <p className={css.cinnostiMainP}>{t("secondBlockTwoTitle")}</p>
//           <p className={css.cinnostDescP}>{t("secondBlockTwoDesc")}</p>
//           <div className={css.detButton}>{t("detalnishe")}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Cinnosti;
import css from "./style.module.css";
import { useTranslation } from "react-i18next";

const Cinnosti = () => {
  const { t } = useTranslation();
  return (
    <div className={css.wrapCinnosts}>
      <p className={css.pCinnosti}> {t("ourPoslug")}</p>
      <div className={css.wrapPlf}>
        <div className={css.wrapOpCinnosti}>
          <p className={css.cinnostiMainP}>{t("secondBlockOneTitle")}</p>
          <p className={css.cinnostDescP}>{t("secondBlockOneDesc")}</p>
          <a href="#section5" className={css.detButton}>
            {t("detalnishe")}
          </a>
        </div>
        <div className={css.wrapOpCinnosti}>
          <p className={css.cinnostiMainP}>{t("secondBlockTwoTitle")}</p>
          <p className={css.cinnostDescP}>{t("secondBlockTwoDesc")}</p>
          <a href="#section2" className={css.detButton}>
            {t("detalnishe")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cinnosti;
