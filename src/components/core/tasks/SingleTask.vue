<template>
  <div>
    <v-expansion-panels focusable class="elevation-0">
      <v-expansion-panel>
        <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ description }}
          <v-card-actions>
            <v-btn color="#00B0FF" text :to="{ name: 'Edit', params: { _id: _id}}">Edit</v-btn>
            <v-btn color="#DD2C00" text :to="{ name: 'Delete', params: { _id: _id}}">Delete</v-btn>
          </v-card-actions>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {
    title: String,
    description: String,
    taskColum: String,
    _id: String
  }
};
</script>

<style scoped>
.v-expansion-panels {
  box-shadow: none;
}
</style>