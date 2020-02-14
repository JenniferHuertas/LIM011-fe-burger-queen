<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoh.png">
    <HelloWorld msg="Bienvenidos a Señor Burger"/>
    <div class="alert alert-secondary" role="alert">
      <input type="text" class="form-control my-3" v-model="nuevoCliente">
      <button class="btn btn-primary" @click="agregarCliente">Agregar</button>
      <p>{{ clientes }}</p>
    </div>

    <div>{{$store.state.bebidasFrias}}</div>
    <div>{{$store.state.bebidasCalientes}}</div>
    <div>{{$store.state.hamburguesas}}</div>
    <div>{{$store.state.sandwich}}</div>
    <div>{{$store.state.acompañamientos}}</div>
    <div>{{$store.state.adicionales}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import db from '../db';

export default {
  name: 'Home',
  data() {
    return {
      titulo: 'Agregar cliente',
      clientes: [],
      nuevoCliente: '',
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    agregarCliente() {
      this.clientes.push({
        cliente: this.nuevoCliente,
      });
    },
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
