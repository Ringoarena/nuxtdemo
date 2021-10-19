<template>
  <v-container>
    <h1>Middlewares</h1>
    <hr class="my-10">
    <ol>
      <li><h3>Create a plugin in the plugins folder</h3></li>
      <li><h3>Register your plugin in nuxt.config.js</h3></li>
      <li><h3>Access your plugin using the injected keys</h3></li>
    </ol>
    <p>Middlewares are functions that are run between navigations, they receive are passed the context object</p>
    <p>Router middlewares are executed between each navigation, like our analytics middleware</p>
    <p>Named middlewares are executed before entering specified pages, like this page.</p>
    <p>Anonymous middlewares or 'inline middlewares' are executed before entering the pages where they are declared</p>
    <p>Server middlewares are passed arguments request, response and next</p>
  </v-container>
</template>

<script>
export default {
  middleware: 'authRouteGuard'
}
</script>

<style>
</style>