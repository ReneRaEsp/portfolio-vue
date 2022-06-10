import { ref } from "vue";
import axios from "axios";
import projects from "./../helper/projects";

const useProject = () => {
  const titulo = ref("");
  const descripcion = ref("");
  const link = ref("");
  const codigo = ref("");
  const imagen = ref("");

  const listProjects = () => {
    axios
      .get("http://127.0.0.1:8000/api/proyectos")
      .then((res) => {
        projects.value = res.data;
      })
      .catch(console.log);
  };

  const addProject = () => {
    axios
      .post("http://127.0.0.1:8000/api/proyectos", {
        titulo: titulo.value,
        descripcion: descripcion.value,
        link: link.value,
        codigo: codigo.value,
        imagen: imagen.value,
      })
      .then((res) => {
        alert(`Proyecto: "${res.data.titulo}" agregado exitosamente`);
        cleanPlaceholder();
      })
      .catch(console.log);
  };

  const findProjectById = (id) => {
    const url = "http://127.0.0.1:8000/api/proyectos/" + id;
    axios
      .get(url)
      .then((res) => {
        titulo.value = res.data.titulo;
        descripcion.value = res.data.descripcion;
        link.value = res.data.link;
        codigo.value = res.data.codigo;
        imagen.value = res.data.imagen;
      })
      .catch(console.log);
  };

  const updateProject = (id) => {
    const url = "http://127.0.0.1:8000/api/proyectos/" + id;
    axios
      .put(url, {
        titulo: titulo.value,
        descripcion: descripcion.value,
        link: link.value,
        codigo: codigo.value,
        imagen: imagen.value,
      })
      .then((res) => {
        alert(`Proyecto: "${res.data.titulo}" editado exitosamente`);
      })
      .catch(console.log);
  };

  const removeProject = (id) => {
    const url = "http://127.0.0.1:8000/api/proyectos/" + id;
    if (confirm("Estas seguro de que quieres eliminar el proyecto?")) {
      axios
        .delete(url)
        .then((res) => {
          alert(
            `El proyecto "${res.data.titulo}" ha sido eliminado exitosamente`
          );
          listProjects();
        })
        .catch(console.log);
    } else {
      alert("Proyecto no eliminado");
    }
  };

  const cleanPlaceholder = () => {
    titulo.value = "";
    descripcion.value = "";
    link.value = "";
    codigo.value = "";
    imagen.value = "";
  }

  return {
    titulo,
    descripcion,
    link,
    codigo,
    imagen,
    projects,
    listProjects,
    addProject,
    findProjectById,
    updateProject,
    removeProject,
  };
};

export default useProject;
