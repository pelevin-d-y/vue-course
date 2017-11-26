<template>
  <div>
    <navigation :pageTitle="pageTitle"></navigation>
    <div class="container">
      <router-link :to="'' + (parseInt(id, 10) + 1)" class="btn btn-primary"> Следующий пользователь </router-link>
      <div class="id">{{id}}</div>
    </div>
    <user-form v-if="user" v-model="user"></user-form>
    <button class="btn btn-danger" @click="remove"> Удалить пользователя </button>
    <button class="btn btn-success"  @click="save"> Сохранить данные </button>
  </div>
</template>
<script>
import axios from 'axios'

  export default {
    name: 'UserEdit',

    components: {
      UserForm: () => import('@/components/items-components/UserForm'),
      navigation: () => import('@/components/navigation/navigation'),
    },

    props: {
      id: String
    },

    data() {
      return {
        url: 'http://localhost:3000/users/',
        user: null,
        pageTitle: 'User edit'
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
          .catch(e => {
            alert('такого пользователя не существует');
            document.body.remove();
          })
      },

      save() {
        axios.patch(this.userUrl, this.user)
        .then(() => {
          this.$router.push({path: '/list'})
        })
      },

      remove() {
        const confirmed = confirm('удалить пользователя?')
        if (!confirmed) {
          return
        }

        axios.delete(this.userUrl)
          .then(() => {
            this.$router.push({path: '/list'})
          })
      }
    },
    beforeRouteUpdate (to, from, next) {
        this.loadData();
        next()
    },

    mounted() {
      this.loadData();
    },
  }
</script>

<style scoped>
  .id {
    font-size: 50px;
    text-align: center;
  }

  .btn-danger {
    margin-bottom: 20px;
  }
</style>
