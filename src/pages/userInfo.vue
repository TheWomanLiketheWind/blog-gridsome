<template>
  <Layout>
    <div class="container">
      <form name="contact"
            class="contact-form">
        <div class="sender-info">
          <div>
            <label for="name"
                   class="label">Your Username</label>
            <input type="text"
                   name="name"
                   v-model="username"
                   disabled>
          </div>

        </div>
        <div class="sender-info">
          <div>
            <label for="email"
                   class="label">Your Email</label>
            <input type="email"
                   name="email"
                   v-model="email"
                   disabled>
          </div>
        </div>

        <div class="sender-info">
          <div>
            <label for="password"
                   class="label">Your Password</label>
            <input type="password"
                   name="password"
                   v-model="password"
                   disabled>
          </div>
        </div>
        <div class="sender-info">
          <button class="button"
                  @click.prevent="Logout">Log out</button>
        </div>
      </form>
    </div>
  </Layout>
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
  mounted() {
    const { user: { username, email } } = JSON.parse(localStorage.getItem('userInfo'))
    this.username = username
    this.email = email
  },
  methods: {
    // 退出登录
    Logout() {
      localStorage.clear()
      window.location.replace('/')
    }
  }
}
</script>

<style>
</style>