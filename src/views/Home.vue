<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <Menu/>
        </div>
        <div class="col">
          <Customer/>
          <Pedidos/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Pedidos from '@/components/Pedidos.vue';
import Customer from '@/components/Customer.vue';
import Menu from '@/components/Menu.vue';
// import db from '../db';

export default {
  name: 'Home',
  components: {
    Pedidos,
    Customer,
    Menu,
  },
  computed: {
  },
  watch: {
  },
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
