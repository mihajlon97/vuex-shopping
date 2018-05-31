import shop from '@/api/shop'

export default {
  state: { // = data
    items: []
  },
  getters: { // = computed properties
    availableProducts (state, gatters) {
      return state.items.filter(product => product.inventory > 0)
    },
    productIsInStock () {
      return (product) => {
        return product.inventory > 0
      }
    }
  },
  mutations: {
    setProducts (state, products) {
      // update products
      state.items = products
    },
    decrementProductInventory (state, product) {
      product.inventory--
    }
  },
  actions: {
    fetchProducts ({commit}) {
      // make the call
      // run setProducts mutation
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  }
}
