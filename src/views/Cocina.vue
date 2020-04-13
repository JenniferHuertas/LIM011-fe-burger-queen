<template>
  <div class="about">
    <!-- <table class="table table-hover table-bordered table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-danger">
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> -->


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
    ]),
  },
  computed: {
    ...mapGetters([
      'total',
    ]),
    ...mapState([
      'nuevaOrden',
    ]),
  },
  created() {
    this.$store.dispatch('bindnuevoPedido');
  },
};
</script>
