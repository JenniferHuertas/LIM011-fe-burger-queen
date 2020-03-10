<template>
  <div>

    <div>
        <ul class="list-group">
          <li class="list-group-item">{{ lista.Nombre }} S/.{{lista.Precio}}<button
          class="btn btn-danger btn-sm" @click="eliminar(index)">X</button></li>
        </ul>
        <span>{{ total }}</span>
    </div>

  </div>
</template>

<script>

import showElements from '../funciones';

export default {
  name: 'Pedidos',
  data() {
    return {
      lista: [],
    };
  },
  methods: {
    showElements,
    eliminar(index) {
      this.lista.splice(index, 1);
    },
  },
  computed: {
    total() {
      return this.lista.reduce((a, b) => a + b.Precio, 0);
    },

  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
