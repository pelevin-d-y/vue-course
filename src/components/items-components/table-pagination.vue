<template>
  <div>
  <nav aria-label="Page navigation example" class="pagination">
    <ul class="pagination">
      <li class="page-item"><button class="page-link btn btn-primary" @click="openCurrentPage(currentPage - 1)" :disabled="isFirstPage" :class="{disabled: isFirstPage}">Previous</button></li>
      <li class="page-item digit-pag">
        <button class="page-link btn btn-primary" exact active-class="active" @click="openCurrentPage(page)" v-for="page in allPages" :key="page">{{ page }} </button>
      </li>
      <li class="page-item"><button class="page-link btn btn-primary" @click="openCurrentPage(currentPage + 1)"  :disabled="isLastPage" :class="{disabled: isLastPage}">Next</button></li>
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
      }
    },
    data: () => ({
      thisCurrentPage: this.currentPage
    }),
    watch: {
      tableRows() {
        this.openCurrentPage(1);
      }
    },
    computed: {
      allPages() {
        return Math.ceil(this.allRows / this.tableRows)
      },
      isFirstPage() {
        return this.currentPage === 1;
      },
      isLastPage() {
        return this.currentPage === this.allPages
      }
    },
    methods: {
      openCurrentPage(page) {
        this.$emit('input', page)
      }
    }
  }
</script>

<style scoped>
.pagination,
.digit-pag {
  display: flex;
}
.digit-pag {
  margin-left: 20px;
  margin-right: 20px;
}
.page-link.disabled {
  opacity: 0.5;
}
</style>
