<template >
    <div class="main">
        <div class="box-login">
            <form @submit.prevent="login()">
            <p class="login-label">Tela de Login</p>
            <div class="input-box">
                <input class="input" type="email" placeholder="Usuario" required v-model="email">
                <input class="input" type="password" placeholder="Senha" required v-model="password">
            </div>
            <p class="signup-label">Não tem uma conta?</p>
            <button class="login-btn" @click="login">Entrar</button>
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