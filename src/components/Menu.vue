<template>
    <div>
        <nav class="navbar navbar-light bg-light">
        <form id="dynamic-component-demo" class="form-inline">
            <button class="btn btn-outline-success" type="button">Desayuno</button>
            <button class="btn btn-outline-secondary" type="button">Almuerzo y Cena</button>
            <button class="btn btn-outline-warning" type="button">Adicionales</button>
        </form>
        </nav>
      <Desayuno/>
      <Almuerzo/>
      <Adicionales/>
    </div>
</template>

<script>

import Desayuno from './Desayuno.vue';
import Almuerzo from './Almuerzo.vue';
import Adicionales from './Adicionales.vue';

export default {
  name: 'Menu',
  components: {
    Desayuno,
    Almuerzo,
    Adicionales,
  },
  data() {
    return {
      tabs: ['Desayuno', 'Almuerzo', 'Adicionales'],
    };
  },
  computed: {
    currentTabComponent() {
      return `tab-${this.currentTab.toLowerCase()}`;
    },
  },
};
</script>
