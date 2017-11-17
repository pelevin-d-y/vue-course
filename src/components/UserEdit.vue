<template>
  <div class="hello container">
    <h1>UserEdit</h1>
    <div class="row">
      <div class="col-lg-4">
        <router-link to="/" class="vuesj-course btn btn-primary">
          vue-js-cours
        </router-link>
      </div>
      <div class="col-lg-4">
        <router-link to="/list" class="vuesj-course btn btn-primary">
          Список пользователей
        </router-link>
      </div>
      <div class="col-lg-4">
        <router-link to="/user/add" class="vuesj-course btn btn-primary" active-class="active" exact>
          Добавить пользователя
        </router-link>
      </div>
    </div>
    <div>{{id}}</div>
    <user-form v-if="user" v-model="user">
      {{ user }}
    </user-form>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'UserEdit',
    props: {
      id: String
    },

    components: {
      UserForm: () => import('@/components/items-components/UserForm')
    },

    data() {
      return {
        url: 'http://localhost:3000/users/',

        user: null
      }
    },

    computed: {
       userUrl() {
        return `${this.url}${this.id}`
      }
    },

    methods: {
      loadData() {
        axios.get(this.userUrl)
          .then(response => {
            this.user = response.data
          })
      }
    },
    mounted() {
      this.loadData();
    }
  }
</script>

<style scoped>

</style>
