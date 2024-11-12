// import { useState } from "react";
// import css from "./popup.module.css";

// export default function Popup({ onClose, t }) {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("http://localhost:4000/send-to-keycrm", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           phone,
//           pipeline_id: 1, // Жорстко заданий pipeline_id для тестування
//         }),
//       });

//       if (!response.ok) {
//         const responseData = await response.json();
//         throw new Error(responseData.error || "Помилка при відправці заявки");
//       }

//       console.log("Заявка успішно відправлена");
//       onClose();
//     } catch (error) {
//       setError(
//         error.message || "Помилка при відправці заявки. Спробуйте ще раз."
//       );
//       console.error("Помилка при відправці заявки:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={css.popupOverlay}>
//       <div className={css.popupContent}>
//         <button className={css.closeButton} onClick={onClose}>
//           &times;
//         </button>
//         <h2>Заповніть форму</h2>
//         {error && <p className={css.error}>{error}</p>}
//         <form onSubmit={handleSubmit} className={css.form}>
//           <input
//             type="text"
//             placeholder="Ваше ім'я"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className={css.inputField}
//           />
//           <input
//             type="tel"
//             placeholder="Ваш телефон"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//             className={css.inputField}
//           />
//           <button type="submit" className={css.submitButton} disabled={loading}>
//             {loading ? "Відправка..." : t("sendJf")}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import Swal from "sweetalert2";
import css from "./popup.module.css";

export default function Popup({ onClose, t }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/send-to-keycrm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          pipeline_id: 1, // Жорстко заданий pipeline_id для тестування
        }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || "Помилка при відправці заявки");
      }

      // Відображення успішного повідомлення за допомогою Swal.fire
      Swal.fire({
        icon: "success",
        title: "Заявка успішно відправлена",
        showConfirmButton: false,
        timer: 1500,
      });

      onClose();
    } catch (error) {
      setError(
        error.message || "Помилка при відправці заявки. Спробуйте ще раз."
      );
      console.error("Помилка при відправці заявки:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.popupOverlay}>
      <div className={css.popupContent}>
        <button className={css.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Заповніть форму</h2>
        {error && <p className={css.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            placeholder="Ваше ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={css.inputField}
          />
          <input
            type="tel"
            placeholder="Ваш телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={css.inputField}
          />
          <button type="submit" className={css.submitButton} disabled={loading}>
            {loading ? "Відправка..." : t("sendJf")}
          </button>
        </form>
      </div>
    </div>
  );
}
