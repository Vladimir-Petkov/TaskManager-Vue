<template>
  <div class="wrappper">
    <v-toolbar dense color="#30bfbf">
      <img
        src="https://i.pinimg.com/originals/46/cd/20/46cd20a33efe24abce136ee09cea122a.png"
        alt
        style="width:2em; height:2em;"
      />

      <v-toolbar-title>
        <router-link to="/">Tasks Manager</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="loggedIn">
        <v-btn
          outlined
          tag="a"
          :to="{ name: 'Profile', params: { id: userId}}"
        >Welcome, {{ username }}</v-btn>
        <v-btn outlined tag="a" @click="logout">Logout</v-btn>
      </template>

      <template v-else>
        <v-btn outlined to="/login">Login</v-btn>
        <v-btn outlined to="/register">Register</v-btn>
      </template>
    </v-toolbar>
  </div>
</template>
 
<script>
export default {
  name: "Header",
  data() {
    return {
      loggedIn: false,
      username: "",
      userId: ""
    };
  },
  methods: {
    logout() {
      this.$http
        .post("_logout", "user", "Kinvey")
        .then(this.$http.handler)
        .then(() => {
          sessionStorage.clear();

          this.$notify({
            group: "auth",
            title: "Logout",
            text: "Successfully Logout",
            type: "success"
          });

          this.$router.push("/login");
        });
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.loggedIn = sessionStorage.getItem("authtoken");
        this.username = sessionStorage.getItem("username");
        this.userId = sessionStorage.getItem("userId");
      }
    }
  }
};
</script>
 
<style scoped>
a {
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  margin-left: 1em;
  font-weight: 700;
}
</style>