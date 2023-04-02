<template>
  <MyNavBar />
<div class="bg container -fadein">

  <h1>aca se ven las notas</h1>



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
  
}
</script>
