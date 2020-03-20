<template>
  <div>

    <div>
        <ul v-for="(tomarPedido, index) in elementos" :key="index.id"  class="list-group">
              <li class="list-group-item"
              >{{ tomarPedido }} - S/.{{ tomarPedido }}</li>
            </ul>


        <span>{{  }}</span>
    </div>

  </div>
</template>

<script>

import {
  mapMutations, mapActions, mapGetters,
} from 'vuex';

export default {
  name: 'Pedidos',
  data() {
    return {
      elementos: [],
    };
  },
  methods: {
    // eliminar(index) {
    //   this.lista.splice(index, 1);
    // },
    ...mapMutations([

    ]),
    ...mapActions([
      'tomarPedido',
    ]),
  },
  computed: {
    ...mapGetters([
      'llenarProductos',
    ]),
    // total() {
    //   return this.lista.reduce((a, b) => a + b.Precio, 0);
    // },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
