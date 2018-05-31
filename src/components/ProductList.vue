<template>
    <div>
      <h1> Product list </h1>
      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
      <ul v-else>
        <li v-for="product in products">
          {{product.title}} - {{product.price | currency}} - {{product.inventory}}
          <button
            v-on:click="addProductToCart(product)"
            :disabled="!productIsInStock(product)"
          >Add to Cart</button>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name: 'product-list',
    data () {
      return {
        loading: false
      }
    },
    computed: {
      ...mapState({
        products: state => state.products.items
      }),
      ...mapGetters({
        productIsInStock: 'productIsInStock'
      })
    },
    methods: {
      ...mapActions({
        fetchProducts: 'fetchProducts',
        addProductToCart: 'addProductToCart'
      })
    },
    created () {
      this.loading = true
      this.fetchProducts()
        .then(() => (this.loading = false))
      /*
      // This is bad because it's done only when creating component
      shop.getProducts(products => {
        // this.products = products
        // Never do this so directly because that's mutations job!
        // this.$store.state.products = products

        this.$store.commit('setProducts', products)
      })
      */
    }
  }
</script>

<style scoped>
  * {
    color: red;
  }
</style>
