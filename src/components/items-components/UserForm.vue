<template>
  <div class="container">
    <h2>USER</h2>
    <div class="input-container">
      <label>
        first name
      </label>
        <input type="text" v-model="user.firstName">
    </div>
    <div class="input-container">
      <label>
        last name
      </label>
        <input type="text" v-model="user.lastName">
    </div>
    <div class="input-container">
      <label>
        access Level
      </label>
        <select id="form-select">
          <option v-for="accessLevel in accessLevels" :key="accessLevel">{{ accessLevel }}</option> accessLevels
        </select>
    </div>
    <div class="input-container">
      <label>
        company
      </label>
        <input type="text" v-model="user.company">
    </div>
    <div class="input-container">
      <label>
        picture
      </label>
        <input type="text" v-model="user.picture">
        <img :src="user.picture" v-if="user.picture" alt="">
    </div>
    <div class="input-container">
      <label>
        balance
      </label>
        <input type="text" v-model="user.balance">
    </div>
    <div class="input-container">
      <label>
        age
      </label>
        <input type="number" v-model.number="user.age">
    </div>
    <div class="input-container">
      <label>
        email
      </label>
        <input type="email" v-model="user.email">

    </div>
    <div class="input-container">
      <label>
        phone
      </label>
        <input type="tel" v-model="user.phone">

    </div>
    <div class="input-container">
      <label>
        address
      </label>
        <input type="text" v-model="user.address">

    </div>
    <div class="input-container">
      <label>
        about
      </label>
        <textarea type="text" v-model="user.about"></textarea>
    </div>
    <div class="input-container">
      <label>
        registered
      </label>
    <input type="text" v-model="user.registered">

    </div>

    <pre>{{ user }}</pre>
  </div>
</template>

<script>
  export default {
    name: 'User',

    model: {
      prop: 'user'
    },

    props: {
      user: {
        type: Object,
        required: true
      }
    },

    data: () => ({
      accessLevels: ['user','guest','admin']
    })
  }
</script>

<style scoped>
  .input-container {
    margin-bottom: 20px;
  }

  textarea {
    width: 400px;
    height: 400px;
  }

  label {
    width: 150px;
  }

  img {
    display: block;
  }
</style>
