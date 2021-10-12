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
    <v-main class="blue lighten-5">
      <v-main class="white rounded-lg ma-16 pa-10">
        <Nuxt />
      </v-main>
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
      iconsURL: 'https://materialdesignicons.com/',
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-information',
          title: 'Introduction',
          to: '/'
        },
        {
          icon: 'mdi-folder-multiple',
          title: 'Directories',
          to: '/directories-intro'
        },
        {
          icon: 'mdi-alphabetical',
          title: 'Vue.js basics',
          to: '/vuebasics-demo'
        },
        {
          icon: 'mdi-collage',
          title: 'Components demo',
          to: '/components-demo'
        },
        {
          icon: 'mdi-book-open-page-variant',
          title: 'Pages demo',
          to: '/pages-demo'
        },
        {
          icon: 'mdi-usb-flash-drive',
          title: 'Plugins demo',
          to: '/plugins-demo'
        }
      ],
      right: true,
      title: 'Nuxt.js Demo'
    }
  }
}
</script>
