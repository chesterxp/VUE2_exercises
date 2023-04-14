<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/Navigation/index.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navigation,
  },
});
</script>
