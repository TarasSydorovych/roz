import css from "./style.module.css";
import fromLogo from "../../img/logoNew.png";
import { useEffect, useRef, useState } from "react";
import sendEmail from "./sendMessage";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import logoSvg from "../../img/larinVetSvg.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ReactSVG } from "react-svg";
import { useTranslation } from "react-i18next";
import Partisipals from "../partisipals";
import LanguageSwitcher from "./languageSwitcher";
import rozetka from "../../img/new/rozetka.png";
import epick from "../../img/new/epick.png";
import prom from "../../img/new/prom.png";
import loggoForKd from "../../img/fewewe.png";
import Popup from "./popup";
export default function FirstBlock() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const formRef = useRef(null);
  const [phonecheck, setPhonecheck] = useState(false);
  const [namecheck, setNamecheck] = useState(false);
  const [burgerCLick, setBurgerCLick] = useState(false);
  const [clickCH, setClickCH] = useState(false);
  const [validFrom, setValidFrom] = useState(false);
  const [clickCHErr, setClickCHErr] = useState("Fill in all fields");
  const [phonecheckErr, setPhonecheckErr] = useState(
    "Your phone number is incorrect"
  );
  const [namecheckErr, setNamecheckErr] = useState(
    "The name field cannot be empty"
  );
  const [emailcheckErr, setEmailcheckErr] = useState(
    "The phone field cannot be empty"
  );
  const [windowDimensions, setWindowDimensions] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1025) {
        setWindowDimensions(false);
      } else {
        setWindowDimensions(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleSubmit = (e) => {
    sendEmail(formRef, e);
    setName("");
    setPhone("");
    setEmail("");
  };
  const openBurgerMenu = () => {
    setBurgerCLick(true);
  };
  const closeBurgerMenu = () => {
    setBurgerCLick(false);
  };
  const blurHandle = (e) => {
    switch (e.target.name) {
      case "user_name":
        setNamecheck(true);
        break;
      case "Phone":
        setPhonecheck(true);
        break;
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNamecheckErr("The name is too short.");
      if (!e.target.value) {
        setNamecheckErr("The name field cannot be empty");
      }
    } else {
      setNamecheckErr("");
    }
  };
  const namePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
    const num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (
      !value ||
      (value && value.match(/\d/g) && value.match(/\d/g).length < 10)
    ) {
      setPhonecheckErr(`"Your phone number is incorrect"`);
    } else {
      setPhonecheckErr("");
    }
  };
  useEffect(() => {
    if (phonecheckErr || namecheckErr) {
      setValidFrom(false);

      setClickCHErr("Заповніть усі поля");
    } else {
      setValidFrom(true);
      setClickCHErr("");
    }
  }, [phonecheckErr, namecheckErr, emailcheckErr]);
  return (
    <>
      {" "}
      <Partisipals />
      <header id="section1" className={css.wrapHeader}>
        <div className={css.wrapLogo}>
          <a
            href="/"
            aria-label="Головна сторінка"
            className={css.logoInHeader}
          >
            <img className={css.loggoForKd} src={loggoForKd} alt="logo" />
          </a>
        </div>
        {burgerCLick && (
          <div className={css.burgerMenuWrap}>
            <AiOutlineClose
              onClick={closeBurgerMenu}
              className={css.closeBurgerMenu}
            />
            <ul className={css.listStyle}>
              <li className={css.liForNav}>
                <a href="#section1" className={css.liForNav}>
                  {t("main")}
                </a>
              </li>{" "}
              <li className={css.liForNav}>
                <a href="#section3" className={css.liForNav}>
                  {t("about")}
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section5" className={css.liForNav}>
                  {t("tovarPo")}
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section2" className={css.liForNav}>
                  {t("registerK")}
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section4" className={css.liForNav}>
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>
        )}
        {!windowDimensions && (
          <RxHamburgerMenu
            onClick={openBurgerMenu}
            className={css.rxHamburgerMenu}
          />
        )}
        {windowDimensions && (
          <nav className={css.navigation}>
            <ul className={css.navigationUL}>
              <li className={css.liForNav}>
                <a href="#section1" className={css.liForNav}>
                  {t("main")}
                </a>
              </li>{" "}
              <li className={css.liForNav}>
                <a href="#section3" className={css.liForNav}>
                  {t("about")}
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section5" className={css.liForNav}>
                  {t("tovarPo")}
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section2" className={css.liForNav}>
                  {t("registerK")}
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section4" className={css.liForNav}>
                  {t("contact")}
                </a>
              </li>
            </ul>
          </nav>
        )}
        <LanguageSwitcher />{" "}
        <div className={css.wrapSocialButton} onClick={openPopup}>
          {" "}
          {t("connect")}
        </div>
        {/* 
        <a href="tel:+12677807627" className={css.nubberWrap}>
          +1(267) 780-76-27
        </a> */}{" "}
      </header>{" "}
      <div className={css.wrapFirstBlock}>
        <div className={css.wrapformWithT}>
          <div className={css.wrapOpd}>
            <div className={css.relativeBlockIn}>
              <div className={css.wrapWhite}>
                <img className={css.imageInBlock} src={rozetka} alt="rozetka" />
              </div>
              <div className={css.wrapWhiteEpic}>
                <img className={css.imageInBlock} src={epick} alt="rozetka" />
              </div>
              <div className={css.wrapWhiteProm}>
                <img className={css.imageInBlock} src={prom} alt="rozetka" />
              </div>
            </div>
          </div>
          <div className={css.wrapMainText}>
            <h1 className={css.dispServP}>{t("mainH1")}</h1>
            <p className={css.descTio}>{t("mainP")}</p>
            <div className={css.popUpButton} onClick={openPopup}>
              {t("connect")}
            </div>
            {isPopupOpen && <Popup onClose={closePopup} t={t} />}
          </div>
        </div>
      </div>
    </>
  );
}
