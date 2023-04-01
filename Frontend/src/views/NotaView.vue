<template>
  <MyNavBar />
  <div class="bg container">
    <div class="notas fade-in">
      <h1>This is an about page</h1>

      <button @click="getData()" class="btn btn-light">fetch</button>
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
  name = "hola";

  async getData() {
    const response = await fetch(
      "https://airlane-api.onrender.com/flights/1/passengers"
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
}
</script>
