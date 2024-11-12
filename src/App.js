import logo from "./logo.svg";
import css from "./components/main/style.module.css";
import FirstBlock from "./components/main/firstBlock";
import About from "./components/main/about";
import Cinnosti from "./components/main/cinnosti";
import Servicec from "./components/main/servicec";
import GoogleMapComponent from "./components/main/googleMapComponents";
import Address from "./components/main/address";

import ContactForm from "./components/main/contactForm";
import Footer from "./components/main/footer";
import Chat from "./components/chat/chat";

import { I18nextProvider, useTranslation } from "react-i18next";
import BlockNew from "./components/main/blockNew";
import ChomyVagluvo from "./components/main/chomyVagluvo";
import EtapuReg from "./components/main/etapuReg";
import LastReg from "./components/main/lastReg";
import BlockRozetcaFirst from "./components/main/blockRozetcaFirst";
import Popup from "./components/main/popup";
import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <>
      {" "}
      <I18nextProvider i18n={i18n}>
        {" "}
        <FirstBlock />
        <div className={css.wrapWithoutP} id="section3">
          <Cinnosti />
          <BlockNew />

          <ChomyVagluvo />
          <div className={css.popUpButton} onClick={openPopup}>
            {t("connect")}
          </div>
          <EtapuReg openPopup={openPopup} />
          <LastReg />
          <BlockRozetcaFirst openPopup={openPopup} />
          <div className={css.popUpButton} onClick={openPopup}>
            {t("connect")}
          </div>
          <div className={css.proslcS}></div>
          <Servicec />
          <ContactForm />
          <Address />
          {isPopupOpen && <Popup onClose={closePopup} t={t} />}
          {/* <Chat /> */}
          <Footer />
        </div>{" "}
      </I18nextProvider>
    </>
  );
}

export default App;
