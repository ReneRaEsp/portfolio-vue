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
      titulo: "Compras, ventas, almacen, vue node",
      descripcion:
        "Single Page Aplication de gestion de almacen, compras y ventas desarrollado en vue.js, node, express y mongo",
      link: "https://compra-ventas-vue-node.herokuapp.com/",
      codigo: "https://github.com/ReneRaEsp/mevn-frontend-dbsistema",
      imagen: "mevncompras.png",
    },

    {
      id: 3,
      titulo: "Pokémon Game",
      descripcion:
        "Juego de pokemon desarrollado en Vue.js el cual consume el api oficial de pokemon",
      link: " https://github.com/ReneRaEsp/vanilla-js-seedstore",
      codigo: "#",
      imagen: "pokemon.png",
    },
    {
      id: 4,
      titulo: "Si ó No App",
      descripcion:
        "Aplicacion desarrollada en Vue la cual consume un api publica de gifts",
      link: "https://github.com/ReneRaEsp/vanilla-js-seedstore",
      codigo: "#",
      imagen: "siono.png",
    },
    {
      id: 5,
      titulo: "Veterinario Citas",
      descripcion:
        "Página de reserva de citas veterinario desarrollada en Vue.js y consumiendo un api desarrollada en node.js + express",
      link: "https://warm-island-73911.herokuapp.com/#/",
      codigo: "#",
      imagen: "veterinaria.png",
    },
    {
      id: 6,
      titulo: "Todo List",
      descripcion: "Todo List desarrollada en Javascript Vanilla",
      link: "https://reneraesp.github.io/ptodo/",
      codigo: "",
      imagen: "todo.png",
    },
    {
      id: 7,
      titulo: "Café CloverCoffe",
      descripcion:
        "Página web estática desarrollada con efecto parallax desarrollada usando jquery",
      link: "https://reneraesp.github.io/pcafe/index.html",
      codigo: "",
      imagen: "cafe.png",
    },
    {
      id: 8,
      titulo: "PHP CRUD MVC",
      descripcion:
        "Aplicacion crud mvc de gestion de empleados desarrollada en php y base de datos MySQL",
      link: "https://php-crud-mvc.herokuapp.com/",
      codigo: "",
      imagen: "phpmvc.png",
    },
    {
      id: 9,
      titulo: "Presupuesto App",
      descripcion:
        "Aplicacion de calculo de presupuesto desarrollada en angular",
      link: "https://reneraesp.github.io/ppresupuesto/",
      codigo: "",
      imagen: "presupuestoA.png",
    },
    {
      id: 10,
      titulo: "Libros Spring",
      descripcion:
        "Proyecto web desarrollado en Java utilizando Spring MVC incluye manejo de sesion e internalizacion",
      link: "https://immense-bayou-16426.herokuapp.com/",
      codigo: "",
      imagen: "librospring.png",
    },
    {
      id: 11,
      titulo: "Angular PIGC",
      descripcion:
        "Pagina de calculo de indice de grasa corporal desarrollada en Angular",
      link: "https://reneraesp.github.io/pigc/index.html",
      codigo: "",
      imagen: "pigc.png",
    },
    {
      id: 12,
      titulo: "Breaking Bad Frases",
      descripcion: "Pagina desarrollada en react la cual consume api rest de frases de breaking bad",
      link: "https://reneraesp.github.io/preact/breakingbad-frases/index.html",
      codigo: "",
      imagen: "bb.png",
    },
  ]);

  return {
    projects,
  };
};

export default useProject;
