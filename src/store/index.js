import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from '../db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bebidasFrias: [],
    hamburguesas: [],
  },
  mutations: vuexfireMutations,
  actions: {
    bindBebidasFrias: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('bebidasFrias', db.collection('Bebidas Frias'))),
    bindHamburguesas: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('hamburguesas', db.collection('Hamburguesas'))),
  },
  modules: {},
});
