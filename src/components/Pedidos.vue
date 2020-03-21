<template>
  <div>

    <div>
        <ul v-for="(elemento, index) in $store.state.listaProductos"
        :key="index.id"  class="list-group">
              <li class="list-group-item">{{ elemento.Nombre }} - S/.{{elemento.Precio}}</li>
            </ul>
        <span>{{  }}</span>
    </div>

  </div>
</template>

<script>

import {
  mapMutations, mapActions, mapGetters, mapState,
} from 'vuex';

export default {
  name: 'Pedidos',
  data() {
    return {

    };
  },
  methods: {
    // eliminar(index) {
    //   this.lista.splice(index, 1);
    // },
    ...mapMutations([
      'showElements',
    ]),
    ...mapActions([
      'tomarPedido',
    ]),
  },
  computed: {
    ...mapGetters([
      'llenarProductos',
    ]),
    ...mapState([
      'bebidasFrias',
      'bebidasCalientes',
      'hamburguesas',
      'sandwich',
      'acompañamientos',
      'adicionales',
      'listaProductos',
    ]),
    // total() {
    //   return this.lista.reduce((a, b) => a + b.Precio, 0);
    // },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
