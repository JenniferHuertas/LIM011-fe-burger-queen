<template>
    <div class="container mt-5">
          <nav class="navbar navbar-light bg-light">
            <form id="dynamic-component-demo" class="form-inline">
                <button v-on:click="elementos = hamburguesas" class="btn btn-outline-success"
                type="button">Hamburguesas</button>

                <button v-on:click="elementos = sandwich" class="btn btn-outline-secondary"
                type="button">Sandwich</button>

                <button v-on:click="elementos = bebidasFrias" class="btn btn-outline-warning"
                type="button">Bebidas Frias</button>

                <button v-on:click="elementos = bebidasCalientes" class="btn btn-outline-primary"
                type="button">Bebidas Calientes</button>

                <button v-on:click="elementos = acompañamientos" class="btn btn-outline-danger"
                type="button">Acompañamientos</button>

                <button v-on:click="elementos = adicionales" class="btn btn-outline-dark"
                type="button">Adicionales</button>
            </form>
          </nav>

          <div>
            <ul v-for="elemento in elementos" :key="elemento.id"  class="list-group">
              <li class="list-group-item" @click="showElements"
              >{{ elemento.Nombre }} - S/.{{elemento.Precio}}</li>
            </ul>
          </div>

    </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex';
import showElements from '../funciones';

export default {
  name: 'Menu',
  data() {
    return {
      elementos: [],
    };
  },
  computed: {
    ...mapGetters([
      'mostrarCategoria',
    ]),
    ...mapState([
      'hamburguesas',
      'sandwich',
      'bebidasFrias',
      'bebidasCalientes',
      'acompañamientos',
      'adicionales',
    ]),
  },
  methods: {
    showElements,
  },
  components: {

  },
};
</script>
