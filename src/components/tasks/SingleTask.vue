<template>
  <v-expansion-panels focusable>
    <v-expansion-panel>
      <v-expansion-panel-header hide-actions>{{ title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ description }}
        <br />
        <v-btn color="#00B0FF" text :to="{ name: 'Details', params: { _id: _id} }">Details</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
 
<script>
export default {
  name: "SingleTask",
  props: {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
};
</script>
 
<style scoped></style>