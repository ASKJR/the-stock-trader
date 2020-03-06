<template>
  <div class="container">
    <br />
    <br />
    <app-header></app-header>
    <!-- <app-home></app-home> -->
    <app-stocks></app-stocks>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Home from "./components/Home.vue";
import Stocks from "./components/stock/Stocks.vue";
export default {
  components: {
    appHeader: Header,
    appHome: Home,
    appStocks: Stocks
  }
};
</script>

<style>
</style>
