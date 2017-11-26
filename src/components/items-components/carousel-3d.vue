<template>
  <div class="container">
    <carousel class="slider-container" :perPage="1" :navigationEnabled="true" :navigationPrevLabel="prevHtml()">
      <slide class="slide-item">
        Slide 1 Content
      </slide>
      <slide class="slide-item">
        Slide 2 Content
      </slide>
      <slide class="slide-item">
        Slide 3 Content
      </slide>
      <slide class="slide-item">
        Slide 4 Content
      </slide>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
    Carousel,
    Slide
    },

    data: () => ({
      src: '../../assets/logo.png',
    }),

    methods: {
      prevHtml() {
      return  `<div class="svg-icon"></div>`
      }
    },
  }
</script>

<style scoped>
  .slider-container {
     width: 500px;
     margin: 0 auto;
  }

  .slide-item {
    height: 100px;
    background: green;
  }

</style>
