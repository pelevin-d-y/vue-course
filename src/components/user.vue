<template>
  <div>
    <navigation :pageTitle="pageTitle"></navigation>
    <user-form v-model="user">
      <button class="btn btn-danger" @click="add"> добавить пользователя </button>
    </user-form>
  </div>
</template>

<script>
import datepicker from '@/components/plagins/datepicker'
import axios from 'axios'

// Модель для пустого пользователя
const defaultUser = {
  id: null,
  guid: '',
  isActive: false,
  balance: '',
  picture: 'http://placehold.it/128x128',
  age: 0,
  eyeColor: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
};

export default {
  name: 'user',

  components: {
    navigation: () => import('@/components/navigation/navigation'),
    UserForm: () => import('@/components/items-components/UserForm.vue')
  },

  data () {
    return {
      url: 'http://localhost:3000/users/',
      msg: 'Welcome to Your Vue.js App',
      pageTitle: 'User',
      user: defaultUser
    }
  },

  methods: {
    add() {
      axios.post(this.url, this.user)
        .then(() => {
          // После успешного создания пользователя
          // переходим на страницу с таблицей
          // или можно перейти на страницу редактирования
          // так как в ответе приходит тот же объект, но с ID
          this.$router.push({ path: '/list' });
        });
    }
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
