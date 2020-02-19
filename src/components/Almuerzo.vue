<template>
    <div>
      <div v-for="(el,index) in $store.state.hamburguesas" :key="index">
          <button v-if="el.Categoria == 'Almuerzos'"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
      </div>

      <div v-for="(el,index) in $store.state.acompañamientos" :key="index">
          <button v-if="el.Categoria == 'Almuerzos'"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
      </div>

      <div v-for="(el,index) in $store.state.bebidasFrias" :key="index">
          <button v-if="el.Categoria == 'Almuerzos'"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Almuerzo',
};
</script>
