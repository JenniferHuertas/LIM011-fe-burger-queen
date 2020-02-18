<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoh.png">
    <HelloWorld msg="Bienvenidos a Señor Burger" mensaje="hola a todos"/>
    <Customer/>
    <Desayuno/>

    <div v-for="bebidas in $store.state.bebidasCalientes" :key="bebidas.id">
      <button>{{ bebidas.Nombre }}</button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Customer from '@/components/Customer.vue';
import Desayuno from '@/components/Desayuno.vue';
// import db from '../db';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Customer,
    Desayuno,
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
