<template>
  <div class="row">
    <div class="col-md-12">
      <app-stock v-for="(stock,index) in stocks" :key="index" :stock="stock" type="buy"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["stocks"])
  },
  components: {
    appStock: Stock
  }
};
</script>

<style>
</style>