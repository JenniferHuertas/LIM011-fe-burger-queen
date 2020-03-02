<template>
    <div class="container mt-5">
          <nav class="navbar navbar-light bg-light">
            <form id="dynamic-component-demo" class="form-inline">
                <button @click="showMenu('des')" class="btn btn-outline-success"
                type="button">Desayuno</button>
                <button @click="showMenu('al')"
                class="btn btn-outline-secondary"
                type="button">Almuerzo y Cena</button>
                <button @click="showMenu('adi')"
                class="btn btn-outline-warning"
                type="button">Adicionales</button>
            </form>
          </nav>

      <Desayuno v-if="menuTypes.des"/>
      <Almuerzo v-if="menuTypes.al"/>
      <Adicionales v-if="menuTypes.adi"/>
    </div>
</template>

<script>

import Desayuno from './Desayuno.vue';
import Almuerzo from './Almuerzo.vue';
import Adicionales from './Adicionales.vue';

export default {
  name: 'Menu',
  data() {
    return {
      menuTypes: {
        des: false,
        al: false,
        adi: false,
      },


    };
  },
  methods: {
    showMenu(menuType) {
      Object.keys(this.menuTypes).forEach((el) => {
        this.menuTypes[el] = el === menuType;
      });
    },
  },
  components: {
    Desayuno,
    Almuerzo,
    Adicionales,
  },
};
</script>
