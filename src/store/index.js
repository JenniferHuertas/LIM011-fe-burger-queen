import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from '../db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    hamburguesas: [],
  },
  mutations: vuexfireMutations,
  actions: {
    bindTodos: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('todos', db.collection('Bebidas Calientes'))),
    bindHamburguesas: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('todos', db.collection('Hamburguesas'))),
  },
  modules: {},
});
