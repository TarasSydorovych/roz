// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";
// import css from "./style.module.css";
// import { useTranslation } from "react-i18next";
// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const { t, i18n } = useTranslation();
//   const [message, setMessage] = useState("");
//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (!phone) {
//       Swal.fire({
//         icon: "warning",
//         title: "Будь ласка, введіть телефон",
//       });
//       return;
//     }

//     const SERVICE_ID = "service_rjxraix";
//     const TEMPLATE_ID = "template_ag4znmc";
//     const USER_ID = "A50ETfNy7t78LNfCu";

//     const templateParams = {
//       user_name: name,
//       user_email: email,
//       Phone: phone,

//       message,
//     };

//     emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
//       (result) => {
//         Swal.fire({
//           icon: "success",
//           title: "Повідомлення успішно надіслано",
//         });
//       },
//       (error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Ой, щось пішло не так",
//           text: error.text,
//         });
//       }
//     );

//     setName("");
//     setEmail("");
//     setPhone("");

//     setMessage("");
//   };

//   return (
//     <div className={css.wrapFormInD}>
//       <div className={css.wrapFroms}>
//         <p className={css.turkneyP}>{t("contactUsO")}</p>

//         <div className={css.wrapFormInputs}>
//           <div className={css.wrapInputsData}>
//             <input
//               className={css.inputsForm}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Імʼя"
//             />
//             <input
//               className={css.inputsForm}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//             />
//             <input
//               className={css.inputsForm}
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Телефон"
//             />
//           </div>
//           <div className={css.twoFormWrap}>
//             <textarea
//               className={css.textArreaMessage}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Повідомлення"
//             />
//             <div className={css.buttonSend} onClick={sendEmail}>
//               {t("sendJf")}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
import { useState } from "react";
import Swal from "sweetalert2";
import css from "./style.module.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const sendToKeyCRM = async (e) => {
    e.preventDefault();

    if (!phone) {
      Swal.fire({
        icon: "warning",
        title: "Будь ласка, введіть телефон",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/send-to-keycrm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          pipeline_id: 1, // Жорстко заданий pipeline_id для тестування
        }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || "Помилка при відправці заявки");
      }

      Swal.fire({
        icon: "success",
        title: "Повідомлення успішно надіслано",
      });

      // Очистка полів після успішної відправки
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ой, щось пішло не так",
        text:
          error.message || "Помилка при відправці заявки. Спробуйте ще раз.",
      });
      console.error("Помилка при відправці заявки:", error);
    }
  };

  return (
    <div className={css.wrapFormInD}>
      <div className={css.wrapFroms}>
        <p className={css.turkneyP}>{t("contactUsO")}</p>

        <div className={css.wrapFormInputs}>
          <div className={css.wrapInputsData}>
            <input
              className={css.inputsForm}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Імʼя"
            />
            <input
              className={css.inputsForm}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className={css.inputsForm}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Телефон"
            />
          </div>
          <div className={css.twoFormWrap}>
            <textarea
              className={css.textArreaMessage}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Повідомлення"
            />
            <div className={css.buttonSend} onClick={sendToKeyCRM}>
              {t("sendJf")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
