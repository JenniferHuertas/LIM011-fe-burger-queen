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
    nuevoPedido: [],
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
              cantidad: elemento.cantidad,
              estado: elemento.estado,
            });
          }
        });
      });
      return newPedido;
    },

    total({ listaProductos }) {
      return listaProductos.reduce((a, b) => a + b.Precio * b.cantidad, 0);
    },
  },
  mutations: {
    ...vuexfireMutations,
    showElements({ listaProductos }, { miArgumento }) {
      console.log(listaProductos, miArgumento);
      listaProductos.push(miArgumento);
    },

    eliminar(state, index) {
      state.listaProductos.splice(index, 1);
    },

    aumentarProducto(state, index) {
      state.listaProductos[index].cantidad += 1;
    },

    disminuirProducto(state, index) {
      state.listaProductos[index].cantidad -= 1;
    },
    nuevoEstado(state, payload) {
      state[payload.state] = payload.value;
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
        cantidad: el.cantidad,
        estado: el.estado,
      };
      const payload = { miArgumento: pedido };
      context.commit('showElements', payload);
    },
    guardarOrden(context) {
      db.collection('nuevoPedido').add({
        orden: context.state.listaProductos,
      })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.log('Error adding document: ', error);
        });
    },

  },
});
