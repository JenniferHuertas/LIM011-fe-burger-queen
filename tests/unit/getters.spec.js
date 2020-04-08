import MockFirebase from 'mock-cloud-firestore';
import Menu from '@/components/Menu.vue';
import Pedidos from '@/components/Pedidos.vue';


import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const fixtureData = {
  __collection__: {
    productos: {
      __doc__: {
        identiDoc: {
          categoria: 'ac',
          nombre: 'Aros de cebolla',
          precio: 5,
          cantidad: 1,
          estado: true,
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData);

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Menu.vue', 'Pedidos.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      llenarProductos: () => ({
        categoria: 'ac',
        nombre: 'Aros de cebolla',
        precio: 5,
        cantidad: 1,
        estado: true,
      }),
      total: () => 10,
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('Renders store.getters.llenarProductos', () => {
    const wrapper = shallowMount(Menu, Pedidos, { store, localVue });
    const p = wrapper.find('p');
    expect(p.object()).toBe(getters.llenarProductos());
  });
});

describe('Menu', () => {
  it('debería llenar los productos', (done) => Menu.computed.llenarProductos().then((result) => {
    console.log(result.data());
    expect(result.data().categoria).toBe('ac');
    done();
  }));
});
