import { ref } from "vue";

const useProject = () => {
  const projects = ref([
    {
      id: 1,
      titulo: "Juego de Pokemon",
      descripcion: "hdhdhdhdhdhd djhdh dhd hdbd hshshhss hdd hs  shdbhdjj",
      link: "https://reneraesp.github.io/ppokemon/index.html",
      codigo: "#",
      imagen: "cuatro.png",
    },
    {
      id: 2,
      titulo: "SeedStore",
      descripcion: "hdhdhdhdhdhd djhdh dhd hdbd hshshhss hdd hs  shdbhdjj",
      link: " https://github.com/ReneRaEsp/vanilla-js-seedstore",
      codigo: "#",
      imagen: "presupuesto.png",
    },
    {
      id: 3,
      titulo: "Presupuesto",
      descripcion: "hdhdhdhdhdhd djhdh dhd hdbd hshshhss hdd hs  shdbhdjj",
      link: " https://github.com/ReneRaEsp/vanilla-js-seedstore",
      codigo: "#",
      imagen: "presupuesto.png",
    },
  ]);

  return {
    projects,
  };
};

export default useProject;
