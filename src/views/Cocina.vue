<template>
  <div class="about">

    <button @click="elementos = mostrarEnCocina">Pedidos</button>

    <div class="mt-3" v-for="(elemento, index) in elementos" :key="index.id">
      <div class="alert alert-warning" role="alert">
        <div class="d-flex justify-content-between align-items-center">
          <div>
                {{ elemento.Nombre }}
          </div>

          <div>
             <span class="badge badge-danger badge-pill">{{ elemento.cantidad }}</span>
          </div>
        </div>
      </div>
    </div>

    <h1>helloooooooooooo</h1>


  </div>
</template>

<script>
import {
  mapMutations, mapActions, mapGetters, mapState,
} from 'vuex';

export default {
  name: 'Cocina',
  data() {
    return {
      elementos: [],
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
      'mostrarEnCocina',
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
