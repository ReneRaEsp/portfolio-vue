<template>
  <div id="contenedorApp">
    <Seccion1 />
  </div>
</template>

<script>
import Seccion1 from "./components/Seccion1.vue"
export default {
  components: {
Seccion1
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body {
  background: rgb(3, 24, 8);
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
}
</style>
