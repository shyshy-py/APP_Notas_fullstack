<template>
  <MyNavBar />
  <div class="fade-in bg">
    <div class="container my-4">
      
      <div class="row row-cols-1 row-cols-md-4 g-4 card-group">
        <div class="col" v-for="(nota, notaKey) in notas" :key="notaKey">
          
          <div class="card">
            
            <div class="card-top"></div>
            
            <img
              src="https://via.placeholder.com/150"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ nota[1] }}</h5>
              <p class="card-text">
                {{ nota[2] }}
              </p>
            </div>
            <div class="card-footer">
              <hr />
              <small class="text-muted">Publicado el 3 de Abril de 2023</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div
              class="card-header"
              style="display: flex; justify-content: space-between"
            >
              <p>usuario</p>
              <div>
                <button
                  class="btn btn-transparent btn-like"
                  style="margin-right: 10px"
                  @click="isLike"
                >
                  <i :class="{'far':!isLiked,'fa':isLiked}" :style="{'color':isLiked?'red':'inherit'}" class="fa-heart fa-xl"></i>
                </button>
                <button
                  class="btn btn-transparent btn-like"
                  @click="isFavorite"
                >
                  <i :class="{'far':!isFav,'fa':isFav}" :style="{'color':isFav?'rgb(82, 100, 255)':'inherit'}" class="fa-bookmark fa-xl"></i>
                </button>
               
              </div>
            </div>

            <img
              v-if="nota"
              src="https://via.placeholder.com/150"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">titulo</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                maxime aut earum quod voluptas omnis velit modi quae iure
                dignissimos? Quasi odio dicta quos rem molestiae illum nesciunt
                nostrum libero.
              </p>
            </div>
            <div class="card-footer">
              <hr />
              <small class="text-muted">Publicado el 3 de Abril de 2023</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div
              class="card-header"
              style="display: flex; justify-content: space-between"
            >
              <p>usuario</p>
              <div>
                <button
                  class="btn btn-transparent btn-like"
                  style="margin-right: 10px"
                  @click="isLike"
                >
                  <i :class="{'far':!isLiked,'fa':isLiked}" :style="{'color':isLiked?'red':'inherit'}" class="fa-heart fa-xl"></i>
                </button>
                <button
                  class="btn btn-transparent btn-like"
                  @click="isFavorite"
                >
                  <i :class="{'far':!isFav,'fa':isFav}" :style="{'color':isFav?'rgb(82, 100, 255)':'inherit'}" class="fa-bookmark fa-xl"></i>
                </button>
               
              </div>
            </div>

            <img
              v-if="nota"
              src="https://via.placeholder.com/150"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">titulo</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                maxime aut earum quod voluptas omnis velit modi quae iure
                dignissimos? Quasi odio dicta quos rem molestiae illum nesciunt
                nostrum libero.
              </p>
            </div>
            <div class="card-footer">
              <hr />
              <small class="text-muted">Publicado el 3 de Abril de 2023</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div
              class="card-header"
              style="display: flex; justify-content: space-between"
            >
              <p>usuario</p>
              <div>
                <button
                  class="btn btn-transparent btn-like"
                  style="margin-right: 10px"
                  @click="isLike"
                >
                  <i :class="{'far':!isLiked,'fa':isLiked}" :style="{'color':isLiked?'red':'inherit'}" class="fa-heart fa-xl"></i>
                </button>
                <button
                  class="btn btn-transparent btn-like"
                  @click="isFavorite"
                >
                  <i :class="{'far':!isFav,'fa':isFav}" :style="{'color':isFav?'rgb(82, 100, 255)':'inherit'}" class="fa-bookmark fa-xl"></i>
                </button>
               
              </div>
            </div>

            <img
              v-if="nota"
              src="https://via.placeholder.com/150"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">titulo</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                maxime aut earum quod voluptas omnis velit modi quae iure
                dignissimos? Quasi odio dicta quos rem molestiae illum nesciunt
                nostrum libero.
              </p>
            </div>
            <div class="card-footer">
              <hr />
              <small class="text-muted">Publicado el 3 de Abril de 2023</small>
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
import { getNotes } from "@/services";

@Options({
  components: {
    MyNavBar,
  },
})
export default class HomeView extends Vue {
  notas: any = [];
  nota = true;
  isLiked = false;
  isFav=false

  isLike() {
    this.isLiked = !this.isLiked;
  }
  isFavorite() {
    this.isFav = !this.isFav;
  }

  async created(): Promise<void> {
    try {
      const data = await getNotes();
      this.notas = data;
      console.log(this.notas);
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
