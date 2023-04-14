<template>
  <div>
    <v-col
      class="d-flex"
      cols="12"
      sm="6"
      @change="sendData2"
      v-model="selected"
      @item-selected="dom"
      @input="dom($event)"
    >
      <v-select
        :items="items"
        label="Standard"
        v-model="selected2"
        @item-selected="dom"
      ></v-select>
    </v-col>

    Wybrana opcja {{ selected }}

    <br />

    <select @change="change2">
      <option value="value1">1</option>
      <option value="value2">2</option>
      <option value="value3">3</option>
    </select>

    <br />

    <label for="cars">Choose a car:</label>

    <select id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="vw">VW</option>
      <option value="audi" selected>Audi</option>
    </select>

    <div>Count {{ count }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <div>helloVariables {{ helloVariables }}</div>
    <!-- <div>hello {{ hello() }}</div> -->
    <div>name {{ name }}</div>
    <input v-model="name" />
    <!-- <div class="">{{ render() }}</div> -->
    <PostsList />
    <First data="Aneta" />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import PostsList from "@/components/Axios/PostsList.vue";
import First from "./First.vue";

@Component({
  components: {
    PostsList,
    First,
  },
})
export default class LukiView extends Vue {
  // Declared as component data
  message = "Hello World!";
  count = 0;
  firstName = "John";
  lastName = "Doe";
  movies = [];
  items = [
    {
      text: "normal",
      value: "normal",
    },
    {
      text: "pilne",
      value: "urgent",
    },
    {
      text: "news",
      value: "news",
    },
  ];
  selected = "";
  selected2 = "";

  dom(e) {
    console.log("eeee2", e);
    this.selected = e;
  }

  change2(e) {
    console.log("zmiana w default");
    console.log("e", e);
    console.log("e", e.target.value);
  }

  sendData2(e) {
    console.log("eee", e);
    console.log("eee", e.target.value);
    console.log("selected", this.selected);
    console.log("selected2", this.selected2);
  }

  get name() {
    return this.firstName + " " + this.lastName;
  }

  set name(value) {
    const splitted = value.split(" ");
    this.firstName = splitted[0];
    this.lastName = splitted[1] || "";
  }

  async fetchData() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=656d3af6415c350924bbf12f27ed98bf&language=en-US&page=1"
    );
    this.movies = res.data.results;
  }

  increment() {
    this.count = this.count + 1;
  }
  decrement() {
    this.count = this.count - 1;
  }
  created() {
    this.fetchData();
  }
  // Declare mounted lifecycle hook
  mounted() {
    console.log("mounted");
  }

  // Declare render function
  render() {
    return <div>Hello World!</div>;
  }

  hello() {
    console.log("funkcja hello");
  }
  data() {
    return {
      // `hello` will be reactive as it is declared via `data` hook.
      helloVariables: "word hello",
    };
  }
}
</script>

<style lang="scss" scoped></style>
