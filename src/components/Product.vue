<template>
  <div class="card-title">{{ product.name }}</div>
  <div class="card-body">
    <i :class="['icofont-10x', 'icofont-'+product.icon]"></i>
    <form>
      <div class="row">
        <div class="cell">
          <label>Type:</label>
        </div>
        <div class="cell">
          <em>{{ product.type }}</em>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <label>Price:</label>
        </div>
        <div class="cell">${{ product.price.USD }}</div>
      </div>
      <div class="row">
        <div class="cell">
          <label>Quantity:</label>
        </div>
        <div class="cell">
          <input type="number" v-model.number="product.quantity" />
        </div>
      </div>
    </form>
  </div>
  <div class="card-footer">
    <button class="btn btn-light" @click="addToCart(product.name, product.id)">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ["product", "addToCart"],
};
</script>