<template>
  <div class="container">
    <div class="contact-header">
      <h1 class="contact-title">Welcome to login</h1>
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
          <label for="password"
                 class="label">Your Password</label>
          <input type="password"
                 name="password"
                 v-model="password">
        </div>
      </div>

      <div class="sender-info">
        <button class="button"
                @click.prevent="submitButton">Login form</button>
      </div>

    </form>

    <div>
      <g-link to="/Register">去注册 ></g-link>
    </div>

  </div>
</template>

<script>
import { loginApi } from '../api/index'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submitButton() {
      try {
        const userInfo = await loginApi({ identifier: this.username, password: this.password })
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        localStorage.replace('/')
      } catch {
        alert('登录失败, 请稍后再试！')
      }
    }
  }
}
</script>

<style>
</style>