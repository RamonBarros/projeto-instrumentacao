<template >
    <div class="main">
        <div class="box-login">
            <p class="login-label">Tela de Login</p>
            <div class="input-box">
                <input class="input" type="text" placeholder="Usuario">
                <input class="input" type="text" placeholder="Senha">
            </div>
            <p class="signup-label">Não tem uma conta?</p>
            <button class="login-btn" @click="goToHome()">Entrar</button>
        </div>
        
    </div>
</template>

<script>
export default {
    methods:{
        goToHome(){
            this.$router.push('/home')
        }
    }
    
}
</script>

<style scoped>
.main{
    background-image: url(../../public/imgs/TelaLogin.png);
    justify-content: center;
    align-items: center;
}
.box-login{
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    width: 70vh;
    height: 40vh;
    border-radius: 50px;
    background-color: #fff;
}

.input-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.input{
    background-color: #064B15;
    border-radius: 30px;
    width: 25vw;
    height: 3vh;
    margin: 0.8vw;
    color: #fff;
    padding-left: 10px;
    box-sizing: border-box;
}

.input::placeholder{
    color:#fff;
}

.login-label{
    font-size: 5vh;
    margin-bottom: 0;
}

.login-btn{
    background-color: #064B15;
    color: #fff; 
    border-radius: 30px;
    width: 8vw;
    height: 5vh;
    font-size: 2vw;
    
}

.signup-label{
    margin-top: 0;
    margin-right: 15vw;
}

</style>