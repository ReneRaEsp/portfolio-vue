<template>
  <div class="home">
    <Seccion1 />
    <Seccion2 />
    <Tecnologias />
    <Portafolio />
    <Contacto />
  </div>

</template>

<script>
import Seccion1 from "../components/Seccion1.vue";
import Seccion2 from "../components/Seccion2.vue";
import Tecnologias from "../components/Tecnologias.vue";
import Portafolio from "../components/Portafolio.vue";
import Contacto from "../components/Contacto.vue";

export default {
  components: {
    Seccion1,
    Seccion2,
    Tecnologias,
    Portafolio,
    Contacto,
  },
};
</script>

