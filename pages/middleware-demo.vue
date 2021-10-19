<template>
  <section>
    <h1>Middlewares</h1>
    <hr class="my-10">
    <p>Middlewares are functions that are run between navigations, they receive are passed the context object</p>
    <p>Router middlewares are executed between each navigation, like our analytics middleware</p>
    <p>Named middlewares are executed before entering specified pages, like this page.</p>
    <p>Anonymous middlewares or 'inline middlewares' are executed before entering the pages where they are declared</p>
    <p>Server middlewares are passed arguments request, response and next</p>
  </section>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style>
</style>