import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";

import storeValue from "../index";

interface IState {
  listOfArticles: IArticle[];
}

interface IArticle {
  id: number;
  title: string;
  content: string;
  author: string;
}

@Module({
  dynamic: true,
  namespaced: true,
  name: "globalScope",
  store: storeValue,
})
class GlobalScopeClass extends VuexModule {
  public data: IState = {
    listOfArticles: [
      {
        id: 1,
        title: "Article title nr 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore odio blanditiis iusto minima debitis vitae vel commodi ab tempora excepturi, exercitationem aliquam?",
        author: "Jan Kowalski",
      },
      {
        id: 2,
        title: "Article title nr 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore odio blanditiis iusto minima debitis vitae vel commodi ab tempora excepturi, exercitationem aliquam?",
        author: "Jan Kowalski",
      },
      {
        id: 3,
        title: "Article title nr 3",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore odio blanditiis iusto minima debitis vitae vel commodi ab tempora excepturi, exercitationem aliquam?",
        author: "Jan Kowalski",
      },
      {
        id: 4,
        title: "Article title nr 4",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore odio blanditiis iusto minima debitis vitae vel commodi ab tempora excepturi, exercitationem aliquam?",
        author: "Jan Kowalski",
      },
      {
        id: 5,
        title: "Article title nr 5",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore odio blanditiis iusto minima debitis vitae vel commodi ab tempora excepturi, exercitationem aliquam?",
        author: "Jan Kowalski",
      },
    ],
  };

  @Mutation
  private add(article: IArticle) {
    this.data.listOfArticles.unshift(article);
  }

  @Action
  public addArticle(article: IArticle) {
    this.add(article); // eslint-disable-next-line
  };


  // @Action({ commit: "add" })
  // addArticle(article: IArticle) {
  //   return article;
  // }

  // @Mutation
  // add(article: IArticle) {
  //   this.state.listOfArticles.unshift(article);
  // }
}

export default getModule(GlobalScopeClass);
