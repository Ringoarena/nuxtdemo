<template>
  <v-app>
    <h1>{{ error.statusCode }}</h1>
    <h1>{{ error.message }}</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title = 'An error occurred'
    return {
      title
    }
  }
}
</script>