<template>
    <div>
      <div class="d-flex align-content-start flex-wrap">
        <div v-for="(el, index) in $store.state.bebidasCalientes"
        :key="index.toString().concat('bc')">
          <button v-if="el.Categoria == 'Desayuno'" @click="lista = showElements(lista, el)"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }} </button>
        </div>

        <div v-for="(el,index) in $store.state.bebidasFrias" :key="index.toString().concat('bf')">
          <button v-if="el.Categoria == 'Desayuno'" @click="lista = showElements(lista, el)"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
        </div>

        <div v-for="(el, index) in $store.state.sandwich" :key="index.toString().concat('sw')">
          <button v-if="el.Categoria == 'Desayuno'" @click="lista = showElements(lista, el)"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
        </div>
      </div>

        <ul v-for="(el) in lista" :key="el.id" class="list-group">
          <li class="list-group-item">{{ el.Nombre }} S/.{{el.Precio}}</li>
        </ul>


    </div>
</template>

<script>
import showElements from '../funciones';

export default {
  name: 'Desayuno',
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
