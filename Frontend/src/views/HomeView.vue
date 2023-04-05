<template>
  <MyNavBar />
  <div class="fade-in bg">
    <div class="dropdown">
      <button
        class="btn btn-secondary block dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Ordenar
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a @click="notasOrdenadasPorUsuario()" class="dropdown-item" href="#"
            >Por usuario</a
          >
        </li>
        <li>
          <a
            @click="filtrarPorFavoritos(), (favs = true)"
            class="dropdown-item"
            href="#"
            >Favoritos</a
          >
        </li>
        <li>
          <a @click="favs = false" class="dropdown-item" href="#">Todos</a>
        </li>
      </ul>
    </div>
    <div class="container my-4">
      <div v-if="!favs" class="row row-cols-1 row-cols-md-4 g-4 card-group">
        <div class="col" v-for="(nota, notaKey) in notas" :key="notaKey">
          <div :class="'card border border-' + nota[7] + ' shadow-0 mb-3'">
            <div
              :class="'card-header bg-transparent border-' + nota[7]"
              style="display: flex; justify-content: space-between"
            >
              <p>{{ nota[1] }}</p>
              <div>
                <button
                  class="btn btn-transparent btn-like"
                  style="margin-right: 10px"
                  @click="isLike(notaKey)"
                >
                  <i
                    :class="{ far: !nota.isLiked, fa: nota.isLiked }"
                    :style="{ color: nota.isLiked ? 'red' : 'inherit' }"
                    class="fa-heart fa-xl"
                  ></i>
                </button>
                <button
                  class="btn btn-transparent btn-like"
                  @click="isFavorite(notaKey)"
                >
                  <i
                    :class="{ far: !nota.isFav, fa: nota.isFav }"
                    :style="{
                      color: nota.isFav ? 'rgb(82, 100, 255)' : 'inherit',
                    }"
                    class="fa-bookmark fa-xl"
                  ></i>
                </button>
              </div>
            </div>
            <div class="card-body text-success">
              <h5 class="card-title">{{ nota[2] }}</h5>
              <p class="card-text">
                {{ nota[3] }}
              </p>
            </div>
            <div :class="'card-footer bg-transparent border-' + nota[7]">
              {{ nota[4] }}
              <p>{{ nota[5] }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="favs" class="row row-cols-1 row-cols-md-4 g-4 card-group">
        <div
          class="col"
          v-for="(nota, notaKey) in filtrarPorFavoritos()"
          :key="notaKey"
        >
          <div :class="'card border border-' + nota[7] + ' shadow-0 mb-3'">
            <div
              :class="'card-header bg-transparent border-' + nota[7]"
              style="display: flex; justify-content: space-between"
            >
              <p>{{ nota[1] }}</p>
              <div>
                <button
                  class="btn btn-transparent btn-like"
                  style="margin-right: 10px"
                  @click="isLike(notaKey)"
                >
                  <i
                    :class="{ far: !nota.isLiked, fa: nota.isLiked }"
                    :style="{ color: nota.isLiked ? 'red' : 'inherit' }"
                    class="fa-heart fa-xl"
                  ></i>
                </button>
                <button
                  class="btn btn-transparent btn-like"
                  @click="isFavorite(notaKey)"
                >
                  <i
                    :class="{ far: !nota.isFav, fa: nota.isFav }"
                    :style="{
                      color: nota.isFav ? 'rgb(82, 100, 255)' : 'inherit',
                    }"
                    class="fa-bookmark fa-xl"
                  ></i>
                </button>
              </div>
            </div>
            <div class="card-body text-success">
              <h5 class="card-title">{{ nota[2] }}</h5>
              <p class="card-text">
                {{ nota[3] }}
              </p>
            </div>
            <div :class="'card-footer bg-transparent border-' + nota[7]">
              {{ nota[4] }}
              <p>{{ nota[5] }}</p>
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
  isLiked = false;
  isFav = false;
  favs = false;

  filtrarPorFavoritos() {
    return this.notas.filter((nota: { isFav: boolean }) => nota.isFav === true);
  }

  isLike(notaKey: any) {
    // Cambia el estado del corazón para la nota correspondiente
    this.notas[notaKey].isLiked = !this.notas[notaKey].isLiked;
  }
  isFavorite(notaKey: any) {
    // Cambia el estado del marcador para la nota correspondiente
    this.notas[notaKey].isFav = !this.notas[notaKey].isFav;
  }

  async created(): Promise<void> {
    try {
      const data = await getNotes();
      this.notas = data;
    } catch (error) {
      console.error(error);
    }
  }

  /*FILTROS*/
  notasOrdenadasPorUsuario() {
    return this.notas.sort((a: any, b: any) => {
      const fechaA = new Date(a[0]);
      const fechaB = new Date(b[0]);
      if (fechaA < fechaB) {
        return -1;
      }
      if (fechaA > fechaB) {
        return 1;
      }
      return 0;
    });
  }
}
</script>
