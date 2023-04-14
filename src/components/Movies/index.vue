<template>
  <div class="movies__box">
    <div class="movies__buttons">
      <div class="prev btn" v-if="showPrevBtn" @click="changePage('prev')">
        Prev
      </div>
      <div class="next btn" v-if="showNextBtn" @click="changePage('next')">
        Next
      </div>
    </div>

    <div class="movies__cards" v-if="moviesData">
      <Card v-for="m in moviesToShow" :key="m.id" :data="m" />
    </div>

    <div class="spinner" v-if="!moviesData">
      <div class="spinner__element"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MockData from "./mockData";
import Card from "./Card.vue";
import { IMovie } from "./types";

@Component({
  components: {
    Card,
    MockData,
  },
})
export default class MoviesBase extends Vue {
  moviesData: IMovie[] = [];
  moviesToShow: IMovie[] = [];
  currentPage = 0;
  showPrevBtn = true;
  showNextBtn = true;

  mounted() {
    console.log("mounted");
    this.moviesData = MockData;
    this.getNewMovies();
  }

  getNewMovies() {
    this.moviesToShow = this.moviesData.slice(
      this.currentPage * 9,
      (this.currentPage + 1) * 9
    );
  }

  changePage(type: string) {
    console.log("changepage", type);
    if (type === "next") {
      this.currentPage = this.currentPage + 1;
    } else {
      this.currentPage = this.currentPage - 1;
    }
  }

  hideButtons() {
    const allPages = Math.ceil(this.moviesData.length / 9);

    if (this.currentPage === 0) {
      this.showPrevBtn = false;
    } else {
      this.showPrevBtn = true;
    }

    if (this.currentPage === allPages - 1) {
      this.showNextBtn = false;
    } else {
      this.showNextBtn = true;
    }
  }

  @Watch("currentPage")
  changeData() {
    this.getNewMovies();
    this.hideButtons();
  }

  // watch(() => {
  //   console.log('log1');
  // }, () => {
  //   console.log('log2');
  // })
}
</script>

<style scoped lang="scss">
.movies {
  &__box {
    width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 765px;
  }
  &__buttons {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
// .btn {
//   background-color: var(--green);
//   color: #fff;
//   padding: 10px 20px;
//   margin: 20px 10px;
//   box-shadow: 2px 2px 6px rgba(51, 51, 51, 0.3);
//   transition: all 0.3s ease-out;
//   cursor: pointer;
//   &:hover {
//     box-shadow: 2px 2px 20px rgba(51, 51, 51, 0.3);
//     filter: brightness(1.1);
//   }
// }

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 1000px;
  margin: 0 auto;

  // &__element {
  //   width: 100px;
  //   height: 100px;
  //   border-radius: 50%;
  //   border-right: 5px solid var(--green);
  //   border-left: 5px solid var(--green);
  //   animation: spinner 1s infinite;
  // }

  &__element {
    display: inline-block;
    width: 80px;
    height: 80px;
    &::after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid var(--green);
      border-color: var(--green) transparent var(--green) transparent;
      animation: spinner 1.2s linear infinite;
    }
  }
}

@keyframes spinner {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
