<template>
  <div class="row">
    <div class="col-md-12">
      <app-stock v-for="(stock,index) in stocks" :key="index" :stock="stock" type="buy"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  data: function() {
    return {
      stocks: [
        { company: "BMW", price: 110 },

        { company: "Google", price: 200 },

        { company: "Apple", price: 250 },

        { company: "Twitter", price: 8 }
      ]
    };
  },
  components: {
    appStock: Stock
  }
};
</script>

<style>
</style>