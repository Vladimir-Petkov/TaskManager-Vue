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
import Logout from "../user/Logout.vue";

export default {
  name: "Header",
  data() {
    return {

    };
  },
  methods: {
    logout() {
      Logout.userLogout();
    }
  }
};
</script>

<style scoped>
</style>
