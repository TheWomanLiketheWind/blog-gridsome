<template>
  <div class="container">
    <div class="contact-header">
      <h1 class="contact-title">Welcome to register</h1>
      <p>Please fill in the following information</p>
    </div>
    <form name="contact"
          class="contact-form">
      <div class="sender-info">
        <div>
          <label for="name"
                 class="label">Your Username</label>
          <input type="text"
                 name="name"
                 v-model="username">
        </div>

      </div>
      <div class="sender-info">
        <div>
          <label for="email"
                 class="label">Your Email</label>
          <input type="email"
                 name="email"
                 v-model="email">
        </div>
      </div>

      <div class="sender-info">
        <div>
          <label for="password"
                 class="label">Your Password</label>
          <input type="password"
                 name="password"
                 v-model="password">
        </div>
      </div>
      <div class="sender-info">
        <button class="button"
                @click.prevent="submitButton">Register form</button>
      </div>
    </form>

    <div>
      <g-link to="/Login">去登录 ></g-link>
    </div>
  </div>
</template>

<script>
import { registerApi } from '../api/index'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async submitButton() {
      try {
        const userInfo = await registerApi({ username: this.username, email: this.email, password: this.password })
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        window.location.replace('/')
      } catch {
        alert('注册失败, 请稍后再试！')
      }
    }
  }
}
</script>

<style>
</style>