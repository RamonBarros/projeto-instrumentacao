<template>
  <router-view/>
</template>

<script>
import { auth } from './firebase/index.js';

export default {
  data() {
    return {
    }
  },
  mounted() {
    if(auth.currentUser){
      console.log(auth.currentUser)
    } else(
      this.$router.push('/')
    )
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
