<template>
  <div>
    <template v-if="loggedIn">
      <div>
        <v-btn x-large block color="primary" dark text to="/create">Create New Task</v-btn>
      </div>
      <div class="tasks container">
        <header>
          <div class="column header open">Open</div>
          <div class="column header inProgress">In progress</div>
          <div class="column header finished">Finished</div>
          <div class="column header deploy">Deploy</div>
        </header>
        <ul>
          <ul class="column open">
            <li v-for="t in openTasks" :key="t._id">
              <single-task :title="t.title" :description="t.description" :_id="t._id" />
            </li>
          </ul>
          <ul class="column inProgress">
            <li v-for="t in inProgressTasks" :key="t._id">
              <single-task :title="t.title" :description="t.description" :_id="t._id" />
            </li>
          </ul>

          <ul class="column finished">
            <li v-for="t in finishedTasks" :key="t._id">
              <single-task :title="t.title" :description="t.description" :_id="t._id" />
            </li>
          </ul>

          <ul class="column deploy">
            <li v-for="t in deployTasks" :key="t._id">
              <single-task :title="t.title" :description="t.description" :_id="t._id" />
            </li>
          </ul>
        </ul>
      </div>
    </template>

    <template v-else>
      <div class="error-template">
        <div style=" padding-left: 20%; padding-top:3%;" class="col-md-7">
          <h2 class="featurette-heading">
            The tasks that
            <span class="text-muted">will blow your mind!</span>
          </h2>
          <p class="lead" style="padding-left: 12%">Join our community.</p>
          <p style="padding-left:35%" class="lead">Organizie an tasks.</p>
          <p
            style="padding-left:45%"
            class="lead"
          >Gathered as many people as possible for one purpose.</p>
          <p style="padding-left:50%" class="lead">Learn!</p>
          <p style="padding-left:60%" class="lead">Share!</p>
          <p style="padding-left:70%" class="lead">Enjoy the life!</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import singleTask from "./tasks/SingleTask.vue";

export default {
  name: "Home",
  components: {
    singleTask
  },
  data() {
    return {
      tasks: [],
      loggedIn: false
    };
  },
  computed: {
    openTasks() {
      return this.tasks.filter(t => t.taskColum == "open");
    },
    inProgressTasks() {
      return this.tasks.filter(t => t.taskColum == "inProgress");
    },
    finishedTasks() {
      return this.tasks.filter(t => t.taskColum == "finished");
    },
    deployTasks() {
      return this.tasks.filter(t => t.taskColum == "deploy");
    }
  },
  created() {
    this.fetchData();
    this.loggedIn = sessionStorage.getItem("authtoken");
  },
  methods: {
    fetchData() {
      if (!this.loggedIn) {
        return;
      } else {
        this.$http.get("tasks", "appdata", "Kinvey")
          .then(this.$http.handler)
          .then(d => {
            this.tasks = d;
          });
      }
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.loggedIn = sessionStorage.getItem("authtoken");
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato");

.container.tasks {
  text-align: center;
}

.column {
  display: inline-block;
  border: 0.1em solid #4b4b4b;
  padding: 0.3em;
  vertical-align: top;
  width: 25%;
}

.column li {
  border-radius: 8px;
  list-style: none;
  border: 0.15em solid #afafaf;
  box-shadow: 0 0 1px 1px #ccc;
  font-family: Lato, sans-serif;
  word-break: break-all;
  margin: 0.3em 0;
  background: white;
  transition: 0.15s;
  font-size: 1.1em;
  background-color: white;
}

.column li:hover {
  background: #c4f5c4;
}

.header {
  white-space: nowrap;
  font-size: 1.3em;
  font-family: Lato, sans-serif;
  text-align: center;
  color: white;
  padding: 0.3em 4.5px;
  border-radius: 5px 5px 0 0;
}

.column.open {
  background: #30bfbf;
}

.column.inProgress {
  background: orange;
}

.column.finished {
  background: green;
}

.column.deploy {
  background: red;
}

.header.open {
  background: #30bfbf;
}

.header.inProgress {
  background: orange;
}

.header.finished {
  background: green;
}

.header.deploy {
  background: red;
}

a.button {
  background-color: black; /* Green */
  color: rgba(255, 255, 255, 0.966);
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  display: flex;
  justify-content: center;
  border-radius: 200px;
}

.router-link-active {
  color: red;
}

.error-template {
  text-align: center;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: #30bfbf;
  font-size: 35px;
  margin: auto;
}

h2 {
  margin-bottom: 15px;
}

p {
  margin-bottom: 15px;
}
</style>
