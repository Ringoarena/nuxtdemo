<template>
  <section>
    <h1 class="exampleClass">Vue.js basics</h1>
    <hr class="my-10">
    <v-row v-if="person" class="mt-4">
        <v-col cols="4">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 24 : 6">
              <v-card-title>{{person.name}}</v-card-title>
              <v-card-text>{{person.height}} cm tall</v-card-text>
              <v-card-text>{{person.url}}</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
    </v-row>
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
      message: 'Hello world',
      person: null
    }
  },
  methods: {
    handleClick() {
      this.message = 'Goodbye world'
    }
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
}
</script>

<style>
.exampleClass {
  background: dodgerblue;
}

</style>