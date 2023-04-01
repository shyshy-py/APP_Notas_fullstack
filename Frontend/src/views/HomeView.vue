<template>
  <MyNavBar />
  <div class="bg container fade-in">
    <br>
    <!-- Notas -->
    <div class="row card-container">
      <div class="col-md-4" v-for="(nota, notes) in notas" :key="notes">
        <div
          v-for="(user, index) in nota"
          :key="index"
          class="card border border-dark shadow-0 mb-3 text-dark"
          style="max-width: 20rem"
        >
          <div class="card-header bg-transparent border-dark">
            {{ user.title }}
          </div>
          <div class="card-body text-black">
            <h5 class="card-title">{{ user.title }}</h5>
            <p class="card-text">
              {{ user.text }}
            </p>
          </div>
          <div class="card-footer bg-transparent border-black">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-dark">Ver</button>
              <button type="button" class="btn btn-dark">Editar</button>
              <button type="button" class="btn btn-danger"><i style="color: aliceblue;" class="fas fa-trash-can"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MyNavBar from "@/components/MyNavBar.vue";
@Options({
  components: {
    HelloWorld,
    MyNavBar,
  },
})
export default class HomeView extends Vue {
  notas: any = {
    user1: [
      {
        title: "titulo1",
        text: "texto user 1 - 2",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo2",
        text: "loremloremloremlorem",
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
        text: "titulo user 2 ",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo2",
        text: "titulo user 2 - 1",
        hr: "13:45",
        date: "10/15/45",
      },
    ],
    user3: [
      {
        title: "titulo1",
        text: "texto user 3 ",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo2",
        text: "texto user 3 - 2",
        hr: "13:45",
        date: "10/15/45",
      },
    ],
    user4: [
      {
        title: "titulo1",
        text: "texto user 3 ",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo2",
        text: "texto user 3 - 2",
        hr: "13:45",
        date: "10/15/45",
      },
    ],
    user5: [
      {
        title: "titulo1",
        text: "texto user 3 ",
        hr: "12:45",
        date: "10/15/45",
      },
      {
        title: "titulo2",
        text: "texto user 3 - 2",
        hr: "13:45",
        date: "10/15/45",
      },
    ],
  };
}
</script>
