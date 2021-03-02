<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">Say hi!</h1>
        <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      </div>
      <form name="contact"
            class="contact-form">
        <div class="sender-info">
          <div><label for="name"
                   class="label">Your name</label>
            <input type="text"
                   name="name"
                   v-model="name">
          </div>
          <div><label for="email"
                   class="label">Your email</label>
            <input type="email"
                   name="email"
                   v-model="email">
          </div>
        </div>
        <div class="message"><label for="message"
                 class="label">Message</label>
          <textarea name="message"
                    v-model="message"></textarea>
        </div>
        <button class="button"
                @click.prevent="submitButton">Submit form</button>
      </form>
    </div>
  </Layout>
</template>

<script>
import { contactApi } from '../api/index'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async submitButton() {
      try {
        const data = await contactApi({ Name: this.name, Email: this.email, Message: this.message })
        alert('提交成功')
        window.location.reload();
      } catch {
      }
    }
  }
}
</script>

<style>
</style>