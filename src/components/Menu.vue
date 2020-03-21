<template>
    <div class="container mt-5">
          <nav class="navbar navbar-light bg-light">
            <form id="dynamic-component-demo" class="form-inline">
                <button
                v-on:click="elementos = llenarProductos('Categoria', 'hb')"
                class="btn btn-outline-success"
                type="button">Hamburguesas</button>

                <button
                v-on:click="elementos = llenarProductos('Categoria', 'sw')"
                class="btn btn-outline-primary"
                type="button">Sandwich</button>

                <button
                v-on:click="elementos = llenarProductos('Categoria', 'bf')"
                class="btn btn-outline-secondary"
                type="button">Bebidas Frias</button>

                <button
                v-on:click="elementos = llenarProductos('Categoria', 'bc')"
                class="btn btn-outline-danger"
                type="button">Bebidas Calientes</button>

                <button
                v-on:click="elementos = llenarProductos('Categoria', 'ac')"
                class="btn btn-outline-warning"
                type="button">Acompañamientos</button>

                <button
                v-on:click="elementos = llenarProductos('Categoria', 'ad')"
                class="btn btn-outline-dark"
                type="button">Adicionales</button>

            </form>
          </nav>

          <div>
            <ul v-for="(elemento, index) in elementos" :key="index.id"  class="list-group">
              <li class="list-group-item" v-on:click="tomarPedido(elemento)"
              >{{ elemento.Nombre }} - S/.{{elemento.Precio}}</li>
            </ul>

            <tr>
              <td>vxovjdfojbofd</td>
            </tr>
          </div>

    </div>
</template>

<script>

import {
  mapGetters, mapActions,
} from 'vuex';

export default {
  name: 'Menu',
  data() {
    return {
      elementos: [],
    };
  },
  computed: {
    ...mapGetters([
      'llenarProductos',
    ]),
  },
  methods: {
    ...mapActions([
      'tomarPedido',
    ]),
  },
  components: {

  },
};
</script>
