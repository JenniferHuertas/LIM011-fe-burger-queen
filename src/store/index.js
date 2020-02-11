import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from '../db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bebidasFrias: [],
    bebidasCalientes: [],
    hamburguesas: [],
    sandwich: [],
    acompañamientos: [],
    adicionales: [],
    titulo: 'Agregar Cliente',
    clientes: [],
    nuevoCliente: '',

  },
  mutations: vuexfireMutations,
  actions: {
    bindBebidasFrias: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('bebidasFrias', db.collection('Bebidas Frias'))),
    bindBebidasCalientes: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('bebidasCalientes', db.collection('Bebidas Calientes'))),
    bindHamburguesas: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('hamburguesas', db.collection('Hamburguesas'))),
    bindSandwich: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('sandwich', db.collection('Sandwich'))),
    bindAcompañamientos: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('acompañamientos', db.collection('Acompañamientos'))),
    bindAdicionales: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('adicionales', db.collection('Adicionales'))),
  },
  modules: {},
});
