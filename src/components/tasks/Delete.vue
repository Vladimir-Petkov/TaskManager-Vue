<template>
  <div>
    <h1>Delete Task</h1>
    <form @submit.prevent="deleteTask">
      <label>Title</label>
      <input type="text" name="title" v-model="title" disabled />
      <label>Description</label>
      <textarea
        type="text"
        name="description"
        v-model="description"
        disabled
      ></textarea>
      <label for="tasks">Choosed task colum:</label>
      <select name="taskColum" v-model="taskColum" disabled>
        <option value="open">Open</option>
        <option value="inProgress">In progress</option>
        <option value="finished">Finished</option>
        <option value="deploy">Deploy</option>
      </select>
      <br />
      <input type="submit" value="Delete" />
    </form>
  </div>
</template>

<script>
export default {
  name: "DeleteTask",
  data() {
    return {
      title: "",
      description: "",
      taskColum: "",
      id: this.$route.params._id,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let token = localStorage.getItem("authtoken");

      fetch(`http://localhost:9999/api/task/getOne/${this.id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then((singleTask) => singleTask.json())
        .then((editT) => {
          this.title = editT.title;
          this.description = editT.description;
          this.taskColum = editT.taskColum;
          this.pplWorkingIn = editT.pplWorkingIn;
        })
        .catch(() => {
          this.$notify({
            group: "app",
            title: "Delete Task",
            text: `Task with ID: ${this.id} not found.`,
            type: "error",
          });
          this.$router.push("/");
        });
    },
    deleteTask() {
      let token = localStorage.getItem("authtoken");

      fetch(`http://localhost:9999/api/task/delete/${this.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then((singleTask) => singleTask.json())
        .then(() => {
          this.$notify({
            group: "app",
            title: "Delete Task",
            text: `Successfully Delete Task with Title: ${this.title}`,
            type: "success",
          });

          this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  text-align: center;
  color: white;
  text-decoration: underline;
  font-weight: bold;
}

/*Form style*/
form {
  display: grid;
  width: 25%;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-weight: bold;
}

input[type="text"],
input[type="password"],
input[type="number"],
textarea {
  padding: 8px;
  margin: 5px;
  border-radius: 10px;
  outline: none;
  border: 1px solid white;
}

input[type="submit"],
button {
  border: 2px solid #cebed7;
  background: #30bfbf;
  background-position: center;
  background-size: cover;
  color: white;
  font-weight: bold;
  width: 30%;
  margin: 0 auto;
  padding: 8px;
}

input[type="submit"]:hover {
  border: 2px solid #673d7e;
  background: #cebed7;
  color: #673d7e;
  text-decoration: underline;
}

select {
  margin: 5px;
  display: grid;
  color: white;
  background-color: black;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 10px;
  text-align: center;
  text-align-last: center;
  -moz-text-align-last: center;
}
</style>