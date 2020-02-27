<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoh.png" class="img-fluid">
    <HelloWorld/>
    <Menu/>
    <Customer/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Customer from '@/components/Customer.vue';
import Menu from '@/components/Menu.vue';
// import db from '../db';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Customer,
    Menu,
  },
  computed: {
  },
  watch: {
  },
  mounted() {},
  created() {
    this.$store.dispatch('bindBebidasFrias');
    this.$store.dispatch('bindBebidasCalientes');
    this.$store.dispatch('bindHamburguesas');
    this.$store.dispatch('bindSandwich');
    this.$store.dispatch('bindAcompañamientos');
    this.$store.dispatch('bindAdicionales');
  },
};
</script>
