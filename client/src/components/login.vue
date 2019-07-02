<template>
    <div>
        <div class="container">
            <form class="form-signin">
                <h2 class="form-signin-heading">Please sign in</h2>
                <label for="username" class="sr-only">User Name</label>
                <input type="text" id="username" class="form-control" placeholder="User Name" v-model="username" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
                <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
                <label>
                    <router-link to="register">注册</router-link>
                </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" @click.prevent="login">Sign in</button>
            </form>
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            username:'',
            password:''
        }
    },
    methods: {
        login(){
            axios.post('/api/login',{
                username:this.username,
                password:this.password
            }).then(function(res){
                if(res.data.status_code == 2){
                    window.location.href = '/'
                }

            }).catch(function(err){
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>
