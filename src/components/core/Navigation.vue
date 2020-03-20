<template>
  <v-card>
    <v-toolbar color="blue lighten-3" dense >
      <img src="https://i.pinimg.com/originals/46/cd/20/46cd20a33efe24abce136ee09cea122a.png" alt="" style="width:4em; height:4em;">

      <v-toolbar-title>Tasks Manager</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn outlined>
        <a href="/login">Login</a>
      </v-btn>

      <v-btn outlined>
        Register
      </v-btn>

      <v-btn outlined>
        Profile
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style scoped>
</style>
