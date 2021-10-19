<template>
  <v-container>
      <h1>/pages-demo/characters/{{id}}</h1>
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      person: null
    }
  },
  async asyncData(context) {
    const id = context.params.id
    const person = await context.$fetchData(id)
    return {
      id,
      person
    }
  }
}
</script>