<template>
  <div class="row">
    <div class="col-md-12">
      <app-stock v-for="(stock,index) in myStocks" :key="index" :stock="stock" type="sell"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "../stock/Stock.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters(["myStocks"])
  }
};
</script>

<style>
</style>