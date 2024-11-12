import { useEffect, useState } from "react";
import css from "./style.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  const [windowDimensions, setWindowDimensions] = useState(false);
  const [burgerCLick, setBurgerCLick] = useState(false);
  const openBurgerMenu = () => {
    setBurgerCLick(true);
  };
  const closeBurgerMenu = () => {
    setBurgerCLick(false);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setWindowDimensions(false);
      } else {
        setWindowDimensions(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <footer className={css.footerWrapL}>
      <p className={css.pinFooterD}>SellEasy © 2024</p>
    </footer>
  );
};
export default Footer;
