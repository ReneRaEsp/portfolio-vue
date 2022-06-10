<template>
  <div class="Portafolio">
    <div class="cont tituloCont">
      <h3 class="titulo">Portafolio</h3>
    </div>
    <div class="contProyectos">
      <div v-for="project in projects" :key="project.id">
        <Proyecto
          :id="project.id"
          :titulo="project.titulo"
          :descripcion="project.descripcion"
          :link="project.link"
          :codigo="project.codigo"
          :imagen="project.imagen"
          :isEdit="isEdit"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Proyecto from "./Proyecto.vue";
import useProject from "./../composables/useProject.js";

export default {
  setup() {
    const route = useRoute();
    const { projects, listProjects } = useProject();
    const isEdit = ref(false);
    
    if(route.path === "/admin"){
      isEdit.value = true;
    } else {
      isEdit.value = false;
    }

    listProjects();

    return {
      projects,
      isEdit
    };
  },
  components: {
    Proyecto
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
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
.parrafo {
  padding: 1rem 3.5rem 0rem 3.5rem;
  font-size: 0.67rem;
  font-weight: bold;
  color: rgba(174, 252, 226, 0.863);
}
.imagenP {
  border-radius: 1.2rem;
  width: 84%;
  height: 10rem;
}
//semantic classes
.Portafolio {
  width: 100%;
  height: auto;
  background: rgba(49, 49, 49, 0.534);
  padding-bottom: 2rem;
  .contProyectos {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 400px) {
  .titulo {
    font-size: 1.1rem;
  }
  .parrafo {
    font-size: 0.7rem;
  }
  .imagenP {
    height: 10rem;
  }
}
</style>
