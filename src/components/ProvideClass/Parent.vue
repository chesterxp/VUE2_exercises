<template>
  <div>
    <h1>Parent Provide Class</h1>

    <div class="article__add">
      <label for="articleTitle">Tytuł Artykułu</label>
      <input type="text" v-model="inputArticle.title" id="articleTitle" />
      <label for="articleAuthor">Autor Artykułu</label>
      <input type="text" v-model="inputArticle.author" id="articleAuthor" />
      <label for="articleContent">Treść</label>
      <input
        type="text"
        v-model="inputArticle.content"
        id="articleContent"
        @keypress.enter="sendData"
      />
      <button class="btn" @click="sendData">Add Article</button>
    </div>

    <div class="box">
      <div class="article" v-for="article in articles" :key="article.id">
        <div class="article__title">{{ article.title }}</div>
        <div class="article__author">{{ article.author }}</div>
        <div class="article__content">{{ article.content }}</div>
      </div>
    </div>

    <ChildProvideClass data="lukixp" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChildProvideClass from "./Child.vue";
// import { getModule } from "vuex-module-decorators";
import ArticleClassScope from "@/store/modules/globalSocpeClass";

@Component({
  components: {
    ChildProvideClass,
  },
})

// @Component({
//   computed: mapGetters([
//     'posts'
//   ]),

//   methods: mapActions([
//     'fetchPosts'
//   ])
// })
export default class ParentProvideClass extends Vue {
  inputArticle = {
    id: "",
    title: "",
    author: "",
    content: "",
  };
  articles = ArticleClassScope.data.listOfArticles;
  sendData() {
    const newArticle = {
      ...this.inputArticle,
      id: new Date().getTime(),
    };

    ArticleClassScope.addArticle(newArticle);
    this.inputArticle = {
      id: "",
      title: "",
      author: "",
      content: "",
    };
  }
  created() {
    console.log("GlobalModule", ArticleClassScope.data.listOfArticles);
  }
  // public created() {
  // const MyModuleInstance = getModule(MyStoreModule, this.$store);
  // Do stuff with module
  // MyModuleInstance.addArticle(this.inputArticle);
  // }
}
</script>
<style scoped lang="scss">
.parent {
  margin: 40px 0;
}

.article {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: #4e4e4e;
  color: #fff;
  margin: 40px;
  padding: 20px;
  box-shadow: 2px 2px 10px 2px rgba(51, 51, 51, 0.3);
  border-radius: 5px;
  &__title {
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 10px;
  }
  &__author {
    font-size: 16px;
    color: #808080;
    margin-bottom: 20px;
  }
  &__content {
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
