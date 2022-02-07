<template>
  <div class="home">
    <HomePage msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line
import HomePage from '../components/HomePage.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    HomePage,
  },
});
</script>
