<template>
    <div class="main">
      <Header :Title="title"/> 
        <div class="content">
          <div class="stats-container">
                <div class="ground-temp-stat">                    
                    <p class="ground-temp-stat-label"><font-awesome-icon icon="fa-solid fa-temperature-high" />&nbsp;Temperatura</p>
                    <p class="ground-temp-stat-value">{{Ground_Temperature}} °C</p>
                </div>

                <div class="ground-humidity-stat">
                    <p class="ground-humidity-stat-label"><font-awesome-icon icon="fa-solid fa-droplet" />&nbsp;Umidade</p>
                    <p class="ground-humidity-stat-value">{{Ground_Humidity}} %</p>
                </div>

                <div class="air-temp-stat">
                    <p class="air-temp-stat-label"><font-awesome-icon icon="fa-solid fa-temperature-high" />&nbsp;Temp Ambiente</p>
                    <p class="air-temp-stat-value">{{ Air_Temperature }} °C</p>
                </div>

                <div class="air-humidity-stat">
                    <p class="air-humidity-stat-label"><font-awesome-icon icon="fa-solid fa-droplet" />&nbsp;Umidade Ambiente</p>
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
import { ref, onValue} from "firebase/database";
import {db} from "@/firebase/index.js"

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
            Stats_Vector:[15,16,17,18,19,19,16],
            computed: {
            myStyles () {
                return {
                    height: "50vh",
                    width:"70vw"
                }
            },
            
            },
            // data:()=>({
            //     loaded: false,
            //     data: null
            // }),

            data: {
            labels: ['Domingo','Segunda', 'Terça-Feira', 'Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabado'],
            datasets: [
                { data: [50, 78, 47, 51, 69, 35,77],
                label:'Temperatura do Solo',
                backgroundColor: 'rgba(255, 0, 0, 100)',
                borderColor: 'rgba(255, 0, 0, 100)',
                },
                { data: [70, 68, 67, 71, 69, 60,70],
                    label:'Umidade do Solo',
                    backgroundColor: 'rgba(0, 255, 0, 100)',
                    borderColor: 'rgba(0, 255, 0, 100)', 
                },
                { data: [35, 31, 36, 27, 29,33,30],
                label:'Temperatura Ambiente',
                backgroundColor: 'rgba(0, 0, 255, 100)',
                borderColor: 'rgba(0, 0, 255, 100)'
                },
                { data: [68, 70, 49, 59, 60, 55, 50],
                    label:'Umidade Ambiente',
                    backgroundColor: 'rgba(0, 255, 255, 100)',
                    borderColor: 'rgba(0, 255, 255, 100)', 
                },
                ],
                
            },

            options: {
                responsive: true,
            },

            Ground_Temperature:"",
            Ground_Humidity:"",
            Air_Temperature:"",
            Air_Humidity:"",
            Stats_Vector:[15,16,17,18,19,19,16],
        }
    },
    mounted(){
    this.getValues()
    if(auth.currentUser){
      console.log("logado")
    }
    
  },
  methods:{
     getValues(){
      const dados= ref(db)
        onValue(dados,(snapshot)=>{
      let dados =JSON.parse(JSON.stringify(snapshot.val().UsersData.readings));
      const vector= (Object.entries(dados)).slice(-7);
      const last_reading = (Object.entries(dados)).slice(-1);
        this.leituras = vector;
        this.Ground_Temperature=last_reading[0][1].soilTemp;
         this.Ground_Humidity=last_reading[0][1].moistureHum;
         this.Air_Temperature=last_reading[0][1].airHum;
        this.Air_Humidity=last_reading[0][1].airTemp;
    //airHum: ' 0 ', airTemp: '', moistureHum: '19.1 ', timestamp: '1677596930'
      //console.log(vector)
      console.log(this.leituras)
      console.log(last_reading[0][1].soilTemp)
      
     

      //this.leituras= JSON.parse(JSON.stringify(snapshot.val().UsersData));
     // console.log(dados)
      //console.log(typeof(dados))

      // console.log(this.leituras.readings[2])
       //console.log(this.leituras['readings'])
      //console.log(data)
      // console.log(data.air_humidity)
      // get(child(dados,`stats/`)).then((snapshot) => {
      //   if(snapshot.exists()){
      //     console.log(snapshot.val())
      //   }else{
      //     console.log("não existe")
      //   }
      // })
    })
      
    }

  },
  created(){

    
    

    // const dados= ref(db)

    // onValue(dados,(snapshot)=>{
    // const data = snapshot.val().stats;
    //     this.Ground_Temperature=snapshot.val().stats.ground_temperature;
    //     this.Ground_Humidity=snapshot.val().stats.ground_humidity;
    //     this.Air_Temperature=snapshot.val().stats.air_temperature;
    //     this.Air_Humidity=snapshot.val().stats.air_humidity;
    //     console.log(data)
    // })
},
    
  
  
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