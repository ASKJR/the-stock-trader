<template>
  <div class="row">
    <div class="col-md-12">
      <app-stock v-for="(stock,index) in stocks" :key="index" :stock="stock" type="sell"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "../stock/Stock.vue";
export default {
  data: function() {
    return {
      stocks: [{ company: "BMW", price: 110, quantity: 10 }]
    };
  },
  components: {
    appStock: Stock
  }
};
</script>

<style>
</style>