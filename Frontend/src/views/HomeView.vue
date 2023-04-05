<template>
  <MyNavBar />
  <div class="fade-in bg">
    <div class="container my-4">
      <div class="row row-cols-1 row-cols-md-4 g-4 card-group">
        <div class="col" v-for="(nota, notaKey) in notas" :key="notaKey">
          <div :class="'card border border-' + nota[7] + ' shadow-0 mb-3'">
            <div
              :class="'card-header bg-transparent border-'+nota[7]"
              style="display: flex; justify-content: space-between"
            >
            <p>{{nota[1]}}</p>
              <div>
                
                <button
                  class="btn btn-transparent btn-like"
                  style="margin-right: 10px"
                  @click="isLike"
                >
                
                  <i
                    :class="{ far: !isLiked, fa: isLiked }"
                    :style="{ color: isLiked ? 'red' : 'inherit' }"
                    class="fa-heart fa-xl"
                  ></i>
                  <p>{{nota[6]}}</p>
                </button>
                <button
                  class="btn btn-transparent btn-like"
                  @click="isFavorite"
                >
                  <i
                    :class="{ far: !isFav, fa: isFav }"
                    :style="{ color: isFav ? 'rgb(82, 100, 255)' : 'inherit' }"
                    class="fa-bookmark fa-xl"
                  ></i>
                </button>
              </div>
            </div>
            <div class="card-body text-success">
              <h5 class="card-title">{{nota[2]}}</h5>
              <p class="card-text">
                {{ nota[3] }}
              </p>
            </div>
            <div :class="'card-footer bg-transparent border-'+nota[7]">{{nota[4]}} <p>{{nota[5]}}</p></div>
            
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
  isLiked = false;
  isFav = false;

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
