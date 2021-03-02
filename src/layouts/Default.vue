<template>
  <div id="app"
       class="layout sticky-header">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <a href="/"
             class="home-link active--exact active">
            <img src="../assets/img/logo.svg"
                 class="logo"></a>
        </div>
        <nav class="nav right">
          <g-link to="/journal"
                  class="nav__link">Journal</g-link>
          <g-link to="/contact"
                  class="nav__link">Say Hi!</g-link>
          <g-link to="/user-Info"
                  class="nav__link"
                  v-if="userInfo">Welcome, {{userInfo.user.username}}</g-link>
        </nav>
      </div>
    </header>

    <slot />

    <footer class="footer">
      <div class="container"><span>Copyright © 2021</span></div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      userInfo: undefined
    }
  },
  mounted() {
    this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  }
}
</script>

<style>
</style>
