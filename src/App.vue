<template>
  <div id="contenedorApp">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
};
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
