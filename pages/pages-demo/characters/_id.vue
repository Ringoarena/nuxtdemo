<template>
  <section>
      <h1>/pages-demo/characters/{{id}}</h1>
      <v-card v-if="person" class="ma-10">
        <v-card-title>{{person.name}}</v-card-title>
        <v-card-text>{{person.height}} cm tall</v-card-text>
        <v-card-text>{{person.url}}</v-card-text>
      </v-card>
  </section>
</template>

<script>
export default {
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