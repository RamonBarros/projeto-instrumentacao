<template >
    <div class="main">
        <div class="box-login">
            <p class="login-label">Tela de Login</p>
            <div class="input-box">
                <input class="input" type="text" placeholder="Usuario">
                <input class="input" type="text" placeholder="Senha">
            </div>

            <button class="login-btn">Entrar</button>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.main{
    background-image: url(../../public/imgs/TelaLogin.png);
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
}

.input::placeholder{
    color:#fff;
}

.login-label{
    font-size: 5vh;
}

</style>