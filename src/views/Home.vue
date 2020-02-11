<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenidos a Burger Queen Jenn"/>
    <div>{{$store.state.todos}}</div>
    <div>{{$store.state.hamburguesas}}</div>
    <button @click="guardar">PRESS ME</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import db from '../db';

export default {
  name: 'Home',
  data() {},
  components: {
    HelloWorld,
  },
  methods: {
    guardar() {
      db.collection('todos').add({ text: 'test' });
    },
  },
  computed: {
  },
  watch: {
  },
  mounted() {},
  created() {
    this.$store.dispatch('bindTodos');
  },
};
</script>
