<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel class="elevation-0">
          <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ description }}
            <v-card-actions>
              <v-btn color="#00B0FF" text to="/edit">Edit</v-btn>
              <v-btn color="#DD2C00" text to="/delete">Delete</v-btn>
            </v-card-actions>
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <li>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ description }}
            <v-card-actions>
              <v-btn color="#00B0FF" text to="/edit">Edit</v-btn>
              <v-btn color="#DD2C00" text to="/delete">Delete</v-btn>
            </v-card-actions>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </li>-->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {
    title: String,
    description: String,
    taskColum: String
  }
};
</script>

<style scoped>
.v-expansion-panel-header__icon::before {
  box-shadow: none !important;
}
</style>