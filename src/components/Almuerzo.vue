<template>
    <div>
      <div class="d-flex align-content-start flex-wrap">
        <div v-for="(el,index) in $store.state.hamburguesas" :key="index.toString().concat('hb')">
            <button v-if="el.Categoria == 'Almuerzos'" @click="lista = showElements(lista, el)"
            class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
        </div>

        <div v-for="(el,index) in $store.state.acompañamientos"
        :key="index.toString().concat('ac')">
            <button v-if="el.Categoria == 'Almuerzos'" @click="lista = showElements(lista, el)"
            class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
        </div>

        <div v-for="(el,index) in $store.state.bebidasFrias" :key="index.toString().concat('bfs')">
            <button v-if="el.Categoria == 'Almuerzos'" @click="lista = showElements(lista, el)"
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
  name: 'Almuerzo',
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
