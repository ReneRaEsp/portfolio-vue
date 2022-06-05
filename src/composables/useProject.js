import { ref } from "vue";

const useProject = () => {
  const projects = ref([
    {
      id: 1,
      titulo: "SeedStore",
      descripcion:
        "Plantilla web para tienda online de venta de semillas desarrollada en vanilla javascript",
      link: "https://reneraesp.github.io/pseedstore/index.html",
      codigo: "https://github.com/ReneRaEsp/vanilla-js-seedstore",
      imagen: "seedstore.png",
    },
    {
      id: 2,
      titulo: "Pokémon Game",
      descripcion: "hdhdhdhdhdhd djhdh dhd hdbd hshshhss hdd hs  shdbhdjj",
      link: " https://github.com/ReneRaEsp/vanilla-js-seedstore",
      codigo: "#",
      imagen: "pokemon.png",
    },
    {
      id: 3,
      titulo: "Si ó No App",
      descripcion:
        "Aplicacion desarrollada en react la cual consume un api publica de gifts",
      link: "https://github.com/ReneRaEsp/vanilla-js-seedstore",
      codigo: "#",
      imagen: "siono.png",
    },
  ]);

  return {
    projects,
  };
};

export default useProject;
