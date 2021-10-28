<template>
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button class="cart-close" @click="toggle">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key, i) in this.cart" :key="i">
              <td><i class="icofont-carrot icofont-3x"></i></td>
              <td>{{ key }}</td>
              <td>{{ getPrice(key) }}</td>
              <td class="center">{{ value }}</td>
              <td>$ {{ (value * getPrice(key)).toFixed(2) }}</td>
              <td class="center">
                <button @click="remove(key)" class="btn btn-light cart-remove">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p v-if="!Object.keys(cart).length" class="center">
          <em>No items in cart</em>
        </p>
        <div class="spread">
          <span><strong>Total:</strong>${{ cartTotal() }}</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["toggle", "cart","inventory","remove"],
  methods: {
    getPrice(item) {
      const res = this.inventory.find((i) => i.name === item);
      if (res) {
        return res.price.USD;
      }
    },
    cartTotal() {
      const val = Object.keys(this.cart).reduce((acc, key) => {
        return (acc += this.cart[key] * this.getPrice(key));
      }, 0);
      return val.toFixed(2);
    },
  },
};
</script>