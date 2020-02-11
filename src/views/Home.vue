<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenidos a Burger Queen Jenn"/>
    <div>{{$store.state.bebidasFrias}}</div>
    <div>{{$store.state.hamburguesas}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import db from '../db';

export default {
  name: 'Home',
  data() {},
  components: {
    HelloWorld,
  },
  methods: {

  },
  computed: {
  },
  watch: {
  },
  mounted() {},
  created() {
    this.$store.dispatch('bindBebidasFrias');
    this.$store.dispatch('bindHamburguesas');
  },
};
</script>
