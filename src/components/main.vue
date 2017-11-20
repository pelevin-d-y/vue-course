<template>
  <navigation :pageTitle="pageTitle"></navigation>
</template>

<script>
export default {
  name: 'HelloWorld',

  components: {
    navigation: () => import('@/components/navigation/navigation')
  },

  data: () => ({
      msg: 'Welcome to Your Vue.js App',
      pageTitle: 'Main'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello >.row {
    width: 60%;
    margin: 0 auto;
  }

  .btn {
    width: 100%;
  }


</style>
