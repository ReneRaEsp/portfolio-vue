import { ref } from "vue";

const useProject = () => {
  const projects = ref([
    {
      id: 1,
      titulo: "SeedStore",
      descripcion: "Plantilla web para tienda online de venta de semillas desarrollada en vanilla javascript",
      link: "https://reneraesp.github.io/pseedstore/index.html",
      codigo: "https://github.com/ReneRaEsp/vanilla-js-seedstore",
      imagen: "seedstore.png",
    },
    {
      id: 2,
      titulo: "Pokemon Game",
      descripcion: "hdhdhdhdhdhd djhdh dhd hdbd hshshhss hdd hs  shdbhdjj",
      link: " https://github.com/ReneRaEsp/vanilla-js-seedstore",
      codigo: "#",
      imagen: "pokemon.png",
    },
  ]);

  return {
    projects,
  };
};

export default useProject;
