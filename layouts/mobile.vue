<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="true"
      fixed
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
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      iconsURL: 'https://materialdesignicons.com/',
      drawer: false,
      fixed: true,
      right: true,
      title: 'Nuxt.js Demo',
      password: ''
    }
  },
  methods: {
    async handleLogout() {
      console.log('logging out')
      await this.$store.dispatch('logout')
    }
  }
}
</script>
