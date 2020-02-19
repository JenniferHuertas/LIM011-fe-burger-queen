<template>
    <div>
        <div v-for="(el,index) in $store.state.adicionales" :key="index">
          <button v-if="el.Categoria == 'Adicionales'"
          class="btn btn-success">{{ el.Nombre }} S/.{{ el.Precio }}</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Adicionales',
};
</script>
