<template >
    <div class="main">
        <div class="box-login">
            <form @submit.prevent="login()">
            <div class="centralize-box">
                <p class="login-label">Tela de Login</p>
            </div>
            <div class="input-box">
                <input class="input" type="email" placeholder="Usuario" required v-model="email">
                <input class="input" type="password" placeholder="Senha" required v-model="password">
            </div>
            <p class="signup-label">Não tem uma conta?</p>
            <div class="btn-box">
                <button class="login-btn" @click="login">Entrar</button>
            </div>
        
            </form>
        </div>
        
    </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/index.js'
export default {
    data(){
        return{
            email:"",
            password:"",
            displayName:""
        }
    },
    
    methods:{
        login(){
            signInWithEmailAndPassword(auth,this.email,this.password)
            .then(()=>{
                this.$emit('loggedIn')
                this.$router.push('/home')
            })
            
        }
    },
    beforeUpdate(){
    if(auth.currentUser){
      this.displayName= auth.currentUser.displayName
    }
  }
    
}
</script>

<style scoped>
.main{
    background-image: url(../../public/imgs/TelaLogin.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: center;
    align-items: center;
}
.box-login{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 35vw;
    height: 35vh;
    border-radius: 50px;
    background-color: #fff;
}
.btn-box{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.centralize-box{
    display: flex;
    justify-content: center;
    align-items: center;
   
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
    width: 30vw;
    height: 3.5vh;
    margin: 0.8vw;
    color: #fff;
    padding-left: 10px;
    box-sizing: border-box;
}

.input::placeholder{
    color:#fff;
}

.login-label{
    font-size: 3vw;
    margin: 0px;
}

.login-btn{
    background-color: #064B15;
    color: #fff; 
    border-radius: 30px;
    width: 7w;
    height: 5vh;
    font-size: 1.5vw;
}

.signup-label{
    margin-top: 0;
    margin-right: 15vw;
}

@media screen and (max-width: 600px) {
  .box-login {
    width: 75vw;
    height: 22vh;
  }
  .input{
    width: 60vw;
    height: 3vh;
    margin: 0.8vw;
  }
  .login-btn{
    border-radius: 20px;
    width: 12vw;
    height: 4vh;
    font-size: 2.5vw;
}

.login-label{
    font-size: 6vw;
    margin: 0px;
}

}
</style>