<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-start align-items-stretch">

            <div v-for="(el, index) in $store.state.bebidasCalientes"
            :key="index.toString().concat('bc')">
              <button v-if="el.Categoria == 'Desayuno'" @click="lista = showElements(lista, el)"
              class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }} </button>
            </div>

            <div v-for="(el,index) in $store.state.bebidasFrias"
            :key="index.toString().concat('bf')">
              <button v-if="el.Categoria == 'Desayuno'" @click="lista = showElements(lista, el)"
              class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
            </div>

            <div v-for="(el, index) in $store.state.sandwich"
            :key="index.toString().concat('sw')">
              <button v-if="el.Categoria == 'Desayuno'" @click="lista = showElements(lista, el)"
              class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  name: 'Desayuno',

};
</script>
