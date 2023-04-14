<template>
  <div>
    <h1>Luki > First</h1>
    <h3>Variables exampleProperty: {{ fakeNumber }}</h3>
    <button class="btn" @click="increment">UP</button>
    <hr />
    <h2>V-model</h2>
    <p>{{ inputValue }}</p>

    <input
      type="text"
      placeholder="place luki"
      lazy="inputValue"
      @keypress.enter="getData"
    />
    <hr />
    <h2>Increment Value {{ fakeNumber }}</h2>
    <div class="btn" @click="incrementValueFunc">Add + 1</div>

    <br />
    <hr />

    <h3>lukiValue</h3>
    <div class="btn" @click="increment2">Increment LukiVal</div>
    <h3>value: {{ lukiValue }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class FirstComponent extends Vue {
  inputValue = "wartosc w kodzie";

  // @Prop({ default: 0 }) exampleProperty!: number;
  fakeNumber = 0;

  // get incrementValue() {
  //   return this.exampleProperty;
  // }

  // set incrementValue(value: number) {
  //   this.exampleProperty = value;
  // }

  incrementValueFunc() {
    this.fakeNumber = this.fakeNumber + 1;
  }

  //luki Value
  lukiNumber = 100;
  get lukiValue(): number {
    return this.lukiNumber;
  }

  set lukiValue(value: number) {
    this.lukiNumber = value;
  }

  increment2() {
    this.lukiValue = this.lukiValue + 1;
  }

  //   set incrementValue(value) {
  //     this.incrementValue = this.exampleProperty + value;
  //   }

  //   @Watch("exampleProperty")
  //   dom(newValue: number, oldValue: number) {
  //     console.log("zmiana", newValue, oldValue);
  //   }

  getData(e: any) {
    const text = e.target.value;
    this.inputValue = text;
    console.log("dane:", text);
    e.target.value = "";
    // this.showAlert(this.inputValue);
    // this.sendData2(this.inputValue);
  }

  showAlert(text: string) {
    alert(text);
  }

  sendData2(text: string) {
    console.log("dane:", text);
  }

  increment() {
    this.fakeNumber = this.fakeNumber + 1;
  }
}
</script>

<style scoped></style>
