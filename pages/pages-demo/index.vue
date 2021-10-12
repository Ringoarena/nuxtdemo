<template>
  <section>
      <h1>Pages demo</h1>
      <p>Nuxt automatically maps routes and page components based on the contents of the /pages directory</p>
      <hr class="my-10">
      <p>/pages/contacts.vue will be accessible through /contacts</p>
      <p>/pages/pages-demo/index.vue will be accessible through '/pages-demo'</p>
      <p>/pages/pages-demo/about.vue will be accessible through '/pages-demo/about'</p>
      <p>/pages/pages-demo/characters/_id.vue will be accessible through '/pages-demo/characters/{someId}'</p>
      <hr class="my-10">
      <nuxt-link to="/pages-demo/characters/1">/pages-demo/characters/1</nuxt-link>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>