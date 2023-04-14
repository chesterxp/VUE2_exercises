<template>
  <div>
    <h1>Child Provide Class</h1>
    <p>data : {{ data }}</p>
    <p>Losowa liczba {{ randomNumber }}</p>
    <h2>Counter : {{ counter }}</h2>
    <div class="btn" @click="increase">increase counter by 1</div>
    <p v-for="num in countOfNumbers" :key="num.number">
      Next number - {{ num.number }} : {{ num.randomNumber }}
    </p>

    <GrandChildProvideClass />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import GrandChildProvideClass from "./GrandChild.vue";
// import { mapGetters, mapActions } from "vuex";

@Component({
  components: {
    GrandChildProvideClass,
  },
})
export default class ChildProvideClass extends Vue {
  @Prop({ default: "John doe" }) data!: string;

  counter = 0;
  randomNumber = 0;
  countOfNumbers: {
    number: number;
    randomNumber: number;
  }[] = [];

  increase() {
    this.counter = this.counter + 1;
    this.generateNewNumber();
  }

  generateNewNumber() {
    const newValue = Number((Math.random() * 1000).toFixed());
    this.randomNumber = newValue;
  }

  @Watch("counter")
  addParagraph(newVal: number, oldVal: number) {
    console.log("addParagraph", { newVal, oldVal });
    this.countOfNumbers.push({
      number: newVal,
      randomNumber: this.randomNumber,
    });
  }

  get computedNumber() {
    return (Math.random() * 10).toFixed();
  }

  set computedNumber(value) {
    this.computedNumber = value;
  }
}
</script>

<style scoped></style>
