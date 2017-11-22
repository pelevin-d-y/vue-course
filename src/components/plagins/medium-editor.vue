<template>
  <div>
    <div class="editable">asdasdasdasdasd asdasdasd asdasd</div>
  </div>
</template>

<script>
import mediumEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.min.css'

  export default {


    mounted() {
      var editor = new mediumEditor('.editable', {
        toolbar: {
        /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'quote'],
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        relativeContainer: null,
        standardizeSelectionStart: false,
        static: false,

        /* options which only apply when static is true */
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false
    }
      });
    }
  }
</script>

<style scoped>

</style>
