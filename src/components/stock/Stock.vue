<template>
  <div class="col-md-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <div class="panel-title">
          <b>{{ stock.company }}</b>
          <small>(Price: {{stock.price}})</small>
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
            <button class="btn btn-success pull-right">
              <strong>Buy</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"]
};
</script>

<style>
</style>