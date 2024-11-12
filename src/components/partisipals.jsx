import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const Partisipals = () => {
  const options = {
    preset: "links",
    particles: {
      number: {
        value: window.innerWidth > 768 ? 30 : 15,
      },
      color: {
        value: "#ffffff", // Колір частинок
      },
    },
    background: {
      color: {
        value: "#0a254d", // Фоновий колір
      },
    },
  };

  const customInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return <Particles options={options} init={customInit} />;
};

export default Partisipals;
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadLinksPreset } from "tsparticles-preset-links";

// const Partisipals = () => {
//   const options = {
//     preset: "links",
//     particles: {
//       number: {
//         value: window.innerWidth > 768 ? 30 : 15,
//       },
//       color: {
//         value: "#0a254d", // Колір частинок
//       },
//       links: {
//         color: "#0a254d", // Колір ліній з'єднань між частинками
//         enable: true, // Включення ліній з'єднань
//         distance: 150, // Максимальна відстань для ліній з'єднань
//         opacity: 0.5, // Прозорість ліній з'єднань
//         width: 1, // Товщина ліній з'єднань
//       },
//     },
//     background: {
//       color: {
//         value: "#ffffff", // Фоновий колір
//       },
//     },
//   };

//   const customInit = useCallback(async (engine) => {
//     await loadLinksPreset(engine);
//   }, []);

//   return <Particles options={options} init={customInit} />;
// };

// export default Partisipals;
