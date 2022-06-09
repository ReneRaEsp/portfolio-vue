<template>
  <div class="admin">
    <div class="cont">
      <h2 class="titulo">Administracion de portafolio</h2>
    </div>
    <div class="cont">
      <router-link class="btn" to="/agregar">
        Agregar Nuevo Proyecto
      </router-link>
    </div>
    <div class="cont">
      <Portafolio />
    </div>
  </div>
</template>
<script>
import Portafolio from "./../components/Portafolio.vue";
export default {
  setup() {

  },
  components: {
    Portafolio
  }
}
</script>
<style lang="scss" scoped>
//Utility classes
.btn {
  text-decoration: none;
  background: rgba(233, 233, 244, 0.9);
  padding: 1rem;
  font-weight: 700;
  border-radius: 1.2rem;
  color: rgba(33, 133, 44, 0.9);
  transition: .7s;
  &:hover {
    color: rgba(233, 233, 244, 0.9);
    background: rgba(33, 133, 44, 0.9);
  }
}

//Semantic classes
.admin {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .cont {
    display: flex;
    justify-content: center;
    padding: 2rem 0rem;
    .titulo {
      font-weight: 600;
      font-size: 1.2rem;
      color: rgba(233, 233, 244, 0.9);
    }
  }
}
</style>
