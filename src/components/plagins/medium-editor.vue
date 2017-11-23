<template>
  <div>
    <textarea class="form-control" ref="textarea" :value="value"></textarea>
  </div>
</template>

<script>
import mediumEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.min.css'

  export default {
    props: {
      value: {
        type: String,
        requared: true
      }
    },

    data: () => ({
      editor: null
    }),

    methods: {
      triggerInput() {
        this.$emit('input', this.editor.getContent())
      }
    },

    mounted() {
      this.editor = new mediumEditor(this.$refs.textarea);
      this.editor.subscribe('editableInput', this.triggerInput);
    }
  }
</script>

<style scoped>
  .form-control {
    min-height: 20px;
    height: auto;
  }


</style>
