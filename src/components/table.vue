<template>
  <div class="hello container">
    <h1>Table</h1>
    <div class="row">
      <div class="col-lg-4">
        <router-link to="/" class="vuesj-course btn btn-primary">
          vue-js-cours
        </router-link>
      </div>
      <div class="col-lg-4">
        <router-link to="/list" class="vuesj-course btn btn-primary" active-class="active" exact>
          Список пользователей
        </router-link>
      </div>
      <div class="col-lg-4">
        <router-link to="/user/add" class="vuesj-course btn btn-primary">
          Добавить пользователя
        </router-link>
      </div>
    </div>

    <quantity-rows class="quantity-rows" v-model.number = "tableRows"></quantity-rows>
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
      <tr v-for="user in rowsQuantity" :key="user.id">
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
    <table-pagination :tableRows="tableRows" :allRows="allUsers.length" v-model.number="currentPage"></table-pagination>
  </div>
</template>

<script>
import axios from 'axios'
import tablePagination from '@/components/items-components/table-pagination'
import quantityRows from '@/components//items-components/quantity-rows'

  export default {
    data() {
        return {
          url: 'http://localhost:3000/users/',
          tableRows: 5,
          allUsers: [],
          currentUsers: [],
          currentPage: 1
      }
    },
    methods: {
      loadData() {
        axios.get(this.url)
          .then(response => {
            this.allUsers = response.data
          })
      },
    },

    computed: {
      rowsQuantity() {
        return this.allUsers.slice((this.currentPage - 1) * this.tableRows, this.currentPage * this.tableRows)
      }
    },

    mounted() {
      this.loadData();
    },

    components: {
      tablePagination,
      quantityRows
    }
  }
</script>

<style scoped>
  .quantity-rows {
    margin-bottom: 20px;
  }
</style>
