<template>
  <div>
    <navigation :pageTitle="pageTitle"></navigation>
    <user-form v-model="user"></user-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pageTitle: 'User',
      user: {}
    }
  },

  components: {
    navigation: () => import('@/components/navigation/navigation'),
    UserForm: () => import('@/components/items-components/UserForm.vue')
  }
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
