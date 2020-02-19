<template>
    <div>
        <div v-for="(el, index) in $store.state.bebidasCalientes" :key="index">
          <button v-if="el.Categoria == 'Desayuno'"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
        </div>

        <div v-for="(el,index) in $store.state.bebidasFrias" :key="index">
          <button v-if="el.Categoria == 'Desayuno'"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
        </div>

        <div v-for="(el, index) in $store.state.sandwich" :key="index">
          <button v-if="el.Categoria == 'Desayuno'"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Desayuno',
};
</script>
