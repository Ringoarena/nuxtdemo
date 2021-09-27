<template>
  <section>
      <h1 class="exampleClass">Vue.js basics</h1>
      <h2>More details...</h2>
    <hr class="my-10">
      <p>{{ message }}</p>
      <MyButton @click="handleClick" />
  </section>
</template>

<script>
import MyButton from '@/components/MyButton.vue'

export default {
  components: {
    MyButton
  },
  data() {
    return {
      message: 'Hello B3 Consulting Group!!!'
    }
  },
  methods: {
    handleClick() {
      this.message = 'Goodbye B3 Consulting Group :(('
    }
  }
}
</script>

<style>
.exampleClass {
  background: dodgerblue;
}

</style>