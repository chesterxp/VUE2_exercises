<template>
  <div class="parent">
    <h1>Parent 14</h1>
    <Child />

    <div class="article__add">
      <label for="articleTitle">Tytuł Artykułu</label>
      <input type="text" v-model="inputArticle.title" id="articleTitle" />
      <label for="articleAuthor">Autor Artykułu</label>
      <input type="text" v-model="inputArticle.author" id="articleAuthor" />
      <label for="articleContent">Treść</label>
      <input type="text" v-model="inputArticle.content" id="articleContent" />
      <button class="btn" @click="sendData">Add Article</button>
    </div>

    <br />

    <div class="box">
      <div class="article" v-for="article in allArticles" :key="article.id">
        <div class="article__title">{{ article.title }}</div>
        <div class="article__author">{{ article.author }}</div>
        <div class="article__content">{{ article.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "parent-nested",
  data() {
    return {
      userName2: "luki king 2",
      inputArticle: {
        id: "",
        title: "",
        author: "",
        content: "",
      },
    };
  },
  components: {
    Child,
  },
  provide() {
    return {
      username: this.userName2,
    };
  },
  computed: mapGetters(["allArticles"]),
  methods: {
    ...mapActions(["addArticle"]),
    sendData() {
      console.log("wyslij dane", this.inputArticle);
      const newArticle = {
        id: new Date().getTime(),
        ...this.inputArticle,
      };
      this.inputArticle = {};
      this.addArticle(newArticle);
    },
  },
};
</script>

<style scoped lang="scss">
.parent {
  margin: 40px 0;
}

.article {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: #333;
  color: #fff;
  margin: 40px;
  padding: 20px;
  box-shadow: 2px 2px 10px 2px rgba(51, 51, 51, 0.3);
  border-radius: 5px;
  &__title {
    text-transform: uppercase;
    padding: 20px 0;
  }
  &__author {
    font-size: 16px;
    color: #808080;
    margin-bottom: 40px;
  }
  &__content {
    background: #333;
    color: #fff;
    text-align: left;
  }

  &__add {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 20px auto;
    box-shadow: 2px 2px 10px 2px rgba(51, 51, 51, 0.4);
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
}
</style>
