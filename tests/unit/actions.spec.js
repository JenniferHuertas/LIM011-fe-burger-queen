import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Menu from '@/components/Menu.vue';
import MockFirebase from 'mock-cloud-firestore';
import store from '@/store';

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

describe('Menu.vue', () => {
  let actions;

  beforeEach(() => {
    actions = {
      tomarPedido: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  describe('Menu', () => {
    it('debería tomar el pedido', (done) => Menu.methods.tomarPedido().then((result) => {
      console.log(result.data());
      expect(result.data().nombre).toBe('Aros de Cebolla');
      done();
    }));
  });

  it('llamar a store action "tomarPedido" cuando el elemento lista es clickeado', () => {
    const wrapper = mount(Menu, { store, localVue });
    wrapper.find('li').trigger('click');
    expect(actions.tomarPedido).toHaveBeenCalled();
  });
});
