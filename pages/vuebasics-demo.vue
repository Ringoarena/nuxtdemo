<template>
  <section>
    <h1 class="exampleClass">Vue.js basics</h1>
    <h2>More details...</h2>
    <v-card v-if="person" class="ma-10">
      <v-card-title>{{person.name}}</v-card-title>
      <v-card-text>{{person.height}} cm tall</v-card-text>
      <v-card-text>{{person.url}}</v-card-text>
    </v-card>
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
  async mounted() {
    const response = await fetch(`https://swapi.dev/api/people/1`)
    const data = await response.json()
    const foundPerson = {
      name: data.name,
      height: data.height,
      url: data.url,
    }
    this.person = foundPerson
  },
  data() {
    return {
      message: 'Hello world',
      person: null
    }
  },
  methods: {
    handleClick() {
      this.message = 'Goodbye world'
    }
  }
}
</script>

<style>
.exampleClass {
  background: dodgerblue;
}

</style>