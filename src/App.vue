<template>
  <div class="container">
    <br />
    <br />
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.4s ease-out forwards;
  transition: opacity 0.4;
}
.slide-leave-active {
  animation: slide-in 0.4s ease-out forwards;
  transition: opacity 0.4s;
  opacity: 0;
}

.slide-move {
  transition: 0.4s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
