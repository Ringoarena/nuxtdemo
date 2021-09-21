<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          nuxt
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="true"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
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
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Introduktion',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'Vue.js grunder',
          to: '/vuebasics-demo'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Komponenter',
          to: '/components-demo'
        }
      ],
      right: true,
      title: 'Nuxt.js Demo'
    }
  }
}
</script>
