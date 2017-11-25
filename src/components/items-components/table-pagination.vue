<template>
  <div>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><button class="page-link" href="#">Previous</button></li>
      <li class="page-item" @click="getCurrentPage(page)" v-for="page in allPagess" :key="page"><button class="page-link" href="#">{{ page }}</button></li>
      <li class="page-item"><button class="page-link" href="#">Next</button></li>
    </ul>
</nav>
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'currentPage'
    },
    props: {
      tableRows: {
        type: Number
      },
      allRows: {
        type: Number
      },
      currentPage: {
        type: Number
      },
    },

    methods: {
       getCurrentPage(page) {
        this.$emit('input', page)
      }
    },

    computed: {
      allPagess() {
        return Math.ceil(this.allRows / this.tableRows)
      },


    },



  }
</script>

<style scoped>

</style>
