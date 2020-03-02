<template>
    <div class="container mt-5">
          <h5>{{ titulo }}</h5>
          <input type="text" class="form-control my-3" v-model="nuevoCliente"
          v-on:keyup.enter="agregarCliente">
          <button class="btn btn-primary" @click="agregarCliente">Agregar</button>
          <p>{{ clientes[0] ? clientes[0].cliente:'' }}</p>
    </div>
</template>

<script>
export default {
  name: 'Customer',
  data() {
    return {
      titulo: 'Agregar cliente',
      clientes: [],
      nuevoCliente: '',
    };
  },
  methods: {
    agregarCliente() {
      this.clientes.push({
        cliente: this.nuevoCliente,
      });
      this.nuevoCliente = '';
    },
  },
};
</script>
