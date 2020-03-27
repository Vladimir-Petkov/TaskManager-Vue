<template>
  <div>
    <v-toolbar dense color="#30bfbf">
      <img
        src="https://i.pinimg.com/originals/46/cd/20/46cd20a33efe24abce136ee09cea122a.png"
        alt
        style="width:4em; height:4em;"
        
      />

      <v-toolbar-title><router-link to="/">Tasks Manager</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn outlined>
        <router-link to="/login">Login</router-link>
      </v-btn>

      <v-btn outlined>
        <router-link to="/register">Register</router-link>
      </v-btn>

      <v-btn outlined>
        <router-link to="/profile">Profile</router-link>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {}
};
</script>

<style scoped>
</style>
