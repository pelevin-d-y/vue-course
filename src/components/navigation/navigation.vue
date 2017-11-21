<template>
  <div class="hello container">
    <h1>{{ pageTitle }}</h1>
    <div class="row">
      <div class="col-lg-4">
        <router-link to="/" class="vuesj-course btn btn-primary" active-class="active" exact>
          vue-js-cours
        </router-link>
      </div>
      <div class="col-lg-4">
        <router-link to="/list" class="vuesj-course btn btn-primary" active-class="active" exact>
          Список пользователей
        </router-link>
      </div>
      <div class="col-lg-4">
        <router-link to="/user/add" class="vuesj-course btn btn-primary" active-class="active" exact>
          Добавить пользователя
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['pageTitle'],
  }
</script>

<style scoped>

</style>
