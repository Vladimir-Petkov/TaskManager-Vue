<template>
  <div>
    <h1>Create Task</h1>
    <form @submit.prevent="submitHandler">
      <label>Title</label>
      <input type="text" name="title" id="createImage" v-model="title" @blur="$v.title.$touch" />
      <template v-if="$v.title.$error">
        <p v-if="!$v.title.required" class="error">Title is required</p>
        <p v-else-if="!$v.title.minLength" class="error">Title must be at least 5 characters long</p>
        <p
          v-else-if="!$v.title.maxLength"
          class="error"
        >Title must be between 5 and 20 characters long</p>
      </template>

      <label>Description</label>
      <textarea
        type="text"
        name="description"
        id="createDescription"
        v-model="description"
        @blur="$v.description.$touch"
      ></textarea>
      <template v-if="$v.description.$error">
        <p v-if="!$v.description.required" class="error">Description is required</p>
        <p
          v-else-if="!$v.description.minLength"
          class="error"
        >Description must be at least 10 characters long</p>
        <p
          v-else-if="!$v.description.maxLength"
          class="error"
        >Description must be between 10 and 100 characters long</p>
      </template>

      <label for="tasks">Choose a task colum:</label>
      <select name="taskColum" v-model="taskColum" @blur="$v.taskColum.$touch">
        <option disabled value>Select...</option>
        <option value="open">Open</option>
        <option value="inProgress">In progress</option>
        <option value="finished">Finished</option>
        <option value="deploy">Deploy</option>
      </select>
      <template v-if="$v.taskColum.$error">
        <p v-if="!$v.taskColum.required" class="error">Task Colum is required</p>
      </template>
      <br />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import requester from "../../../requester.js";

export default {
  name: "CreateTask",
  mixins: [validationMixin, requester],
  data() {
    return {
      title: "",
      description: "",
      taskColum: ""
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(20)
    },
    description: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(100)
    },
    taskColum: {
      required
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      } else {
        const payload = {
          title: this.title,
          description: this.description,
          taskColum: this.taskColum
        };
        console.log(payload);

        this.post("tasks", "appdata", "Kinvey", payload)
          .then(this.handler)
          .then(() => {
            this.$router.push("/");
          });
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
  border-radius: 20px;
  text-align: center;
  text-align-last: center;
  -moz-text-align-last: center;
}
</style>