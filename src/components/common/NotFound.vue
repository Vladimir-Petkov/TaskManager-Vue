<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="fouronefour">
          <img
            class="no-found-picture"
            src="https://ih0.redbubble.net/image.349118470.6262/fposter,small,wall_texture,product,750x1000.u1.jpg"
          />
        </div>
        <div class="error-template">
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <h3 class="error-details">TaskManager cannot find any task...</h3>
          <div class="actions">
            <v-btn to="/">Home page</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {};
  }
};
</script>

<style scoped>
.error-template {
  margin: 0 auto;
  text-align: center;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: #ddd;
}

.no-found-picture,
.home-event-picture {
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>