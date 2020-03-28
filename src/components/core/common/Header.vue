<template>
  <div>
    <v-toolbar dense color="#30bfbf">
      <img
        src="https://i.pinimg.com/originals/46/cd/20/46cd20a33efe24abce136ee09cea122a.png"
        alt
        style="width:4em; height:4em;"
      />

      <v-toolbar-title>
        <router-link to="/">Tasks Manager</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template>
        <v-btn outlined to="/profile">Profile</v-btn>
        <v-btn outlined @click="logout">Logout</v-btn>
      </template>
      <template>
        <v-btn outlined to="/login">Login</v-btn>
        <v-btn outlined to="/register">Register</v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
import requester from "../../../requester.js";

export default {
  mixins: [ requester ],
  name: "Header",
  data() {
    return {

    };
  },
  methods: {
    logout() {
      this.post("_logout", "user", "Kinvey")
        .then(this.handler)
        .then(() => {
          sessionStorage.clear();

          this.$router.push("/login");
        });
    }
  }
};
</script>

<style scoped>
</style>
