<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <!-- <div class="card">
        <div class="card-title">Carrots</div>
        <div class="card-body">
          <i class="icofont-10x icofont-carrot"></i>
          <form>
            <div class="row">
              <div class="cell">
                <label>Type:</label>
              </div>
              <div class="cell">
                <em>Vegetable</em>
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Price:</label>
              </div>
              <div class="cell">$4.82</div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Quantity:</label>
              </div>
              <div class="cell">
                <input type="number" value="0" />
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <button class="btn btn-light">Add to cart</button>
        </div>
      </div> -->
       <div
        class="card"
        v-for="product in inventory.slice(0, 6)"
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
  name:'Products',
  components:{
    Product
  },
  props:['inventory',"addToCart"]
}
</script>