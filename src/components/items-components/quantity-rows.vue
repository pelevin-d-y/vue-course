<template>
  <div>
    <select v-model="currentCount" name="quantity-row" id="quantity-row">
      <option v-for="item in countArray">{{ item }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: {
    },

    data() {
      return {
        currentCount: 5,
        countArray: [5, 7, 10, 15, 30]
      }
    },
    methods: {

    },

    watch: {
      currentCount: function(count) {
        this.$emit('changeSelect', count)
      }
    }
  }
</script>

<style scoped>
#quantity-row {
    width: 100px;
    height: 20px;
}

</style>
