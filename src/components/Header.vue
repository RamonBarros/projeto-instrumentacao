<template>
    <div class="header-Main">
        <div class="menu-container">
            <button class="menu-btn" @click="gotoApresentation()"><i class="fa-solid fa-person-chalkboard"></i> Apresentação</button>
            <button class="menu-btn" @click="gotoCatalogSheet()"><i class="fa-solid fa-clipboard"></i> Ficha Catalográfica</button>
            <button class="menu-btn" @click="gotoSource()"><i class="fa-solid fa-magnifying-glass"></i> Fontes</button>
        </div>
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
        },
        gotoApresentation(){
            this.$router.push('/apresentation')
        },
        gotoCatalogSheet(){
            this.$router.push('/catalog')
        },
        gotoSource(){
            this.$router.push('/sources')
        }
    },
    props:['Title']
    
}
</script>

<style scoped>
.menu-container{
    display: flex;
    flex-direction: row;
    margin-left: 0px;
}
.menu-btn{
    background-color: transparent;
    border: none;
    color: #fff;
}
.header-Main{
    background-color: #064B15;
    width: 100vw;
    height: 20vh;
    margin-top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    /* border-radius: 0px 0px 40px 40px;  */
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
    
@media screen and (max-width: 600px) {

.header-Main{
    background-color: #064B15;
    width: 100vw;
    height: 15vh;
    /* border-radius: 0px 0px 40px 40px;  */
}
.header-Title{
    font-size: 4vh;
    margin:2rem;
}
.back-button{
    display: flex;
    padding: 1rem;
    margin-left: 75vw;
    font-size: 1rem;
    border-radius: 40px;
}

}
</style>