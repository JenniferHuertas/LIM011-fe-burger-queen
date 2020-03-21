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
    listaProductos: [],
  },
  getters: {
    llenarProductos: (state) => (propiedad, value) => {
      console.log('llenar', propiedad, value);
      const newPedido = [];
      Object.values(state).forEach((elementos) => {
        elementos.forEach((elemento) => {
          if (elemento[propiedad] === value) {
            newPedido.push({
              Nombre: elemento.Nombre,
              Precio: elemento.Precio,
            });
          }
        });
      });
      return newPedido;
    },
  },
  mutations: {
    ...vuexfireMutations,
    showElements({ listaProductos }, { miArgumento }) {
      console.log(listaProductos, miArgumento);
      listaProductos.push(miArgumento);
    },
  },
  actions: {
    bindBebidasFrias: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('bebidasFrias', db.collection('Bebidas Frias'))),
    bindBebidasCalientes: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('bebidasCalientes', db.collection('Bebidas Calientes'))),
    bindHamburguesas: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('hamburguesas', db.collection('Hamburguesas'))),
    bindSandwich: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('sandwich', db.collection('Sandwich'))),
    bindAcompañamientos: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('acompañamientos', db.collection('Acompañamientos'))),
    bindAdicionales: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('adicionales', db.collection('Adicionales'))),
    tomarPedido(context, el) {
      const pedido = {
        Nombre: el.Nombre,
        Precio: el.Precio,
      };
      const payload = { miArgumento: pedido };
      context.commit('showElements', payload);
    },
  },
});
