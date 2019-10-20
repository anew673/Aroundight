<template>
  <div>
    <button v-on:click="increase">Click to increase counter</button>
    <p>You've clicked the button {{ counter }}</p>times.
    <div>
      <p>Product one cost: {{ productCost | formatCost('$') }}</p>
      <input type="text" v-bind:value="productCost" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-data',
  data() {
    return {
      counter: 0,
      productCost: 1000
    }
  },
  methods: {
    increase(e) {
      this.counter++
    }
  },
  filters: {
    formatCost(value, symbol) {
      return symbol + (value / 100).toFixed(2)
    }
  }
}
</script>
