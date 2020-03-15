<template>
  <div class="tasks container">
    <div class="container">
      <a class="button" href="/create">Create New Task</a>
    </div>
    <header>
      <div class="column header open">Open</div>
      <div class="column header inProgress">In progress</div>
      <div class="column header finished">Finished</div>
      <div class="column header deploy">Deploy</div>
    </header>
    <ul class="column open">
      <!-- {{}} -->
      <!-- <th>
        <li>
          {{title}}
          <a class="icon edit" href="/edit/{{}}"></a>
          <a class="icon delete" href="/delete/{{}}"></a>
        </li>
      </th> -->
    </ul>
    <ul class="column inProgress">
      <!-- {{}} -->
      <th>
        <li>
          <!-- {{}} -->
          <a class="icon edit" href="/edit/{{}}"></a>
          <a class="icon delete" href="/delete/{{}}"></a>
        </li>
      </th>
    </ul>
    <ul class="column finished">
      <!-- {{}} -->
      <th>
        <li>
          <!-- {{title}} -->
          <a class="icon edit" href="/edit/{{}}"></a>
          <a class="icon delete" href="/delete/{{}}"></a>
        </li>
      </th>
    </ul>
    <ul class="column deploy">
      <!-- {{}} -->
      <th>
        <li>
          <!-- {{title}} -->
          <a class="icon edit" href="/edit/{{}}"></a>
          <a class="icon delete" href="/delete/{{}}"></a>
        </li>
      </th>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato");

* {
  margin: 0;
  padding: 0;
}

.container {
  margin: 15px auto;
  height: 80%;
}

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
  text-align: left;
  padding: 15px;
  border-radius: 8px;
  list-style: none;
  border: 0.15em solid #afafaf;
  box-shadow: 0 0 1px 1px #ccc;
  font-family: Lato, sans-serif;
  word-break: break-all;
  margin: 0.6em 0;
  background: #fafafa;
  transition: 0.15s background;
  font-size: 1.1em;
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
  background: #7dbdbd;
}

.column.inProgress {
  background: #66ccff;
}

.column.finished {
  background: #c8c3e6;
}

.column.deploy {
  background: #e6c3e6;
}

.header.open {
  background: #30bfbf;
}

.header.inProgress {
  background: #00aaff;
}

.header.finished {
  background: #8f7ee6;
}

.header.deploy {
  background: #e6c3e6;
}

a.button {
  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #fff;
  background-color: #0275d8;
  font-weight: 400;
  line-height: 2;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 2px solid transparent;
  padding: 0.3rem 1rem;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out;
  text-decoration: none;
}

a.button:hover {
  background-color: #0284e9;
  border-color: black;
}

.column li:hover .icon {
  opacity: 1;
}

.icon {
  opacity: 0;
  text-decoration: none;
  color: black;
  transition: 0.15s all;
}

.icon:hover {
  color: #8a8a8a;
}

.edit:before {
  content: "🖉";
}

.delete:before {
  content: "🗑";
}

</style>
