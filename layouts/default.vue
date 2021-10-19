<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="true"
      :fixed="true"
      app
    >
      <NavLinks />
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="true"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <LoginDialog v-if="!$store.state.authUser" />
      <v-btn v-else @click="handleLogout" color="primary">Logout</v-btn>
    </v-app-bar>
    <v-main class="blue lighten-5">
      <div class="white rounded-lg ma-4 pa-5">
        <Nuxt />
      </div>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; Rikard Virta, B3 Innovation {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      title: 'Nuxt.js Demo',
    }
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
