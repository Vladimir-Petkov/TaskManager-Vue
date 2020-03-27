<template>
  <div>
    <Header />
      <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/core/common/Header.vue';
import Footer from './components/core/common/Footer.vue';

export default {
  name: "App",
  data: function() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
html {
  background-image: url("https://artbyrice.com/wp-content/uploads/2018/08/black-background-wood-i-e29da4-4k-hd-desktop-wallpaper-for-4k-ultra-hd.jpg");
  font-family: "Nunito", sans-serif;
}

p.error {
  text-align: center;
  background-color: red;
  padding: 8px;
  font-weight: bold;
  margin: 5px;
  border: 5px;
  border-radius: 10px;
}
</style>
