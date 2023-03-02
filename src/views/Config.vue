<template>
     <div class="main">
       <Header :Title="title"/> 
       <div class="content">
            <div class="config-stats">
                <div class="config-ground-humidity">
                    <font-awesome-icon icon="fa-solid fa-droplet" />
                    <span class="config-ground-humidity-label">Umidade do solo:</span>
                    <span class="config-stat-label">Min</span>
                    <span class="config-ground-humidity-min-value">{{ Min_Ground_Humidity }} %</span>
                    <span class="config-stat-label">Max</span>
                    <span class="config-ground-humidity-max-value">{{ Max_Ground_Humidity }} %</span>
                </div>
                <div class="config-air-humidity">
                    <font-awesome-icon icon="fa-solid fa-droplet" />
                    <span class="config-air-humidity-label">Umidade Ambiente:</span>
                    <span class="config-stat-label">Min</span>
                    <span class="config-air-humidity-min-value">{{ Min_Air_Humidity }} %</span>
                    <span class="config-stat-label">Max</span>
                    <span class="config-air-humidity-max-value">{{ Max_Air_Humidity }} %</span>
                </div>
                <div class="config-ground-temperature">
                    <!-- <font-awesome-icon icon="fa-solid fa-temperature-low" /> -->
                    <font-awesome-icon icon="fa-solid fa-temperature-high" />
                    <span class="config-ground-temperature-label">Temperatura do solo:</span>
                    <span class="config-stat-label">Min</span>
                    <span class="config-ground-temperature-min-value">{{ Min_Ground_Temperature }} °C</span>
                    <span class="config-stat-label">Max</span>
                    <span class="config-ground-temperature-max-value">{{ Max_Ground_Temperature }} °C</span>
                </div>
                <div class="config-air-temperature">
                    <font-awesome-icon icon="fa-solid fa-temperature-high" />
                    <span class="config-air-temperature-label">Temperatura Ambiente:</span>
                    <span class="config-stat-label">Min</span>
                    <span class="config-air-temperature-min-value">{{ Min_Air_Temperature }} °C</span>
                    <span class="config-stat-label">Max</span>
                    <span class="config-air-temperature-max-value">{{ Max_Air_Temperature }} °C</span>
                </div>
            </div>
            <div class="config-buttons-container">
                <button class="config-button">Editar</button>
                <button class="config-button" @click="updateConfig()">Salvar</button>
                <button class="config-button">Cancelar</button>
            </div>
       </div>
    </div>
</template>
<script>
import Header from "../components/Header.vue"
import { ref, set, onValue, child, push, update } from "firebase/database";
import {db} from "@/firebase/index.js"
export default {
    components:{
        Header
    },
    data(){
        return{
            title:"Configuração",
            Max_Ground_Temperature:"32",
            Min_Ground_Temperature:"19",
            Max_Ground_Humidity:"90",
            Min_Ground_Humidity:"60",
            Max_Air_Temperature:"35",
            Min_Air_Temperature:"15",
            Max_Air_Humidity:"70",
            Min_Air_Humidity:"20",
            Max_Ground_Temperature_Input:"",
            Min_Ground_Temperature_Input:"",
            Max_Ground_Humidity_Input:"",
            Min_Ground_Humidity_Input:"",
            Max_Air_Temperature_Input:"",
            Min_Air_Temperature_Input:"",
            Max_Air_Humidity_Input:"",
            Min_Air_Humidity_Input:"",
            configs:[
            // Max_Ground_Temperature_Input,
            // Min_Ground_Temperature_Input,
            // Max_Ground_Humidity_Input,
            // Min_Ground_Humidity_Input,
            // Max_Air_Temperature_Input,
            // Min_Air_Temperature_Input,
            // Max_Air_Humidity_Input,
            // Min_Air_Humidity_Input

            ]
        }
    },
    methods:{
        updateConfig() {
            const dados= ref(db)

            update(ref(db, 'config/'), {
                max_ground_temperature:"32",
                min_ground_temperature:"19",
                max_ground_humidity:"85",
                min_ground_humidity:"60",
                max_air_temperature:"55",
                min_air_temperature:"15",
                max_air_humidity:"60",
                min_air_humidity:"20",
            });
            alert("Configurações Atualizadas com Sucesso!!!")
        }
        
    },
    created(){
       
        const dados= ref(db)

        onValue(dados,(snapshot)=>{
                const data = snapshot.val().config;
                this.Max_Ground_Temperature=snapshot.val().config.max_ground_temperature;
                this.Min_Ground_Temperature=snapshot.val().config.min_ground_temperature;
                this.Max_Ground_Humidity=snapshot.val().config.max_ground_humidity;
                this.Min_Ground_Humidity=snapshot.val().config.min_ground_humidity;
                this.Max_Air_Temperature=snapshot.val().config.max_air_temperature;
                this.Min_Air_Temperature=snapshot.val().config.min_air_temperature;
                this.Max_Air_Humidity=snapshot.val().config.max_air_humidity;
                this.Min_Air_Humidity=snapshot.val().config.min_air_humidity;
                
            })

    }
}

</script>
<style scoped>
    .content{
        align-items: center;
        flex-direction: column;
    }
    .config-stat-label{
        font-size: 1.5rem;
        margin: 1rem;
    }
    .config-stats{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
    }

    .config-ground-humidity,.config-air-humidity,.config-ground-temperature,.config-air-temperature{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        font-size: 2.5rem;

    }
    .config-ground-humidity-label,.config-ground-humidity-max-value,.config-ground-humidity-min-value,
    .config-air-humidity-label,.config-air-humidity-max-value,.config-air-humidity-min-value,.config-ground-temperature-label,
    .config-ground-temperature-max-value,.config-ground-temperature-min-value,.config-air-temperature-label,
    .config-air-temperature-max-value,.config-air-temperature-min-value{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 5px;
        width: 25rem;
    }



    .config-air-humidity-max-value,.config-air-humidity-min-value,.config-air-temperature-max-value,.config-air-temperature-min-value,
    .config-ground-humidity-max-value,.config-ground-humidity-min-value,.config-ground-temperature-max-value,.config-ground-temperature-min-value{
        justify-content: center;
        width: 4.5rem;
        height: 2.5rem;
        border: 0.1rem solid #0000ff;
        font-size: 1.8rem;
    }

    .fa-droplet{
        color: #0000ff;
    }

    .fa-temperature-high,.fa-temperature-low{
        color:#ff0000
    }

    .config-button{
        background-color: #064B15;
        color: #ffff;
        font-size: 1.5rem;
        width: 12vw;
        height: 5vh;
        margin: 1rem;
        border-radius: 50px;
    }

</style>