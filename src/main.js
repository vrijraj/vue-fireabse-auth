import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = '';

const config = {
  apiKey: "AIzaSyBiyEOKQ30AO6TExHMRy53EYXY5UkAofXk",
  authDomain: "vuejfirebase-auth.firebaseapp.com",
  databaseURL: "https://vuejfirebase-auth.firebaseio.com",
  projectId: "vuejfirebase-auth",
  storageBucket: "vuejfirebase-auth.appspot.com",
  messagingSenderId: "148494590482"
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app') 
  }
})
