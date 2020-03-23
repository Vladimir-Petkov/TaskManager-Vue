<template>
  <div>
    <h1>Edit task</h1>
    <form action="/movie/edit/{{}}" method="POST">
      <label>Title</label>
      <input type="text" name="title" value="{{}}" id="editTitle" required/>
      <label>Description</label>
      <textarea type="text" id="editDescription" name="description" required>{{}}</textarea>
      <label for="cars">Choose a task colum:</label>
      <select id="cars" required>
        <option value="open">Open</option>
        <option value="inProgress">In progress</option>
        <option value="finished">Finished</option>
        <option value="deploy">Deploy</option>
      </select>
      <br />
      <input type="submit" value="Edit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
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