<template>
  <router-view/>
</template>

<script>
import { auth } from './firebase/index.js';
import {db} from "./firebase/index.js";
import { ref, onValue, get, child} from "firebase/database";

export default {
  data() {
    return {
      leituras:[],
      leiturasArray:[],
    }
  },
  methods:{
    //  getValues(){
    //   const dados= ref(db)
    //     onValue(dados,(snapshot)=>{
    //   let dados =JSON.parse(JSON.stringify(snapshot.val().UsersData.readings));
    //   const vector= (Object.entries(dados)).slice(-7);
    //   this.leituras = vector;
    //   console.log(vector)
    //   console.log(this.leituras)
     

    //   //this.leituras= JSON.parse(JSON.stringify(snapshot.val().UsersData));
    //  // console.log(dados)
    //   //console.log(typeof(dados))

    //   // console.log(this.leituras.readings[2])
    //    //console.log(this.leituras['readings'])
    //   //console.log(data)
    //   // console.log(data.air_humidity)
    //   // get(child(dados,`stats/`)).then((snapshot) => {
    //   //   if(snapshot.exists()){
    //   //     console.log(snapshot.val())
    //   //   }else{
    //   //     console.log("não existe")
    //   //   }
    //   // })
    // })
      
    // }

  },
  mounted() {

    if(auth.currentUser){
      console.log("logado")
    } 
    else(
      this.$router.push('/')
    )
  },
   created(){
    //this.getValues()
    // const dados= ref(db)
    // onValue(dados,(snapshot)=>{
    //   const data = snapshot.val().UsersData.readings.Target;
    //   this.leituras= JSON.stringify(snapshot.val().UsersData);
    //   this.leiturasArray=this.leituras.readings

    //   //console.log(data)
    //   console.log(this.leituras)
    //   console.log(this.leiturasArray)
    //   //console.log(data)
    //   // console.log(data.air_humidity)
    //   // get(child(dados,`stats/`)).then((snapshot) => {
    //   //   if(snapshot.exists()){
    //   //     console.log(snapshot.val())
    //   //   }else{
    //   //     console.log("não existe")
    //   //   }
    //   // })
    // })
   
  }


 
}

</script>


<style>

body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app{
  height: 100%;
  width: 100%;
}
.main{
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.content{
    display: flex;
    justify-content: flex-start;
}
</style>
