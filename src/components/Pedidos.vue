<template>
  <div>

    <div class="mt-3" v-for="(elemento, index) in listaProductos" :key="index.id">
      <div class="alert alert-warning" role="alert">
        <div class="d-flex justify-content-between align-items-center">
          <div>
                {{ elemento.Nombre }}
          </div>

          <div>
             <span class="badge badge-danger badge-pill">{{ elemento.cantidad }}</span>
             <span class="badge badge-success badge-pill">S/.{{ elemento.Precio }}.00</span>
             <button @click="disminuirProducto(index)" class="btn btn-warning btn-sm">-</button>
             <button @click="aumentarProducto(index)" class="btn btn-success btn-sm">+</button>
             <button @click="eliminar(index)" type="button" class="btn btn-danger btn-sm">
               <i class="fas fa-trash-alt"></i>
             </button>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <h4>TOTAL: {{ total }}.00</h4>
      <button @click="guardarOrden" class="btn btn-primary">Enviar Pedido</button>
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
    ...mapMutations([
      'eliminar',
      'aumentarProducto',
      'disminuirProducto',
    ]),
    ...mapActions([
      'guardarOrden',
    ]),
  },
  computed: {
    ...mapGetters([
      'total',
    ]),
    ...mapState([
      'listaProductos',
    ]),
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
