<template>
    <div>
        <div v-for="(el,index) in $store.state.bebidasFrias" :key="index">
          <button v-if="el.Categoria == 'Desayuno'"
          class="btn btn-success">{{ el.Nombre }} {{ el.Precio }}</button>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Desayuno',
  props: {
    Nombre: String,
    Precio: Number,
  },
};
</script>
