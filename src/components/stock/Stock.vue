<template>
  <div class="col-md-6">
    <div class="panel" :class="panelClass">
      <div class="panel-heading">
        <div class="panel-title">
          <b>{{ stock.company }}</b>
          <small v-if="type == 'buy'">(Price: {{ stock.price | money }})</small>
          <small v-else>(Price: {{ stock.price | money }} | Quantity: {{ stock.qty }})</small>
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-4">
            <div class="form-group">
              <input type="number" class="form-control" placeholder="Quantity" v-model="qty" />
            </div>
          </div>
          <div class="col-xs-8">
            <button class="btn pull-right" :class="btnClass" @click="addToPortfolio(stock)">
              <strong>{{ btnTxt }}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      qty: ""
    };
  },
  props: ["stock", "type"],
  computed: {
    panelClass() {
      return {
        "panel-success": this.type == "buy",
        "panel-info": this.type == "sell"
      };
    },
    btnClass() {
      return {
        "btn-success": this.type == "buy",
        "btn-danger": this.type == "sell"
      };
    },
    btnTxt() {
      return this.type == "buy" ? "Buy" : "Sell";
    }
  },
  methods: {
    ...mapActions(["addStock"]),
    addToPortfolio(stock) {
      stock.qty += parseInt(this.qty);
      this.addStock(stock);
      this.qty = "";
    }
  }
};
</script>

<style>
</style>