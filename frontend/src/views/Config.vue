<template>
     <div class="main">
       <Header :Title="title"/> 
       <div class="content">
            <div class="config-stats">
                <div class="config-ground-humidity">
                    <span class="config-ground-humidity-label">Umidade do solo:</span>
                    <span class="config-ground-humidity-min-value">{{ Min_Ground_Humidity }} %</span>
                    <span class="config-ground-humidity-max-value">{{ Max_Ground_Humidity }} %</span>
                </div>
                <div class="config-air-humidity">
                    <span class="config-air-humidity-label">Umidade Ambiente:</span>
                    <span class="config-air-humidity-min-value">{{ Min_Air_Humidity }} %</span>
                    <span class="config-air-humidity-max-value">{{ Max_Air_Humidity }} %</span>
                </div>
                <div class="config-ground-temperature">
                    <span class="config-ground-temperature-label">Temperatura do solo:</span>
                    <span class="config-ground-temperature-min-value">{{ Min_Ground_Temperature }} °C</span>
                    <span class="config-ground-temperature-max-value">{{ Max_Ground_Temperature }} °C</span>
                </div>
                <div class="config-air-temperature">
                    <span class="config-air-temperature-label">Temperatura Ambiente:</span>
                    <span class="config-air-temperature-min-value">{{ Min_Air_Temperature }} °C</span>
                    <span class="config-air-temperature-max-value">{{ Max_Air_Temperature }} °C</span>
                </div>
            </div>

       </div>
    </div>
</template>
<script>
import Header from "../components/Header.vue"
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
        }
    }
}
</script>
<style scoped>
    .content{
        align-items: center;
        flex-direction: column;
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

</style>