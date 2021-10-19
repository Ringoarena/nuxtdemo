<template>
  <v-container>
    <h1>Layouts</h1>
    <hr class="my-10">
    <p>Layouts lets you specify the top level layout of your GUI</p>
    <p>A Layout is a special page that mounts the current page along with other elements.</p>
    <p>For instance, the white box with rounted border that you currently see is a page, all the rest is part of the layout</p>
    <p>A page can decide which layout to use, and it can do so dynamically.</p>
    <hr class="my-10">
    <section>
    <div v-if="$device.isDesktop">
      Device: Desktop
    </div>
    <div v-if="$device.isTablet">
      Device: Tablet
    </div>
    <div v-if="$device.isMobile">
      Device: Mobile
    </div>
    </section>
  </v-container>
</template>

<script>
export default {
  layout: (context) => context.$device.isMobile ? 'mobile' : 'default'
}
</script>

<style>
</style>