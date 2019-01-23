<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <h3>Sign Up</h3>
                <p class="text-muted">Lorem ipsum dolor sit amet conseipisicing elit. </p>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" v-model="emailid" class="form-control" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputpassword">Password</label>
                    <input type="password" v-model="pass" class="form-control" placeholder="Enter Password">   
                </div>
                <button type="button" class="btn btn-primary" v-on:click="signup">Sign Up</button> &nbsp;
                <router-link to="login">Back to Login</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            emailid: '',      
            pass : ''  
        }
    },
    methods:{
        signup:function(){
            firebase.auth().createUserWithEmailAndPassword(this.emailid,this.pass).then((user)=>{
                alert('Your Account Has Been Created')
                this.$router.replace('home')
            }).catch(e=>{
                alert("Alert "+e)
            })
        }
    }
}
</script>
