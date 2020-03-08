<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h1>
        <b>Trade or View your Portfolio</b>
      </h1>
      <p>You may Save & Load you Data</p>
      <p>Click on 'End Day' to begin a new Day!</p>
      <hr />
      <h4>
        <b>Your Funds: {{ funds | money }}</b>
      </h4>
    </div>
  </div>
</template>

<script>
import { numberToMoney } from "../helper/money";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      funds: "totalAvailableFunds"
    })
  }
};
</script>

<style>
</style>