<template>
  <div id="detailsMovie">
    <h1>Details task</h1>
    <div class="task">
      <h2>{{ 'dsadsadas' }}</h2>
      <p>{{ 'description' }}</p>
      <p>{{ 'taskColum' }}</p>
      <h2>People working in</h2>
      <ul class="pplIn">
        <li>{{ 'pplWorkingIn' }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: {
    title: String,
    description: String,
    taskColum: String,
    _id: String,
    pplWorkingIn: Array
  }
};
</script>

<style scoped>
h1, h2 {
  text-align: center;
  color: white;
  text-decoration: underline;
  font-weight: bold;
}

p {
   text-align: center;
   color: white;
   font-weight: bold;
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
  width: 30%;;
}

ul.pplIn {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: white;
}
</style>