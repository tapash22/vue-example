<template>
  <div>
    <Bar id="my-chart-id" v-if="loaders" :data="chartData" />
    <!-- {{ coutlabel }} -->
  </div>
</template>

<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      labelsObject:[],
      dataSet:[],
      loaders: false,
      chartData: {
        labels: [],
        datasets: [{
          label: 'my chart',
          backgroundColor: 'rgb(155,99,132)',
          borderColor: 'rgb(155,99,132)',
          data: []
        },
        ]
      },
      chartOptions: {
        responsive: true,
        scales: {
        y: {
          beginAtZero: true
        }
      }

      }
    }
  },
  mounted() {
    this.getPhotos();
  },



  // computed: {
  //   coutlabel() {
  //     const cd = 0;
  //     if (this.apidata.albumId == 1) {
  //       let countOne = this.apidata.albumId.length;
  //       cd = countOne;
  //     }
  //     return countOne;
  //   }
  // },

  methods: {
    getPhotos() {

      axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {


        this.labelsObject = [... new Set(res.data.map(data => data.albumId))];
        const obj ={};
        this.labelsObject.forEach((arrVal) => {
    obj[arrVal] = res.data.filter(data => data.albumId == arrVal).length;
    
});
this.chartData.labels = this.labelsObject;
this.chartData.datasets[0].data = Object.values(obj);

console.log(this.chartData.datasets[0]);
        this.loaders = true;

      })
    }
  }
}
</script>