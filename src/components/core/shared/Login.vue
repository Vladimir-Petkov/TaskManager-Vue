<template>
  <div id="loginForm">
    <h1>Login Form</h1>
    <form @submit.prevent="submitHandler">
      <label>Username</label>
      <input
        type="text"
        name="username"
        id="loginUsername"
        v-model="username"
        @blur="$v.username.$touch"
      />
      <template v-if="$v.username.$error">
        <p v-if="!$v.username.required" class="error">Username is required</p>
      </template>


      <label>Password</label>
      <input
        type="password"
        name="password"
        id="loginPassword"
        v-model="password"
        @blur="$v.password.$touch"
      />
      <template v-if="$v.password.$error">
        <p v-if="!$v.password.required" class="error">Password is required</p>
      </template>
      
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "Login",
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
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
  width: 45%;
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
</style>