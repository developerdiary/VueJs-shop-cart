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
          totalReviews: 230,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Notebook Dell Inspiron',
          price: 2284,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
          stars: 3.4,
          totalReviews: 20,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Notebook Samsung Essentials',
          price: 1490,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg',
          stars: 1,
          totalReviews: 1,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Notebook Samsung',
          price: 2307,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg',
          stars: 4.4,
          totalReviews: 340,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Notebook VAIO Fit',
          price: 2599,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/133252/7/133252789G1.jpg',
          stars: 3,
          totalReviews: 30,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },      
        {
          name: 'Smartphone Xiaomi Mi',
          price: 1199,
          image: 'https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg',
          stars: 0,
          totalReviews: 0,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Smartphone Moto G',
          price: 929,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
          stars: 1.5,
          totalReviews: 11,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'iPhone 8 Dourado 64GB',
          price: 3949,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg',
          stars: 1,
          totalReviews: 2,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Smartphone Samsung Galaxy S7 Edge',
          price: 1943,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/125911/8/125911828G1.png',
          stars: 5,
          totalReviews: 310,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Smartphone Motorola Moto G6 Plus',
          price: 1699,
          image: 'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453185G1.jpg',
          stars: 2.9,
          totalReviews: 42,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Smartphone Motorola',
          price: 2999,
          image: 'https://images-submarino.b2w.io/produtos/01/00/item/133666/1/133666164G1.jpg',
          stars: 0.5,
          totalReviews: 1,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        }
    ],
    cartItems: [],
  },
  mutations: {
    ADD_PRODUCT: (state, product) =>{
      state.cartItems.push(product)
    }
  },
  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
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
