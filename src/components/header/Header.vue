<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link tag="a" active-class="navbar-brand" to="/">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" tag="li" active-class="active" exact>
            <a href="#">Portfolio</a>
          </router-link>
          <router-link to="/stocks" tag="li" active-class="active" exact>
            <a href="#">Stocks</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click="endDay">End Day</a>
          </li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#" @click="saveState">Save Data</a>
              </li>
              <li>
                <a href="#" @click="loadState">Load Data</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" style="pointer-events: none;cursor: default;">
              <strong>Funds: {{ totalAvailableFunds | money }}</strong>
            </a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapGetters(["totalAvailableFunds", "myStocks", "stocks"])
  },
  methods: {
    ...mapActions(["endDay", "loadFunds", "loadStocks", "loadPortfolio"]),
    saveState() {
      axios
        .put("https://the-stock-trader-5e936.firebaseio.com/data.json", {
          stocks: this.stocks,
          portfolio: this.myStocks,
          funds: this.totalAvailableFunds
        })
        .then(response => {})
        .catch(e => {
          console.log(e);
        });
    },
    loadState() {
      axios
        .get("https://the-stock-trader-5e936.firebaseio.com/data.json")
        .then(response => {
          let { funds, portfolio, stocks } = response.data;
          this.loadFunds(funds);
          this.loadStocks(stocks);
          portfolio = portfolio ? portfolio : [];
          this.loadPortfolio({ portfolio, stocks });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
</style>