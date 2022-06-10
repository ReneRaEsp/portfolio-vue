<template>
  <Formulario :id="id" />
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Formulario from "./../components/Formulario.vue";
export default {
  setup() {
    const route = useRoute();
    const id = ref(0);

    id.value = route.params.id;

    return { id };
  },
  components: {
    Formulario,
  },
};
</script>
