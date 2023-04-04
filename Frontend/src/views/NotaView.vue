<template>
  <MyNavBar />

  <div class="bg fade-in">
    <button @click="MostrarNotasUsuario()">aaaa</button>
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
            <h5 class="modal-title" id="exampleModalToggleLabel1">Modal 1</h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container mt-5">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div
                    class="card border"
                    :class="'border-' + color + ' shadow-0 mb-4'"
                  >
                    <div class="card-header">Nueva nota</div>

                    <div class="card-body">
                      <form @submit.prevent="GuardarNota">
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

                        <div class="form-group">
                          <label for="imagen">Imagen:</label>
                          <div class="custom-file">
                            <input
                              type="file"
                              name="imagen"
                              id="imagen"
                              class="custom-file-input"
                            />
                            <label for="imagen" class="custom-file-label"
                              >Seleccionar archivo</label
                            >
                          </div>
                        </div>

                        <div class="form-group mt-4">
                          <button
                            @click="GuardarNota"
                            type="submit"
                            class="btn btn-primary"
                          >
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
          <div class="modal-footer">Open second modal</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 
  <div
  class="modal fade"
  :id="'exampleModal-' + notes + '-' + index"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          Editar Nota
        </h5>
        <button
          type="button"
          class="btn-close"
          data-mdb-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        
      </div>
    </div>
  </div>
</div>
--></template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { createNote, myNotes } from "@/services";

import MyNavBar from "@/components/MyNavBar.vue";
@Options({
  components: {
    MyNavBar,
  },
})
export default class NotaView extends Vue {
  /*nota*/

  titulo = "";
  texto = "";
  hora = "";
  fecha = "";
  likes = 0;
  color = "";
  imagen = "";
  idUser = localStorage.getItem("id");

  ColorNota() {
    const colorSeleccionado = (
      document.querySelector('input[name="color"]:checked') as HTMLInputElement
    ).value;
    this.color = colorSeleccionado;
    console.log(this.color);
  }

  async GuardarNota() {
    let date = new Date();

    this.hora = '15:30:00';
    this.fecha = '2023-04-04';

    try {
      await createNote(
        this.titulo,
        this.texto,
        this.idUser,
        this.color,
        this.imagen,
        this.likes,
        this.fecha,
        this.hora
      );
      console.log(
        this.titulo,
        this.texto,
        this.idUser,
        this.color,
        this.imagen,
        this.likes,
        this.fecha,
        this.hora
      );
      console.log("nota guardada");
    } catch (error) {
      console.log("error f GuardarNota()", error);
    }
  }

  async MostrarNotasUsuario() {
    await myNotes();
  }

  notaSelected: any = [];
  notas: any = {};
}

/*

  selectedNote(user: any) {
    this.notaSelected = user;
    console.log(this.notaSelected);
  }

  editNote(user: any, index: any) {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    this.notas[user][index].title = this.title;
    this.notas[user][index].text = this.text;
    this.notas[user][index].hr = hour + ":" + min;
    this.notas[user][index].date = new Date().toLocaleDateString();
    this.title = "";
    this.text = "";
    console.log(user, index);
  }
}
*/
</script>
