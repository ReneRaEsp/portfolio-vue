<template>
  <form class="form">
    <div class="group">
      <label for="titulo"> Titulo: </label>
      <input v-model="titulo" name="titulo" type="text" />
    </div>
    <div class="group">
      <label for="descripcion"> Descripcion: </label>
      <textarea
        name="descripcion"
        id="descripcion"
        cols="20"
        rows="10"
        v-model="descripcion"
      ></textarea>
    </div>
    <div class="group">
      <label for="link"> Link: </label>
      <input v-model="link" name="link" type="text" />
    </div>
    <div class="group">
      <label for="codigo"> Codigo: </label>
      <input v-model="codigo" name="codigo" type="text" />
    </div>
    <div class="group">
      <label for="imagen"> Imagen: </label>
      <input v-model="imagen" name="imagen" type="text" />
    </div>
    <div class="group">
      <router-link to="/admin" class="btn btn1">Volver</router-link>
      <div @click="onClick" class="btn">Guardar</div>
    </div>
  </form>
</template>

<script>
import useProject from "./../composables/useProject.js";

export default {
  setup(props) {
    const {
      titulo,
      descripcion,
      link,
      codigo,
      imagen,
      findProjectById,
      addProject,
      updateProject,
    } = useProject();

    const onClick = () => {
      if (props.id !== 0) {
        updateProject(props.id);
      } else {
        addProject();
      }
    };

    if (props.id !== 0) {
      findProjectById(props.id);
    }

    return {
      titulo,
      descripcion,
      link,
      codigo,
      imagen,
      onClick,
    };
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin: auto;
  margin-top: 2rem;
  width: 50%;
  padding: 2rem 1rem 1rem 1rem;
  background: rgba(13, 13, 14, 0.9);
  border-radius: 1rem;
  border: solid 3px rgba(43, 213, 84, 0.9);
  .group {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    label {
      font-weight: 600;
      color: rgba(43, 213, 84, 0.9);
    }
    input {
      padding: 0.1rem;
      color: rgba(243, 213, 224, 0.72);
      background: rgba(23, 23, 24, 0.4);
      border: solid 3px rgba(23, 113, 54, 0.9);
      border-radius: 0.2rem;
      font-weight: 600;
    }
    textarea {
      padding: 0.8rem;
      color: rgba(243, 213, 224, 0.9);
      background: rgba(23, 23, 24, 0.4);
      border: solid 3px rgba(23, 113, 54, 0.9);
      border-radius: 0.2rem;
      font-weight: 600;
      min-width: 10rem;
      min-height: 8rem;
      max-width: 10rem;
      max-height: 8rem;
    }
    .btn {
      padding: 0.6rem 0.75rem;
      background: rgba(23, 113, 54, 0.1);
      color: rgba(23, 113, 54, 0.9);
      border: solid 2px rgba(13, 13, 14, 0.9);
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: 1s;
      text-decoration: none;
      &:hover {
        opacity: 0.5;
        border: solid 2px rgba(43, 213, 114, 0.9);
        border-radius: 1rem;
      }
    }
  }
}
</style>
