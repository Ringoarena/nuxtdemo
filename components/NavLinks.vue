<template>
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
</template>

<script>
export default {
  data() {
    return {
      iconsURL: 'https://materialdesignicons.com/',
      items: [
        {
          icon: 'mdi-information',
          title: 'Introduction',
          to: '/'
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
          icon: 'mdi-database',
          title: 'Store demo',
          to: '/store-demo'
        },
        {
          icon: 'mdi-folder-multiple',
          title: 'Directories',
          to: '/directories-intro'
        },
        {
          icon: 'mdi-page-layout-body',
          title: 'Layouts demo',
          to: '/layouts-demo'
        },
        {
          icon: 'mdi-usb-flash-drive',
          title: 'Plugins demo',
          to: '/plugins-demo'
        },
        {
          icon: 'mdi-middleware-outline',
          title: 'Middleware demo',
          to: '/middleware-demo'
        },
        {
          icon: 'mdi-view-module',
          title: 'Modules demo',
          to: '/modules-demo'
        },
        {
          icon: 'mdi-stop-circle',
          title: 'Ending',
          to: '/ending'
        },
      ],
    }
  }

}
</script>

<style>
</style>