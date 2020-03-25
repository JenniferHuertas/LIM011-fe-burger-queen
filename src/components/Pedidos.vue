<template>
  <div>

    <div class="mt-3" v-for="(elemento, index) in listaProductos" :key="index.id">
      <div class="alert alert-warning" role="alert">
        <div class="d-flex justify-content-between align-items-center">
          <div>
                {{ elemento.Nombre }} - S/.{{elemento.Precio}} - {{elemento.cantidad}}
          </div>

          <div>
             <button @click="disminuirProducto(index)" class="btn btn-warning btn-sm">-</button>
             <button @click="aumentarProducto(index)" class="btn btn-success btn-sm">+</button>
             <button @click="eliminar(index)" type="button" class="btn btn-danger btn-sm">x</button>
          </div>
        </div>
      </div>
    </div>
    <h4>TOTAL: {{ total }}</h4>

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
      'eliminar',
      'aumentarProducto',
      'disminuirProducto',
    ]),
    ...mapActions([
      '',
    ]),
  },
  computed: {
    ...mapGetters([
      'total',
    ]),
    ...mapState([
      'listaProductos',
    ]),
    // total() {
    //   return this.lista.reduce((a, b) => a + b.Precio, 0);
    // },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
