<template>
  <div>
    <input type="text" ref="picker" class="form-control" :value="value">
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

  export default {
    name: 'datepicker',
    props: {
      value: {
        type: String,
        required: true
      }
    },

    data: () => ({
      fp: null
    }),

    watch: {
      value: 'updateDatepicker'
    },

    methods: {
      updateDatepicker () {
        if (this.fp) {
          this.fp.setDate(this.value)
        }
      }
    },

    mounted() {
      this.fp = flatpickr(this.$refs.picker, {
        dateformat: 'd.m.Y',
        onChange: (selectedDate, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    }
  }
</script>

<style scoped>

</style>
