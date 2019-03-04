import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[      
        {
          name: 'Notebook Lenovo Ideapad',
          price: 2259,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
          stars: 5,
          sku: 230,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },
        {
          name: 'Notebook Dell Inspiron',
          price: 2284,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
          stars: 3.4,
          sku: 20,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },
        {
          name: 'Notebook Samsung Essentials',
          price: 1490,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg',
          stars: 1,
          sku: 1,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },
        {
          name: 'Notebook Samsung',
          price: 2307,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg',
          stars: 4.4,
          sku: 340,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },
        {
          name: 'Notebook VAIO Fit',
          price: 2599,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/133252/7/133252789G1.jpg',
          stars: 3,
          sku: 30,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },      
        {
          name: 'Smartphone Xiaomi Mi',
          price: 1199,
          image: 'https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg',
          stars: 0,
          sku: 0,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },
        {
          name: 'Smartphone Moto G',
          price: 929,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
          stars: 1.5,
          sku: 11,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },
        {
          name: 'iPhone 8 Dourado 64GB',
          price: 3949,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg',
          stars: 1,
          sku: 2,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },
        {
          name: 'Smartphone Samsung Galaxy S7 Edge',
          price: 1943,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/125911/8/125911828G1.png',
          stars: 5,
          sku: 310,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },
        {
          name: 'Smartphone Motorola Moto G6 Plus',
          price: 1699,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453185G1.jpg',
          stars: 2.9,
          sku: 42,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        },
        {
          name: 'Smartphone Motorola',
          price: 2999,
          image: 'https://images-submarino.b2w.io/produtos/01/00/item/133666/1/133666164G1.jpg',
          stars: 0.5,
          sku: 1,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          quantity: 0
        }
    ],
    cartItems: [],
  },
  mutations: {
    ADD_CART_ITEM: (state, product) =>{
      state.cartItems.push(product)
    },
    UPDATE_CART_ITEM: (state, playload) =>{      
      state.cartItems[playload.index].quantity = playload.quantity
    },
    REMOVE_CART_ITEM: (state, index) => {
      state.cartItems.splice(index, 1);
    }

  },
  actions: {
    addCartItem: (context, product) => {
      context.commit('ADD_CART_ITEM', product);
    },
    updateCartItem: (context, playload) => { 
      context.commit('UPDATE_CART_ITEM', playload);           
    },
    removeCartItem: (context, index) => {
      context.commit('REMOVE_CART_ITEM', index);
    }
  },
  getters: {
    getAllProducts(state){
      return state.products;
    },
    getProductsInCart(state){
      return state.cartItems;
    }
  }
})
