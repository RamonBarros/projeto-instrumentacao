<template>
    <div class="header-Main">
        <p class="header-Title">{{Title}}</p>
        <button class="back-button" @click="goBack()">Voltar</button>
    </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
    props:['Title']
    
}
</script>

<style scoped>

.header-Main{
    background-color: #064B15;
    width: 100vw;
    height: 20vh;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-Title{
    font-size: 8vh;
    color: #fff;
    margin:20rem;
}

.back-button{
    background-color: #fff;
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    color: #064B15;
    margin-left: 75vw;
    font-size: 3rem;
    border-radius: 40px;
    position: absolute;
}
    
</style>