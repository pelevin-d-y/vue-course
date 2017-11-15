<template>
  <div class="container">
    <h2>USER</h2>
    <input type="text">
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
  export default {
    name: 'User',
    props: {
      value: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
