<template>
    <div>
      <h1> Shopping cart </h1>
      <ul>
        <li v-for="product in products"> {{product.title}} - {{product.price | currency}} - {{product.quantity}} </li>
      </ul>
      <p>Total: {{total | currency}}</p>
      <button v-on:click="checkout">Checkout</button>
      <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
      name: 'shopping-cart',
      computed: {
        ...mapGetters({
          products: 'cartProducts',
          total: 'cartTotal'
        }),
        ...mapState({
          checkoutStatus: state => state.cart.checkoutStatus
        })
      },
      methods: {
        ...mapActions({
          checkout: 'checkout'
        })
      }
    }
</script>

<style scoped>
 h1 {
   margin-top: 300px;
 }
</style>
