<template>
  <div>
    <template>
      <a class="button" href="/create">Create New Task</a>
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
          <v-card>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfullyGreyhound divisely hello coldly fonwderfullyGreyhound divisely hello coldly fonwderfullyGreyhound divisely hello coldly fonwderfullyGreyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>
            <v-card-actions>
              <v-btn small>Button</v-btn>
              <v-btn small>Button</v-btn>
            </v-card-actions>
          </v-card>
        </li>
        <li>
          {{'Test'}}
          <a class="icon edit" href="/edit/{{}}"></a>
          <a class="icon delete" href="/delete/{{}}"></a>
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
  name: "App",
  components: {}
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
  background-color: red; /* Green */
  border: 5px red;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  display: flex;
  justify-content: center;
  border-radius: 25px;
}

a.button:hover {
  /* background-color: #0284e9; */
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
