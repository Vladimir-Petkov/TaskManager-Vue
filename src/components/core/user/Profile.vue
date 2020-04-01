<template>
  <div>
    <h2 style="text-align:center">User Profile Card</h2>

    <div class="card">
      <img
        src="https://banner2.cleanpng.com/20180920/efk/kisspng-user-logo-information-service-design-5ba34f88a0c3a6.5907352915374293846585.jpg"
        alt="John"
        style="width:80%"
      />
      <h1>{{ username }}</h1>
      <p>My Tasks: {{ myTasks }}</p>
    </div>
  </div>
</template>

<script>
import requester from "../../../requester.js";

export default {
  name: "Profile",
  mixins: [requester],
  data() {
    return {
      username: sessionStorage.getItem("username") || null,
      myTasks: 0
    };
  },
  created() {
    this.getMyTasks();
  },
  methods: {
    getMyTasks() {
      if (!this.username) {
        return;
      } else {
        this.get(
          `tasks?query={"_acl.creator":"${sessionStorage.getItem("userId")}"}`,
          "appdata",
          "Kinvey"
        )
          .then(this.handler)
          .then(t => {
            this.myTasks = t.length;
          });
      }
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
}

p {
  color: white;
}
</style>