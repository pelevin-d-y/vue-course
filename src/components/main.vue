<template>
  <div>
    <div></div><navigation :pageTitle="pageTitle"></navigation>
    <carousel-one></carousel-one>
  </div>
</template>

<script>
  import CommitChart from '@/components/graph'

export default {
  components: {
    navigation: () => import('@/components/navigation/navigation'),
    carouselOne: () => import('@/components/items-components/carousel-3d'),
    CommitChart
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
