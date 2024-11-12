import React, { useState } from "react";
import css from "./chat.module.css";
import {
  AiTwotonePhone,
  AiOutlineClose,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { BsFillPhoneFill } from "react-icons/bs";
import { FaViber, FaTelegramPlane } from "react-icons/fa";
export default function Chat() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <section
      className={`${css.sectionWrap} ${expanded ? css.expanded : ""}`}
      onClick={toggleExpansion}
    >
      {!expanded && <AiTwotonePhone className={css.bsFillPhoneVibrateFill} />}
      {expanded && (
        <>
          <a href="viber://chat?number=+380671147428">
            <FaViber className={css.faViber} />
          </a>

          <a href="https://t.me/LarinVet" target="_blanck">
            <FaTelegramPlane className={css.telegram} />
          </a>
          <a href="tel:+380671147428">
            <AiTwotonePhone className={css.faWhat} />
          </a>
          <div className={css.wrapX}>
            <AiOutlineClose className={css.aiOutlineClose} />
          </div>
        </>
      )}
    </section>
  );
}
