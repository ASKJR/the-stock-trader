<template>
  <div class="col-md-6">
    <div class="panel" :class="panelClass">
      <div class="panel-heading">
        <div class="panel-title">
          <b>{{ stock.company }}</b>
          <small>{{ panelSubTitle }}</small>
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-4">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Quantity" />
            </div>
          </div>
          <div class="col-xs-8">
            <button class="btn pull-right" :class="btnClass">
              <strong>{{ btnTxt }}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock", "type"],
  computed: {
    panelSubTitle() {
      return this.type == "buy"
        ? `(Price: ${this.stock.price})`
        : `(Price: ${this.stock.price} | Quantity: ${this.stock.quantity})`;
    },
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
  }
};
</script>

<style>
</style>