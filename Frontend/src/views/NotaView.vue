<template>
  <MyNavBar />
  <div style="border:1px solid white" class="bg container fade-in">
    <br />

    <!-- Notas -->
    
    <div class="row card-container">
      
      <div class="col-md-4" v-for="(nota, notes) in notas" :key="notes">
        <div
          v-for="(user, index) in nota"
          :key="index"
          class="card border border-dark shadow-0 mb-3 text-dark"
          style="max-width: 30rem"
        >
          <div class="card-header bg-transparent border-dark">
            <div style="margin-left:60%" class="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                class="btn btn-secondary"
                data-mdb-toggle="modal"
                :data-mdb-target="'#exampleModal-' + notes + '-' + index"
              >
              <i class="far fa-pen-to-square"></i>
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="selectedNote(user)"
              >
                <i class="fas fa-trash-can"></i>
              </button>
              </div>
            <h4>{{ notes}}</h4>
          </div>
          <div class="card-body text-black">
            <h5 class="card-title">{{user.title}}</h5>
            <p class="card-text">
              {{ user.text }}
            </p>
          </div>
          <div class="card-footer border-black">
            <p>{{user.hr}} - {{user.date}}</p>
           
              <!-- Button trigger modal -->

              <!-- Modal -->
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
                     
                      <form @submit.prevent="editNote(notes, index)">
                        <div class="mb-3">
                          <label for="title" class="form-label">Título</label>
                          <input v-model="title" type="text" class="form-control" id="title">
                        </div>
                        <div class="mb-3">
                          <label for="text" class="form-label align-start">Nota</label>
                          <textarea v-model="text" class="form-control" id="text" rows="3"></textarea>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Cerrar</button>
                          <button type="submit" data-mdb-dismiss="modal" class="btn btn-primary">Guardar cambios</button>
                        </div>
                      </form>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import MyNavBar from "@/components/MyNavBar.vue";
@Options({
  components: {
    MyNavBar,
  },
})
export default class NotaView extends Vue {
  notaSelected: any = [];
  notas: any = {
    user1: [
      {
        title: "titulo1",
        text: "texto user 1 - 2",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo1",
        text: "texto user 1 - 2",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo1",
        text: "texto user 1 - 2",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo2",
        text: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
        hr: "13:45",
        date: "10/15/45",
      },
      {
        title: "titulo3",
        text: "texto user 1 - 3",
        hr: "14:45",
        date: "10/15/45",
      },
    ],
    user2: [
      {
        title: "titulo1",
        text: "texto user 1 - 2",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo1",
        text: "texto user 1 - 2",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo1",
        text: "texto user 1 - 2",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo2",
        text: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
        hr: "13:45",
        date: "10/15/45",
      },
      {
        title: "titulo3",
        text: "texto user 1 - 3",
        hr: "14:45",
        date: "10/15/45",
      },
    ],
    
  };
  title='';
  text='';

  async getData() {
    const response = await fetch(
      "https://airlane-api.onrender.com/flights/1/passengers"
    );
    const data = await response.json();
    console.log(data);
    return data;
  }

  selectedNote(user: any) {
    this.notaSelected = user;
    console.log(this.notaSelected);
  }

  editNote(user: any, index: any) {
    let hour = new Date().getHours()
    let min = new Date().getMinutes()
    this.notas[user][index].title = this.title;
    this.notas[user][index].text = this.text;
    this.notas[user][index].hr = hour+':'+min
    this.notas[user][index].date = new Date().toLocaleDateString();
    this.title = '';
    this.text = '';
    console.log(user, index);
  }
}
</script>
