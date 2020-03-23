<template>
  <div>
    <template>
      <a class="button" style="font-size: 20px" href="/create">Create New Task</a>
    </template>
    <div class="tasks container">
      <header>
        <div class="column header open">Open</div>
        <div class="column header inProgress">In progress</div>
        <div class="column header finished">Finished</div>
        <div class="column header deploy">Deploy</div>
      </header>
      <ul class="column open">
        <!-- {{}} -->
        <li>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(item,i) in 5" :key="i">
              <v-expansion-panel-header>{{item}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                <v-card-actions>
                  <v-btn color="#00B0FF" text>Edit</v-btn>
                  <v-btn color="#DD2C00" text>Delete</v-btn>
                </v-card-actions>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </li>
      </ul>
      <ul class="column inProgress">
        <!-- {{}} -->
        <li>
          {{'Gosho'}}
          <a class="icon edit" href="/edit/{{}}"></a>
          <a class="icon delete" href="/delete/{{}}"></a>
        </li>
      </ul>
      <ul class="column finished">
        <!-- {{}} -->
        <li>
          {{'Gosho'}}
          <a class="icon edit" href="/edit/{{}}"></a>
          <a class="icon delete" href="/delete/{{}}"></a>
        </li>
      </ul>
      <ul class="column deploy">
        <!-- {{}} -->
        <li>
          {{'Gosho'}}
          <a class="icon edit" href="/edit/{{}}"></a>
          <a class="icon delete" href="/delete/{{}}"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>
