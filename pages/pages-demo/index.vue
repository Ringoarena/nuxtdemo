<template>
  <v-container>
      <h1>Pages demo</h1>
      <hr class="my-10">
      <p>Nuxt automatically maps routes and page components based on the contents of the /pages directory</p>
      <ul>
        <li><p>/pages/contacts.vue will be accessible through /contacts</p></li>
        <li><p>/pages/pages-demo/index.vue will be accessible through '/pages-demo'</p></li>
        <li><p>/pages/pages-demo/about.vue will be accessible through '/pages-demo/about'</p></li>
        <li><p>/pages/pages-demo/characters/_id.vue will be accessible through '/pages-demo/characters/{someId}'</p></li>
      </ul>
      <hr class="my-10">
      <nuxt-link to="/pages-demo/characters/1">/pages-demo/characters/1</nuxt-link>
  </v-container>
</template>