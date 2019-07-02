<template>
  <div>
    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please sign up</h2>
        <label for="inputUser" class="sr-only">User Name</label>
        <input
          type="text"
          id="inputUser"
          class="form-control"
          placeholder="User Name"
          required
          autofocus
          v-model="username"
        >
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
          v-model="password"
        >
        <label for="inputConfirmPassword" class="sr-only">Confirm Password</label>
        <input
          type="password"
          id="inputConfirmPassword"
          class="form-control"
          placeholder="Confirm Password"
          required
        >
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
          v-model="email"
        >
        <button class="btn btn-lg btn-primary btn-block" @click.prevent="register">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {
    register() {
      axios.post("/api/register", {
          username: this.username,
          password: this.password,
          email: this.email
        }).then(function(res){
          console.log(res)
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
};
</script>

<style>
</style>