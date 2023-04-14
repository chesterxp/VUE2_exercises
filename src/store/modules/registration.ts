interface IState {
  registration: IState[];
  users: IUser[];
}

interface IUser {
  id: number;
  name: string;
  registered: boolean;
}

const state = {
  registration: [],
  users: [
    {
      id: 1,
      name: "Luki1",
      registered: false,
    },
    {
      id: 2,
      name: "Luki2",
      registered: false,
    },
    {
      id: 3,
      name: "Luki3",
      registered: false,
    },
    {
      id: 4,
      name: "Luki4",
      registered: false,
    },
    {
      id: 5,
      name: "Luki5",
      registered: false,
    },
  ],
};

const getters = {
  getUsers(state: IState) {
    return state.users;
  },
  getRegistration(state: IState) {
    return state.registration;
  },
};
const actions = {
  addR({ commit }: { commit: any }, id: number) {
    const user = state.users.find((u) => u.id == id);
    if (user) {
      user.registered = true;
      commit("addRegis", user);
    }
  },
  unRegis({ commit }: { commit: any }, id: number) {
    const user = state.users.find((u) => u.id == id);
    if (user) {
      console.log("test");
      user.registered = false;
      commit("unRegis_m", user);
    }
  },
};
const mutations = {
  addRegis(state: IState, user: any) {
    state.registration.push(user);
  },
  unRegis_m(state: IState, user: any) {
    state.registration = state.registration.filter((el: any, index: number) => {
      if (el.id !== user.id) {
        return el;
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
