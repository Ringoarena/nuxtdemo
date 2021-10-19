<template>
  <v-container>
    <h1>Components demo</h1>
    <p>Nuxt will scan the /components directory for .vue files and automatically import them into all .vue files.</p>
    <p>To scan other directories such as /components/webshop additional configuration is required in nuxt.config.js</p>
    <hr class="my-10">
    <DemoComponent />
    <hr class="my-10">
    <NuxtLogo />
    <hr class="my-10">
    <MyWeather />
  </v-container>
</template>