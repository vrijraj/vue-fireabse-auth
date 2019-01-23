<template>
  <div class="home text-center">
    <HelloWorld msg="Welcome to Your Vue.js Firebase Auth App"/>
    <p>You're Logged in with {{userEmail}}</p>
    <button type="button" class="btn btn-warning" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      user:[],
      userEmail:''
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    logout:function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    }
  },
  mounted:function(){
    if(firebase.auth().currentUser){
      this.user = firebase.auth().currentUser
      this.userEmail = this.user.email;
    }
  }
  
}
</script>
