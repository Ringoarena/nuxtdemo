<template>
  <v-content>
      <h1 class="exampleClass">Grunderna i Vue.js</h1>
      <h2>Mer detaljer..</h2>
    <hr class="my-10">
      <p>{{ message }}</p>
      <MyButton @click="handleClick" />
  </v-content>
</template>

<script>
import MyButton from '@/components/MyButton.vue'

export default {
  components: {
    MyButton
  },
  data() {
    return {
      message: 'Hej B3 Consulting Group!!!'
    }
  },
  methods: {
    handleClick() {
      this.message = 'Hejdå B3 Consulting Group :(('
    }
  }
}
</script>

<style>
.exampleClass {
  background: dodgerblue;
}

</style>