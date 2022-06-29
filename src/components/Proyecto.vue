<template>
  <div class="card">
    <img
      class="imagenP"
      :src="require('./../assets/img/' + imagen)"
      alt="proyecto portafolio René Ramírez"
    />
    <h3 class="titulo">{{ titulo }} <span v-if="titulo == 'Bingo Game'" style="color: cyan;">(Más Reciente)</span></h3>
    <p class="parrafo">
      {{ descripcion }}
    </p>
    <div class="contBotones">
      <a
        style="display: none"
        target="_BLANK"
        :href="codigo"
        class="btn btn1 hidden"
        >Código</a
      >
      <a target="_BLANK" :href="link" class="btn">Deploy</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: "",
    },
    descripcion: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    codigo: {
      type: String,
      default: "",
    },
    imagen: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
//utility classes

.cont {
  display: flex;
  justify-content: center;
}
.tituloCont {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.titulo {
  font-weight: bold;
  color: rgba(230, 227, 227, 0.863);
  font-size: 1rem;
  margin-top: 0.5rem;
}
.parrafo {
  padding: 1rem 3.5rem 0rem 3.5rem;
  font-size: 0.67rem;
  font-weight: bold;
  color: rgba(174, 252, 226, 0.863);
}
.card {
  margin-right: 2rem;
  width: 19rem;
  height: auto;
  background: rgba(5, 64, 92, 0.534);
  margin-top: 1rem;
  padding-top: 1rem;
  border-radius: 2.5rem;
}
.imagenP {
  border-radius: 0rem;
  width: 100%;
  height: 10rem;
}
.hidden {
  display: none;
}
.card {
  .contBotones {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 6rem;
      height: 2rem;
      font-size: 1rem;
      font-weight: bold;
      background: rgba(33, 105, 90, 0.747);
      color: rgb(50, 115, 212);
      border: 2px solid rgb(50, 115, 212);
      border-radius: 1rem;
      text-decoration: none;
      transition: 1s ease;
      &:hover {
        background: rgba(209, 255, 246, 0.747);
        cursor: pointer;
      }
    }
    .btn1 {
      background: rgba(33, 105, 91, 0.185);
    }
  }
}
@media screen and (max-width: 400px) {
  .card {
    width: 100%;
  }
  .imagenP {
    border-radius: 0rem;
    width: 100%;
    height: 8.6rem;
  }
}
</style>
