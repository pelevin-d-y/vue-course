<template>
  <div>
    <navigation :pageTitle="pageTitle"></navigation>

    <div>{{id}}</div>
    <user-form v-if="user" v-model="user">
    </user-form>
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
      }
    },

    mounted() {
      this.loadData();
    },
  }
</script>
