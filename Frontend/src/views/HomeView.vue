<template>
  <MyNavBar />
<div class="fade-in">

  <div class="container my-4">
    <div class="row row-cols-1 row-cols-md-4 g-4 card-group">
      <div class="col">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dictum ex. Sed interdum enim vel tortor feugiat, at efficitur ante malesuada.</p>
          </div>
          <div class="card-footer">
            <hr>
            <small class="text-muted">Publicado el 3 de Abril de 2023</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dictum ex. Sed interdum enim vel tortor feugiat, at efficitur ante malesuada.</p>
          </div>
          <div class="card-footer">
            <hr>
            <small class="text-muted">Publicado el 2 de Abril de 2023</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dictum ex. Sed interdum enim vel tortor feugiat, at efficitur ante malesuada.</p>
          </div>
          <div class="card-footer">
            <hr>
            <small class="text-muted">Publicado el 1 de Abril de 2023</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dictum ex. Sed interdum enim vel tortor feugiat, at efficitur ante malesuada.</p>
          </div>
          <div class="card-footer">
            <hr>
            <small class="text-muted">Publicado el 31 de Marzo de 2023</small>
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
  
}
</script>
