<template>
    <div class="container mt-5">
      <div class="d-flex justify-content-start align-items-center">
        <div v-for="(el,index) in $store.state.adicionales" :key="index.toString().concat('ad')">
          <button v-if="el.Categoria == 'Adicionales'" @click="lista = showElements(lista, el)"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
        </div>
      </div>

      <ul v-for="(el) in lista" :key="el.id" class="list-group">
        <li class="list-group-item">{{ el.Nombre }} S/.{{ el.Precio }}</li>
      </ul>
    </div>
</template>

<script>
import showElements from '../funciones';

export default {
  name: 'Adicionales',
  data() {
    return {
      lista: [],
    };
  },
  methods: {
    showElements,
  },
};
</script>
