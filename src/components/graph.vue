<template>
<div class="container container-canvas">
  <canvas ref="canvas"></canvas>
</div>
</template>
<script>
  import { Bar, Line } from 'vue-chartjs'

  export default {
  extends: Line,
  mounted () {

    this.renderChart({
      type: 'line',
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Graph',
          borderWidth: 2,
          borderColor: 'green',
          backgroundColor: 'white',
          lineTension: '0',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ],
    }, {responsive: true})
  }
}
</script>

<style scoped>
  .container-canvas {
    width: 600px;
    height: 600px;
 }
</style>
