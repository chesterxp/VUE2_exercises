<template>
  <div id="registration">
    <h3>Register here</h3>
    <hr />
    users {{ users }}
    <br />
    registration {{ registration }}
    <div class="user" v-for="user in users" :key="user.id">
      <h2>{{ user.name }}</h2>
      <button v-if="!user.registered" class="btn" @click="addR(user.id)">
        Register
      </button>
      <!-- <button v-if="!user.registered" class="btn" @click="add(user)">
        Register {{ user.registered }}
      </button> -->
    </div>

    <div class="box">
      <div class="box__element" v-for="r in registration" :key="r.id">
        <div class="t1">Name: {{ r.name }}</div>
        <div class="t2" @click="unRegis(r.id)">
          Unregistration : {{ r.registered }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "registration_view",
  data() {
    return {
      luki: "luki12345678",
    };
  },
  computed: {
    ...mapGetters(["getUsers", "getRegistration"]),
    users() {
      return this.getUsers;
      // return this.$store.getters.getUsers;
      // return this.$store.state.users;
    },
    registration() {
      return this.getRegistration;
      // return this.$store.getters.getRegistration;
    },
    user2() {
      return "luki13567";
    },
  },
  methods: {
    ...mapActions(["addR", "unRegis"]),
    add(user) {
      console.log("userID", user);
      this.$store.commit("addRegis", user);
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #ddd;
  margin: 20px;
  box-shadow: 2px 2px 8px 0px #333;
}
.box {
  display: flex;
  flex-direction: column;
  background: #333;
  color: #ffff;
  width: 300px;
  margin: 20px;
  padding: 20px;
  box-shadow: 2px 2px 8px 0px #333;

  &__element {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 10px 0;
  }
}
</style>
