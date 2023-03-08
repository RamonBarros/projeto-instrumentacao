<template>
    <div class="main">
        <Header :Title="title"/>
    </div>
</template>

<script>
import Header from "../components/Header.vue"

export default {
    data(){
        return{
            title:"Apresentação"
        }
    },
    components:{
    Header}
    

}
</script>

<style>
    
</style>