<template>
  <div class="nav">
    <router-link class="nav__link" to="/">Home</router-link>
    <div class="nav__box">
      <div class="nav__name">Case</div>
      <div class="nav__list">
        <router-link class="nav__link" to="/case/axios"
          >Axios (GetPosts)</router-link
        >
        <router-link class="nav__link" to="/case/axios_class"
          >AxiosClass (GetPosts)</router-link
        >
        <router-link class="nav__link" to="/case/mixins"
          >Mixins (Counter)</router-link
        >
        <router-link class="nav__link" to="/case/lifecyclehooks"
          >Life Cycle Hooks (Parent vs Child)</router-link
        >
        <router-link class="nav__link" to="/case/provide"
          >Provide (Parent/Child/Grand)</router-link
        >
        <router-link class="nav__link" to="/case/provide_class"
          >ProvideClass (Parent/Child/Grand)</router-link
        >
        <router-link class="nav__link" to="/case/tabs"
          >Dynamic Component KeepAlive (Tabs)</router-link
        >
        <router-link class="nav__link" to="/case/templateref"
          >TemplateRef ($refs/input focus)</router-link
        >
        <router-link class="nav__link" to="/case/popup"
          >Emit (popup)</router-link
        >
        <router-link class="nav__link" to="/case/slots"
          >Slots (card with id)</router-link
        >
      </div>
    </div>
    <div class="nav__box">
      <div class="nav__name">Apps</div>
      <div class="nav__list">
        <router-link class="nav__link" to="/apps/todolist"
          >Store Vuex (Todolist)</router-link
        >
        <router-link class="nav__link" to="/apps/movies">Movies</router-link>
        <router-link class="nav__link" to="/apps/vuetify">Vuetify</router-link>
        <router-link class="nav__link" to="/apps/registration"
          >Registration (vuex)</router-link
        >
      </div>
    </div>
    <router-link class="nav__link" to="/luki">Luki</router-link>

    <!-- <p @close="hideElement" v-if="hideElementValue">Lukixp2</p> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  hideElementValue = true;
  hideElement(value: string) {
    console.log("hideElement", value);
    this.hideElementValue = false;
  }
}
</script>

<style scoped lang="scss">
.nav {
  $nav: &;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: rgba(51, 51, 51, 0.9);
  color: #fff;
  width: 100%;
  box-shadow: 2px 2px 10px 2px rgba(51, 51, 51, 0.4);
  z-index: 100;
  position: sticky;
  top: 0;

  &__link,
  &__name {
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease-in;
    cursor: pointer;
    &:hover {
      color: var(--blue);
    }
  }

  &__box {
    position: relative;
    &:hover {
      #{$nav}__list {
        // opacity: 1;
        // z-index: 1;
        display: flex;
      }
    }
  }
  &__list {
    // opacity: 0;
    // z-index: -1;
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    flex-direction: column;
    background: rgba(51, 51, 51, 0.95);
    color: #fff;
    box-shadow: 2px 2px 10px 2px rgba(51, 51, 51, 0.4);
  }
}
</style>
