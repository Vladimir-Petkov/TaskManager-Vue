<template>
  <div id="detailsMovie">
    <h1>Details Task</h1>
    <div class="task">
      <h2>Task Tittle: {{ tasks.title }}</h2>
      <p>Task Description: {{ tasks.description }}</p>
      <p>Task Colum: {{ tasks.taskColum }}</p>
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
        <v-btn color="#00B0FF" text :to="{ name: 'Edit', params: { _id: tasks._id}}">Edit Task</v-btn>
        <template v-if="creator == userId">
          <v-btn color="#DD2C00" text :to="{ name: 'Delete', params: { _id: tasks._id}}">Delete Task</v-btn>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import requester from "../../../requester.js";

export default {
  name: "Details",
  mixins: [requester],
  data() {
    return {
      tasks: [],
      userId: sessionStorage.getItem("userId"),
      username: sessionStorage.getItem("username"),
      creator: "",
      worIn: false
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const id = this.$route.params._id;

      this.get(`tasks/${id}`, "appdata", "Kinvey")
        .then(this.handler)
        .then(d => {
          this.tasks = d;
          this.creator = d._acl.creator;
        });
    },
    workingIn() {
      const id = this.$route.params._id;
      const username = sessionStorage.getItem("username");

      this.tasks.pplWorkingIn.push(username);

      this.put(`tasks/${id}`, "appdata", "Kinvey", this.tasks)
        .then(this.handler)
        .then(d => {
          this.tasks = d;

          this.worIn = true;
        });
    },
    workingOut() {
      const id = this.$route.params._id;
      const username = sessionStorage.getItem("username");

      let index = this.tasks.pplWorkingIn.indexOf(username);
      this.tasks.pplWorkingIn.splice(index, 1);

      this.put(`tasks/${id}`, "appdata", "Kinvey", this.tasks)
        .then(this.handler)
        .then(d => {
          this.tasks = d;

          this.worIn = true;
        });
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        
      }
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
  justify-content: start;
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