<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>

  <main class="wrapper">
    <h2>Recommended</h2>

    <div class="recommended">
      <div
        class="card"
        v-for="product in inventory.slice(0, 3)"
        :key="product.id"
      >
        <Product :product="product" :addToCart="addToCart"/>
      </div>
    </div>
  </main>
</template>

<script>
import Product from '../components/Product.vue'
export default {
  name: "Home",
  props: ["inventory","addToCart"],
  components:{
    Product
  }
};
</script>