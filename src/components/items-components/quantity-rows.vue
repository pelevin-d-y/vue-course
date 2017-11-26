<template>
  <div>
    <select :value="tableRows" @input="currentCount" name="quantity-row" id="quantity-row">
      <option v-for="item in countArray" :key="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'tableRows'
    },

    props: {
      tableRows: {
        type: Number
      }
    },

    data() {
      return {
        countArray: [5, 7, 10, 15, 30]
      }
    },

    methods: {
      currentCount() {
        this.$emit('input', event.target.value);
      }
    },
  }
</script>

<style scoped>
#quantity-row {
    width: 100px;
    height: 20px;
}

</style>
