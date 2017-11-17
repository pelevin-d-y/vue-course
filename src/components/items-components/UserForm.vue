<template>
  <div class="container">
    <h2>USER</h2>
    <div class="input-container">
      first name
      <input type="text" v-model="value.firstName">
    </div>
    <div class="input-container">
      last name
      <input type="text" v-model="value.lastName">
    </div>
    <div class="input-container">
      access Level
      <input type="text" v-model="value.accessLevel">
    </div>
    <div class="input-container">
      company
      <input type="text" v-model="value.company">
    </div>
    <div class="input-container">
      picture
      <input type="text" v-model="value.picture">
    </div>
    <div class="input-container">
      balance
      <input type="text" v-model="value.balance">
    </div>
    <div class="input-container">
      age
      <input type="number" v-model="value.age">
    </div>
    <div class="input-container">
      email
      <input type="email" v-model="value.email">
    </div>
    <div class="input-container">
      phone
      <input type="tel" v-model="value.phone">
    </div>
    <div class="input-container">
      address
      <input type="text" v-model="value.address">
    </div>
    <div class="input-container">
      about
      <textarea type="text" v-model="value.about"></textarea>
    </div>
    <div class="input-container">
      registered
      <input type="text" v-model="value.registered">
    </div>

    <pre>{{ value }}</pre>
  </div>
</template>

<script>
  export default {
    name: 'User',
    props: ["value"]

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
</style>
