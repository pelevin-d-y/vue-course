<template>
  <div class="hello container">
    <h1>Table</h1>
    <div class="row">
      <div class="col-lg-4">
        <router-link to="/" class="vuesj-course btn btn-primary">
          vue-js-kours
        </router-link>
      </div>
      <div class="col-lg-4">
        <router-link to="/list" class="vuesj-course btn btn-primary" active-class="active">
          Список пользователей
        </router-link>
      </div>
      <div class="col-lg-4">
        <router-link to="/user/add" class="vuesj-course btn btn-primary">
          Добавить пользователя
        </router-link>
      </div>
    </div>
    <table class="table table-bordered red-border">
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Активен</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>
          <router-link :to="`/user/${user.id}`"># {{ user.id }}</router-link>
        </td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.isActive }}</td>
        <td>{{ user.balance }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.registered }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
        return { url: 'http://localhost:3000/users/',
        users: []
      }
    },
    methods: {
      loadData() {
        axios.get(this.url)
          .then(response => {
            console.log(response);
            this.users = response.data
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
