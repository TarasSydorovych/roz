import css from "./style.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LuTimer } from "react-icons/lu";

const Address = () => {
  return (
    <div className={css.wrapAddressKi} id="section4">
      <div className={css.oneAddressBlockWrap}>
        <div className={css.wrpaFirtLine}>
          <FaPhoneFlip className={css.locationIconK} />
          <p className={css.nameNearLoc}>Телефон:</p>
        </div>
        <a href="tel:+380671111111" className={css.pInAddrecDesc}>
          +380-67-111-11-11
        </a>
      </div>
      <div className={css.oneAddressBlockWrap}>
        <div className={css.wrpaFirtLine}>
          <MdEmail className={css.locationIconK} />
          <p className={css.nameNearLoc}>Email:</p>
        </div>
        <a href="mailto:sellease.team@gmail.com" className={css.pInAddrecDesc}>
          sellease.team@gmail.com
        </a>
      </div>
      <div className={css.oneAddressBlockWrap}>
        <div className={css.wrpaFirtLine}>
          <LuTimer className={css.locationIconK} />
          <p className={css.nameNearLoc}>Графік:</p>
        </div>
        <p className={css.pInAddrecDesc}>пн-пт 11:00 - 19:00</p>
        <p className={css.pInAddrecDesc}>сб-нд 11:00 - 17:00</p>
      </div>
    </div>
  );
};
export default Address;
