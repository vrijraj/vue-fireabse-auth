<template>
    <div class="container mt-5">
        <div class="row mt-5">
            <div class="col-md-4 offset-md-4 mt-5">
                <h3>Login</h3>
                <p class="text-muted">Lorem ipsum dolor sit amet conseipisicing elit. </p>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputpassword">Password</label>
                    <input type="password" v-model="pass" class="form-control" id="exampleInputpassword" aria-describedby="passwordHelp" placeholder="Enter Password">
                </div>
                <button type="button" class="btn btn-primary" v-on:click="login">Login</button> &nbsp;
                <router-link to="signup">Create an New account</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase"
export default {
    data(){
        return {
            email:'',
            pass:''
        }
    },
    methods:{
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email,this.pass).then((user)=>{
                alert("You're Loggged In")
                this.$router.replace('home')
            }).catch(e=>{
                alert("Alert "+e)
            })
        }
    }
}
</script>
