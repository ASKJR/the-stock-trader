<template>
  <div class="container">
    <br />
    <br />
    <app-header></app-header>
    <!-- <app-home></app-home> -->
    <!-- <app-stocks></app-stocks> -->
    <app-portfolio></app-portfolio>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Home from "./components/Home.vue";
import Stocks from "./components/stock/Stocks.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
export default {
  components: {
    appHeader: Header,
    appHome: Home,
    appStocks: Stocks,
    appPortfolio: Portfolio
  }
};
</script>

<style>
</style>
