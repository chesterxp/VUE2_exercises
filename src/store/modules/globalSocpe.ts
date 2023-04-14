interface IState {
  listOfArticles: IArticle[];
}

interface IArticle {
  id: number;
  title: string;
  content: string;
  author: string;
}

const state = {
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

const getters = {
  allArticles: (state: IState) => {
    return state.listOfArticles;
  },
};

const actions = {
  addArticle({ commit }: { commit: any }, article: IArticle) {
    commit("add", article);
  },
};

const mutations = {
  add: (state: any, article: IArticle) => {
    state.listOfArticles.unshift(article);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
