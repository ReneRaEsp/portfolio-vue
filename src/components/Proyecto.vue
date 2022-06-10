<template>
  <div class="card">
    <img
      class="imagenP"
      :src="require('./../assets/img/' + imagen)"
      alt="proyecto portafolio René Ramírez"
    />
    <h3 class="titulo">{{ titulo }}</h3>
    <p class="parrafo">
      {{ descripcion }}
    </p>
    <div class="contBotones">
      <router-link class="btn btn1" v-if="isEdit" :to="editRoute">
        Editar
      </router-link>
      <a style="display: none" target="_BLANK" :href="codigo" class="btn btn1"
        >Código</a
      >
      <a target="_BLANK" :href="link" class="btn">Deploy</a>
      <div v-if="isEdit" class="btn eliminar" @click="onClick()">Eliminar</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useProject from "./../composables/useProject.js";

export default {
  setup(props) {
    const { removeProject } = useProject();
    const editRoute = ref("");

    editRoute.value = "/editar/" + props.id;

    const onClick = () => {
      removeProject(props.id);
    };

    return {
      editRoute,
      onClick,
    };
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
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
    isEdit: {
      type: Boolean,
      default: false,
    },
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
  width: 18rem;
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
      color: rgb(250, 215, 212);
      border-radius: 1rem;
      text-decoration: none;
      transition: 1s ease;
      &:hover {
        background: rgba(209, 255, 246, 0.747);
        color: rgb(25, 45, 22);
        cursor: pointer;
      }
    }
    .btn1 {
      background: rgba(33, 205, 91, 0.185);
      color: rgba(174, 252, 226, 0.863);
    }
    .eliminar {
      background: rgba(174, 82, 76, 0.863);
      color: rgb(250, 215, 212);
    }
  }
}
@media screen and (max-width: 400px) {
  .card {
    width: 100%;
    .imagenP {
      height: 9rem;
    }
  }
}
</style>
