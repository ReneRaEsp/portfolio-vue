<template>
  <div id="contenedorApp">
    <Seccion1 />
    <Seccion2 />
    <Tecnologias />    
    <Portafolio />
    <Contacto />
  </div>
</template>

<script>
import Seccion1 from "./components/Seccion1.vue";
import Seccion2 from "./components/Seccion2.vue";
import Tecnologias from "./components/Tecnologias.vue";
import Portafolio from "./components/Portafolio.vue";
import Contacto from "./components/Contacto.vue";

export default {
  components: {
    Seccion1, Seccion2, Tecnologias, Portafolio, Contacto
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body {
  background: rgb(3, 24, 8);
  //font-size: 13px;
}
#contenedorApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(3, 24, 8);
  width: 100%;
  height: 100%;
  //font-size: 13px;
}
</style>
