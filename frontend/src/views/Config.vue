<template>
     <div class="main">
       <Header :Title="title"/> 
       <div class="content">
           
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
            title:"Configuração"
        }
    }
}
</script>
<style scoped>
    
</style>