<template>
  <MyNavBar />

  <div class="bg fade-in">
    <br /><br /><br /><br /><br />

    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-mdb-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(notas, index) in allNotas"
          :key="index"
          class="carousel-item active"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-12 col-md-8 col-lg-6">
                <div :class="'card text-center text-white bg-' + notas[6]">
                  <div class="card-header text-white">
                    <h1>{{ notas[1] }}</h1>
                  </div>
                  <div class="card-body text-white">
                    <h5 class="card-title text-white"></h5>
                    <p class="card-text text-white">{{ notas[2] }}</p>
                  </div>
                  <div class="card-footer text-white">
                    {{ notas[3] }}, {{ notas[4] }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="fixed-bottom mb-6 ms-4">
      <a data-mdb-toggle="modal" href="#exampleModalToggle1" role="button">
        <button class="btn btn-secondary rounded-circle">
          <i class="fas fa-plus"></i>
        </button>
      </a>
    </div>

    <!-- First modal dialog -->
    <div
      class="modal fade"
      id="exampleModalToggle1"
      aria-hidden="false"
      aria-labelledby="exampleModalToggleLabel1"
      tabindex="-1"
      data-mdb-backdrop="static"
      data-mdb-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel1">
              <!-- Tabs navs -->
              <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                    >Agregar</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                    >Editar</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-3"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-3"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                    >Eliminar</a
                  >
                </li>
                <li></li>
                <button
                  type="button"
                  class="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </ul>
              <!-- Tabs navs -->

              <!-- Tabs content -->
              <div class="tab-content" id="ex1-content">
                <div
                  class="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <div class="modal-body">
                    <div class="container mt-5">
                      <div class="row justify-content-center">
                        <div class="col-md-8">
                          <div
                            class="card border"
                            v-if="(newNota = 'agregar')"
                            :class="'border-' + color + ' shadow-0 mb-4'"
                          >
                            <div class="card-header">Nueva nota</div>

                            <div class="card-body">
                              <form @submit.prevent="GuardarNota()">
                                <div class="form-group">
                                  <label for="titulo">Título:</label>
                                  <input
                                    v-model="titulo"
                                    type="text"
                                    name="titulo"
                                    id="titulo"
                                    class="form-control"
                                    required
                                  />
                                </div>

                                <div class="form-group">
                                  <label for="texto">Texto:</label>
                                  <textarea
                                    v-model="texto"
                                    name="texto"
                                    id="texto"
                                    class="form-control"
                                    rows="4"
                                    required
                                  ></textarea>
                                </div>

                                <div class="form-group">
                                  <label for="color">Color:</label>
                                  <div
                                    class="btn-group btn-group-sm d-flex justify-content-center row"
                                    data-toggle="buttons"
                                  >
                                    <div class="col-md-6">
                                      <label
                                        class="btn btn-primary active btn-block active my-2 rounded"
                                      >
                                        <input
                                          @click="ColorNota()"
                                          type="radio"
                                          name="color"
                                          id="color1"
                                          value="primary"
                                          autocomplete="off"
                                          checked
                                          class="btn-check"
                                        />
                                        Azul
                                      </label>
                                      <label
                                        class="btn btn-secondary btn-block active my-2 rounded"
                                      >
                                        <input
                                          @click="ColorNota()"
                                          type="radio"
                                          name="color"
                                          id="color2"
                                          value="secondary"
                                          autocomplete="off"
                                          class="btn-check"
                                        />
                                        Gris
                                      </label>
                                      <label
                                        class="btn btn-success btn-block active my-2 rounded"
                                      >
                                        <input
                                          @click="ColorNota()"
                                          type="radio"
                                          name="color"
                                          id="color3"
                                          value="success"
                                          autocomplete="off"
                                          class="btn-check"
                                        />
                                        Verde
                                      </label>
                                      <label
                                        class="btn btn-danger btn-block active my-2 rounded"
                                      >
                                        <input
                                          @click="ColorNota()"
                                          type="radio"
                                          name="color"
                                          id="color4"
                                          value="danger"
                                          autocomplete="off"
                                          class="btn-check"
                                        />
                                        Rojo
                                      </label>
                                    </div>
                                    <div class="col-md-6">
                                      <label
                                        class="btn btn-warning btn-block active my-2 rounded"
                                      >
                                        <input
                                          @click="ColorNota()"
                                          type="radio"
                                          name="color"
                                          id="color5"
                                          value="warning"
                                          autocomplete="off"
                                          class="btn-check"
                                        />
                                        Amarillo
                                      </label>
                                      <label
                                        class="btn btn-info btn-block active my-2 rounded"
                                      >
                                        <input
                                          @click="ColorNota()"
                                          type="radio"
                                          name="color"
                                          id="color6"
                                          value="info"
                                          autocomplete="off"
                                          class="btn-check"
                                        />
                                        Azul
                                      </label>
                                      <label
                                        class="btn btn-light btn-block active my-2 rounded"
                                      >
                                        <input
                                          @click="ColorNota()"
                                          type="radio"
                                          name="color"
                                          id="color7"
                                          value="light"
                                          autocomplete="off"
                                          class="btn-check"
                                        />
                                        Blanco
                                      </label>
                                      <label
                                        class="btn btn-dark btn-block active my-2 rounded"
                                      >
                                        <input
                                          @click="ColorNota()"
                                          type="radio"
                                          name="color"
                                          id="color8"
                                          value="dark"
                                          autocomplete="off"
                                          class="btn-check"
                                        />
                                        Negro
                                      </label>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-group mt-4">
                                  <button type="submit" class="btn btn-primary">
                                    Crear nota
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <div
                    class="card"
                    v-for="(nota, indexNota) in allNotas"
                    :key="indexNota"
                  >
                    <div class="card-body">
                      <h5 class="card-title">Editar Nota: {{ nota[1] }}</h5>
                      <div class="form-group">
                        <h5>Nuevo titulo:</h5>
                        <input
                          v-model="newTitulo"
                          type="text"
                          id="form12"
                          class="form-outline"
                        />
                        <h5>Nuevo texto:</h5>
                        <p>Debe ingresar un texto o quedara en blanco</p>
                        <textarea
                          v-model="newTexto"
                          type="text"
                          id="form12"
                          class="form-outline"
                        />
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="updateNota(nota[0])"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-tabs-3"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  <div
                    class="card"
                    v-for="(nota, indexNota) in allNotas"
                    :key="indexNota"
                  >
                    <div class="card-body">
                      <h5 class="card-title">{{ nota[1] }}</h5>

                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="deleteNota(nota[0])"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Tabs content -->
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { createNote, myNotes, deleteNote, updateNote } from "@/services";

import MyNavBar from "@/components/MyNavBar.vue";
@Options({
  components: {
    MyNavBar,
  },
})
export default class NotaView extends Vue {
  newNota = "";
  allNotas = [];

  /*nota*/

  date = new Date();
  titulo = "";
  texto = "";
  hora = this.date.toTimeString().slice(0, 5);
  fecha = this.date.toISOString().slice(0, 10);
  likes = 0;
  color = "";
  idUser = localStorage.getItem("id");

  ColorNota() {
    const colorSeleccionado = (
      document.querySelector('input[name="color"]:checked') as HTMLInputElement
    ).value;
    this.color = colorSeleccionado;
    console.log(this.color);
  }

  async GuardarNota() {
    try {
      await createNote(
        this.titulo,
        this.texto,
        this.idUser,
        this.color,
        this.likes,
        this.fecha,
        this.hora
      );
    } catch (error) {
      console.log("error f GuardarNota()", error);
    }
  }

  async created(): Promise<void> {
    try {
      const id = localStorage.getItem("id");
      const data = await myNotes(id);
      this.allNotas = data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteNota(idNota: any) {
    await deleteNote(idNota);
    console.log("nota eliminada", idNota);
  }

  editColor(color: any) {
    return color;
  }

  newTitulo = "";
  newTexto = "";
  async updateNota(idNota: any) {
    await updateNote(idNota, this.newTitulo, this.newTexto);
  }
}
</script>
