<template>
  <Header :cart="cartItems" :toggle="toggleSidebar" />
  <router-view :inventory="inventory" :addToCart="addToCart"/>
  <Sidebar
    v-if="showSideBar"
    :cart="cartItems"
    :toggle="toggleSidebar"
    :inventory="inventory"
    :remove="removeCartItem"
  />
</template>

<script>
import Header from "./components/Header.vue";
import food from "./food.json";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      inventory: food,
      cartItems: {},
      showSideBar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSideBar = !this.showSideBar;
    },
    removeCartItem(item) {
      delete this.cartItems[item];
    },
    addToCart(item, id) {
      const res = this.inventory.find((p) => p.id === id);
      if (!this.cartItems[item]) this.cartItems[item] = 0;
      this.cartItems[item] += res.quantity;
      res.quantity = 0;
    },
  },
};
</script>

<style>
</style>
