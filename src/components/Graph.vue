<template>
    <div>
        <Line :data="Chartdata" :options="ChartOptions"  />
    </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'

import { Line } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
  PointElement,
  LineElement,)



export default {
    components:{
       Line
   },
   props: {
        chartData: {
            type: Object,
            required: true
        },  
        chartOptions: {
        type: Object,
        default: () => {}
        }
    },
    
}
</script>

<style>
    
</style>