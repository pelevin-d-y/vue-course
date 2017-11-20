<template>
  <div class="hello container">
    <navigation :pageTitle="pageTitle"></navigation>
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
      <tr v-for="user in getPageUsers" :key="user.id">
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
    <table-pagination :tableRows="tableRows" :allRows="allUsers.length" v-model.number="currentPage" ></table-pagination>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    components: {
      tablePagination: () => import('@/components/items-components/table-pagination'),
      quantityRows: () => import('@/components//items-components/quantity-rows'),
      navigation: () => import('@/components/navigation/navigation')
    },

    data: () => ({
          url: 'http://localhost:3000/users/',
          tableRows: 5,
          allUsers: [],
          currentPage: 1,
          pageTitle: 'Table'
      }),


    computed: {
      getPageUsers() {
        return this.allUsers.slice((this.currentPage - 1) * this.tableRows, this.currentPage * this.tableRows)
      }
    },

    methods: {
      loadData() {
        axios.get(this.url)
          .then(response => {
            this.allUsers = response.data
          })
      }
    },

    mounted() {
      this.loadData();
    },
  }
</script>

<style scoped>
  .quantity-rows {
    margin-bottom: 20px;
  }
</style>
