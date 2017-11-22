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
        <input type="file" class="hidden" ref="image" @change="upload">
        <button class="btn btn-primary file-btn" @click="newImage">Выбрать новую</button>
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
        <textarea class="about" type="text" v-model="user.about"></textarea>
        <medium-editor></medium-editor>
    </div>
    <div class="input-container">
      <label>
        registered
      </label>
    <datepicker v-model="user.registered"></datepicker>
    <input v-show="false" type="text" class="form-control" v-model="user.registered">
    </div>
    <pre>{{ user }}</pre>

    <slot></slot>
  </div>
</template>

<script>
import datepicker from '@/components/plagins/datepicker'
import mediumEditor from '@/components/plagins/medium-editor'
import axios from 'axios'

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

    components: {
      datepicker,
      mediumEditor
    },

    data: () => ({
      accessLevels: ['user','guest','admin']
    }),

    methods: {
      newImage() {
        this.$refs.image.click();
      },
      upload() {
        const url = 'https://api.imgur.com/3/image'

        const data = new FormData();
        console.log( this.$refs.image.files)
        data.append('image', this.$refs.image.files[0])

        const config = {
          headers: {
            'Authorization': 'Client-ID ab9ad40496ce4cd'
          }
        }

        axios.post(url, data, config)
          .then(response => response.data)
          .then(response => {
            this.user.picture = response.data.link
            this.$refs.image.value = ''
          })
      }
    }
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

  .file-btn {
    max-width: 150px;
  }
</style>
