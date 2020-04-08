<template>
  <div>
    <h2 style="text-align:center">User Profile Card</h2>

    <div class="card">
      <img
        src="https://banner2.cleanpng.com/20180920/efk/kisspng-user-logo-information-service-design-5ba34f88a0c3a6.5907352915374293846585.jpg"
        alt="John"
        style="width:80%"
      />
      <h1>Username: {{ username }}</h1>
      <p>My Created Tasks: {{ myTasks.length || 0 }}</p>
      <ul class="pplIn" v-for="t in myTasks" :key="t._id">
        <li>{{ t.title }}</li>
      </ul>
      <br />

      <p>The Tasks I work on: {{ workingOn.length || 0 }}</p>
      <ul class="pplIn" v-for="(w, i) in workingOn" :key="i">
        <li>{{ w }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      username: sessionStorage.getItem("username") || null,
      myTasks: [],
      workingOn: []
    };
  },
  created() {
    this.getMyTasks();
    this.tasksIworkedOn();
  },
  methods: {
    getMyTasks() {
      if (!this.username) {
        return;
      } else {
        this.$http.get(
          `tasks?query={"_acl.creator":"${sessionStorage.getItem("userId")}"}`,
          "appdata",
          "Kinvey"
        )
          .then(this.$http.handler)
          .then(t => {
            this.myTasks = t;
          });
      }
    },
    tasksIworkedOn() {
      this.$http.get("tasks", "appdata", "Kinvey")
        .then(this.$http.handler)
        .then(t => {
          t.forEach(t => {
            for (const name of t.pplWorkingIn) {
              if (name == this.username) {
                this.workingOn.push(t.title);
              }
            }
          });
        });
    }
  }
};
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: auto;
  padding: 70px;
  text-align: center;
}

.title {
  color: white;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #30bfbf;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: white;
}

button:hover,
a:hover {
  opacity: 0.7;
}

h1 {
  color: white;
  margin-bottom: 5px;
}

p {
  color: white;
  margin-bottom: 5px;
}

ul.pplIn {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: white;
  margin-bottom: 5px;
}
</style>