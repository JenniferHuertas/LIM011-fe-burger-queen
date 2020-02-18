<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ mensaje }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    // eslint-disable-next-line vue/no-dupe-keys
    mensaje: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
