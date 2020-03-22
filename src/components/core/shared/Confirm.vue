Vue.use(Vuetify);
Vue.component("custom-dialog", {
  template: `
    <v-dialog :value="value" @input="$emit('input')">
      <v-card>         
        <v-btn color="red" @click.native="$emit('input')">Close</v-btn>
      </v-card>
    </v-dialog>`,
  props: ["value"]
});

var vm = new Vue({
  el: "#app",
  data() {
    return {
      dialog: false
    };
  }
});
