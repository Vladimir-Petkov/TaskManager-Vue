<template>
  <div>
    <h1>Details Task</h1>
    <div class="task">
      <h2>Title: {{ tasks.title }}</h2>
      <p>Description: {{ tasks.description}}</p>
      <p>Colum: {{ tasks.taskColum }}</p>
      <h2>People working in</h2>
      <ul class="pplIn" v-for="p in tasks.pplWorkingIn" :key="p._id">
        <li>
          {{ p }}
          <template v-if="p == username">
            <v-btn color="#30bfbf" text @click="workingOut">Work Out</v-btn>
          </template>
        </li>
      </ul>
      <br />
      <div class="text-xs-center" v-if="!worIn">
        <v-btn color="#26A69A" text @click="workingIn">Work In Task</v-btn>
      </div>
      <br />
      <div class="text-xs-center">
        <v-btn color="#00B0FF" text :to="{ name: 'Edit', params: { _id: id}}">Edit Task</v-btn>
        <template v-if="creator == userId">
          <v-btn color="#DD2C00" text :to="{ name: 'Delete', params: { _id: id}}">Delete Task</v-btn>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      tasks: [],
      userId: sessionStorage.getItem("userId") || null,
      username: sessionStorage.getItem("username") || null,
      creator: "",
      worIn: false,
      id: this.$route.params._id
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http
        .get(`tasks/${this.id}`, "appdata", "Kinvey")
        .then(this.$http.handler)
        .then(d => {
          this.tasks = d;
          this.creator = d._acl.creator;

          if (this.tasks.pplWorkingIn && this.tasks.pplWorkingIn.length > 0) {
            for (const name of this.tasks.pplWorkingIn) {
              if (name == this.username) {
                this.worIn = true;
              }
            }
          }
        })
        .catch(() => {
          this.$notify({
            group: "app",
            title: "Details Task",
            text: `Task with ID: ${this.id} not found.`,
            type: "error"
          });
          this.$router.push("/");
        });
    },
    workingIn() {
      this.tasks.pplWorkingIn.push(this.username);

      this.$http
        .put(`tasks/${this.id}`, "appdata", "Kinvey", this.tasks)
        .then(this.$http.handler)
        .then(d => {
          this.tasks = d;

          this.worIn = true;

          this.$notify({
            group: "app",
            title: "Working In Task",
            text: `Successfully Working In Task with Title: ${this.tasks.title}`,
            type: "success"
          });
        });
    },
    workingOut() {
      let index = this.tasks.pplWorkingIn.indexOf(this.username);
      this.tasks.pplWorkingIn.splice(index, 1);

      this.$http
        .put(`tasks/${this.id}`, "appdata", "Kinvey", this.tasks)
        .then(this.$http.handler)
        .then(d => {
          this.tasks = d;

          this.worIn = false;

          this.$notify({
            group: "app",
            title: "Working Out Task",
            text: `Successfully Working Out Task with Title: ${this.tasks.title}`,
            type: "success"
          });
        });
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  text-align: center;
  color: white;
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 15px;
}

p {
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 15px;
}

div.task {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

div.task {
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 30%;
}

ul.pplIn {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: white;
}
</style>