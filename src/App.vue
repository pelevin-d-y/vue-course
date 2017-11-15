<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
h1 {
  text-align: center;
  margin-bottom: 40px;
}

.hello >.row {
  width: 60%;
  margin: 0 auto;
  margin-bottom: 60px;
}
.btn {
  width: 100%;
}
</style>
