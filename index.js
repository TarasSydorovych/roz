// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const PORT = 4000;

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

// app.use(express.json());

// app.post("/send-to-keycrm", async (req, res) => {
//   const {
//     title,
//     manager_comment,
//     pipeline_id = 1, // Значення за замовчуванням, якщо pipeline_id не передано
//     name,
//     email,
//     phone,
//     utm_source,
//     utm_medium,
//     utm_campaign,
//     utm_term,
//     utm_content,
//     product_name,
//     product_sku,
//     product_quantity,
//     product_price,
//     product_url,
//     payment_method_id,
//     payment_method,
//     amount,
//     description,
//     payment_date,
//     status,
//     custom_value1,
//     custom_value2,
//   } = req.body;

//   // Перевірка обов'язкових полів
//   if (!name || !phone) {
//     return res.status(400).json({ error: "Name and phone are required" });
//   }

//   // Очищення поля phone (залишаємо тільки цифри)
//   const sanitizedPhone = phone.replace(/\D/g, "");

//   if (sanitizedPhone === "") {
//     return res
//       .status(400)
//       .json({ error: "Phone number must contain only digits" });
//   }

//   // Формування даних для відправки в KeyCRM
//   const data = {
//     title: title || `Заявка від ${name}`,

//     manager_comment: manager_comment || "",
//     manager_id: 1,
//     pipeline_id,
//     contact: {
//       full_name: name,
//       email: email || "",
//       phone: sanitizedPhone,
//     },
//     utm_source,
//     utm_medium,
//     utm_campaign,
//     utm_term,
//     utm_content,
//   };

//   try {
//     const response = await axios.post(
//       "https://openapi.keycrm.app/v1/pipelines/cards",
//       data,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.KEYCRM_API_TOKEN}`,
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Cache-Control": "no-cache",
//           Pragma: "no-cache",
//         },
//       }
//     );

//     res
//       .status(201)
//       .json({ message: "Заявка успішно відправлена", data: response.data });
//   } catch (error) {
//     console.error(
//       "Помилка при відправці заявки:",
//       error.response ? error.response.data : error.message
//     );
//     res.status(500).json({ error: "Помилка при відправці заявки" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Сервер запущено на http://localhost:${PORT}`);
// });
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.post("/send-to-keycrm", async (req, res) => {
  const {
    title,
    manager_comment,
    pipeline_id = 1, // Значення за замовчуванням, якщо pipeline_id не передано
    name,
    email,
    phone,
    message, // Додано поле message
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    product_name,
    product_sku,
    product_quantity,
    product_price,
    product_url,
    payment_method_id,
    payment_method,
    amount,
    description,
    payment_date,
    status,
    custom_value1,
    custom_value2,
  } = req.body;

  // Перевірка обов'язкових полів
  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  // Очищення поля phone (залишаємо тільки цифри)
  const sanitizedPhone = phone.replace(/\D/g, "");

  if (sanitizedPhone === "") {
    return res
      .status(400)
      .json({ error: "Phone number must contain only digits" });
  }

  // Формування даних для відправки в KeyCRM
  const data = {
    title: title || `Заявка від ${name}`,
    manager_comment: message || "", // Додано message в коментар менеджера
    manager_id: 1,
    pipeline_id,
    contact: {
      full_name: name,
      email: email || "",
      phone: sanitizedPhone,
    },
    source_id: 1,
  };

  try {
    const response = await axios.post(
      "https://openapi.keycrm.app/v1/pipelines/cards",
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.KEYCRM_API_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      }
    );

    res
      .status(201)
      .json({ message: "Заявка успішно відправлена", data: response.data });
  } catch (error) {
    console.error(
      "Помилка при відправці заявки:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Помилка при відправці заявки" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
