<template>
  <div>
    <v-toolbar dense color="#30bfbf">
      <img
        src="https://i.pinimg.com/originals/46/cd/20/46cd20a33efe24abce136ee09cea122a.png"
        alt
        style="width:4em; height:4em;"
        
      />

      <v-toolbar-title><a href="/">Tasks Manager</a></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn outlined>
        <a href="/login">Login</a>
      </v-btn>

      <v-btn outlined>Register</v-btn>

      <v-btn outlined>Profile</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style scoped>
</style>
