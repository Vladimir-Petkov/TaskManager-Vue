<template>
  <div id="registerForm">
    <h1>Register Form</h1>
    <form @submit.prevent="register">
      <label>Username</label>
      <input
        type="text"
        name="username"
        id="registerUsername"
        v-model="username"
        @blur="$v.username.$touch"
      />
      <template v-if="$v.username.$error">
        <p v-if="!$v.username.required" class="error">Username is required</p>
        <p v-else-if="!$v.username.minLength" class="error">
          Usernames must be at least 4 characters long
        </p>
        <p v-else-if="!$v.username.maxLength" class="error">
          Username must be between 4 and 10 characters long
        </p>
      </template>

      <label>Password</label>
      <input
        type="password"
        name="password"
        id="registerPassword"
        v-model="password"
        @blur="$v.password.$touch"
      />
      <template v-if="$v.password.$error">
        <p v-if="!$v.password.required" class="error">Password is required</p>
        <p v-else-if="!$v.password.minLength" class="error">
          Password must be at least 5 characters long
        </p>
        <p v-else-if="!$v.password.maxLength" class="error">
          Password must be between 5 and 12 characters long
        </p>
      </template>

      <label>Repeat Password</label>
      <input
        type="password"
        name="rePassword"
        id="registerRepeatPassword"
        v-model="rePassword"
        @blur="$v.rePassword.$touch"
      />
      <template v-if="$v.rePassword.$error">
        <p v-if="!$v.rePassword.required" class="error">
          Repeat Password is required
        </p>
        <p v-else-if="!$v.rePassword.sameAs" class="error">
          Repeat Password does not match password!
        </p>
      </template>

      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  sameAs,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: "",
      rePassword: "",
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(10),
    },
    password: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(12),
    },
    rePassword: {
      required,
      sameAs: sameAs("password"),
    },
  },
  methods: {
    register() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      } else {
        const payload = {
          username: this.username,
          password: this.password,
        };

        fetch("http://localhost:9999/api/user/register", {
          body: JSON.stringify(payload),
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then(() => {
            this.$notify({
              group: "auth",
              title: "Register",
              text: "Successfully Registered",
              type: "success",
            });

            this.$router.push("login");
          })
          .catch(() => {
            this.$notify({
              group: "auth",
              title: "Register",
              text: "Username is already registered",
              width: "200px",
              type: "error",
            });

            (this.password = ""), (this.rePassword = "");
          });
      }
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