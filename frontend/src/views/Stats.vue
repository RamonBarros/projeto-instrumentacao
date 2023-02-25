<template>
    <div class="main">
      <Header :Title="title"/> 
        <div class="content">
          <div class="stats-container">
                <div class="ground-temp-stat">
                    <p class="ground-temp-stat-label">Temperatura</p>
                    <p class="ground-temp-stat-value">{{Ground_Temperature}} °C</p>
                </div>

                <div class="ground-humidity-stat">
                    <p class="ground-humidity-stat-label">Umidade</p>
                    <p class="ground-humidity-stat-value">{{Ground_Humidity}} %</p>
                </div>

                <div class="air-temp-stat">
                    <p class="air-temp-stat-label">Temp Ambiente</p>
                    <p class="air-temp-stat-value">{{ Air_Temperature }} °C</p>
                </div>

                <div class="air-humidity-stat">
                    <p class="air-humidity-stat-label">Umidade Ambiente</p>
                    <p class="air-humidity-stat-value">{{ Air_Humidity }} %</p>

                </div>
          </div>
          <div class="graph-stats">
              <Line :data="data" :options="options"  />
          </div>
          
        </div>
   </div>
</template>
<script>
import Header from "../components/Header.vue"
import { auth } from '../firebase/index.js'

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

import { Bar } from 'vue-chartjs'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
  PointElement,
  LineElement,)

export default {
   components:{
       Header,
       Bar,
       Line
   },
   data(){
        return{
            title:"Cebolinha",
            data: {
            labels: ['Domingo','Segunda', 'Terça-Feira', 'Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabado'],
            datasets: [
                { data: [29, 31, 35, 27, 25,31,30],
                label:'Temperatura do Solo',
                backgroundColor: 'rgba(155, 0, 132, 100)',
                borderColor: 'rgba(255, 0, 0, 100)',
                },
                { data: [70, 68, 67, 71, 69, 60,70],
                    label:'Umidade do Solo',
                    backgroundColor: 'rgba(255, 162, 0, 100)',
                    borderColor: 'rgba(0, 255, 0, 100)', 
                },
                { data: [35, 31, 36, 27, 29,33,30],
                label:'Temperatura Ambiente',
                backgroundColor: 'rgba(155, 0, 132, 100)',
                borderColor: 'rgba(0, 0, 255, 100)'
                },
                { data: [68, 70, 49, 59, 60, 55, 50],
                    label:'Umidade Ambiente',
                    backgroundColor: 'rgba(54, 162, 235, 100)',
                    borderColor: 'rgba(0, 255, 255, 100)', 
                },
                ]
        },
            options: {
                responsive: true,
            },

            Ground_Temperature:29,
            Ground_Humidity:60,
            Air_Temperature:27,
            Air_Humidity:50,
        }
    },
    mounted(){
    if(auth.currentUser){
      console.log("logado")
    }
  },
    computed: {
    myStyles () {
      return {
        height: "50vh",
        width:"70vw"
      }
    }
  }
}
</script>
<style scoped>

.content{
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.stats-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.ground-temp-stat,.air-temp-stat,.air-humidity-stat,.ground-humidity-stat{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin: 1rem;
    background-color: #064B15;
    border-radius: 40px;
    width: 20vw;
    height: 18vh;
    color: #fff;
}
.ground-temp-stat-label,.air-temp-stat-label,.air-humidity-stat-label,.ground-humidity-stat-label{
    font-size: 2.5vw;
    padding: 0;
    margin: 1px 1rem 1px 1px;
}

.air-temp-stat-label,.air-humidity-stat-label{
    font-size: 2vw;
    margin: 1px 2rem 1px 1px;
}
.ground-temp-stat-value,.air-temp-stat-value,.air-humidity-stat-value,.ground-humidity-stat-value{
    font-size: 4rem;
    margin: 1px 1rem 1px 1px;
}

.graph-stats{
    display: flex;
    justify-content: center;
    height: 27vw;
    width: 70vw;
}



</style>