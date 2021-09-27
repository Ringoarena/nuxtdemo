<template>
  <section>
    <h1>Plugins demo</h1>
    <h2>Plugins are used to provide a global, abstract interface to third party libraries.</h2>
    <h2>They replace the vue.use(plugin) syntax</h2>
    <hr class="my-10">
    <ol>
      <li><h3>Create a plugin in the plugins folder</h3></li>
      <li><h3>Register your plugin in nuxt.config.js</h3></li>
      <li><h3>Access your plugin using the injected keys</h3></li>
    </ol>
    <hr class="my-10">
    <h3>The following messages are injected on the...</h3>
    <h3>Client side: <span class="blue--text">{{getPluginVariable}}</span></h3>
    <h3>Server side: <span class="blue--text">{{$serverMsg}}</span></h3>
    <h3>Server side through merged data: <span class="blue--text">{{serverMsgLocal}}</span></h3>
    <h3>Both sides: <span class="blue--text">{{$globalMsg}}</span></h3>
    <hr class="my-10">
    <h2>Call functions injected by plugins</h2>
    <v-text-field v-model="myInput" label="Regular"></v-text-field>
    <v-btn :loading="loading" @click="handleClick" color="primary">Fetch!</v-btn>
    <v-card v-for="(person) in persons" :key="person.name" :loading="person.clearing" class="ma-10">
      <v-card-title>{{person.name}}</v-card-title>
      <v-card-text>{{person.height}} cm tall</v-card-text>
      <v-card-text>{{person.url}}</v-card-text>
      <v-card-actions>
      <v-btn
        text
        color="primary"
        @click="clearData(person)"
      >
        Clear
      </v-btn>
    </v-card-actions>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      myInput: 1,
      loading: false,
      persons: [],
    }
  },
  asyncData(context) {
    if(process.server) {
      console.log('This code is executing on the server, the returned object will be merged with local data')
    }
    return {
      serverMsgLocal: context.$serverMsg,
    }
  },
  methods: {
    async handleClick() {
      this.loading = true
      setTimeout(async () => {
        const person = await this.$fetchData(this.myInput)
        person.clearing = false;
        if (!this.persons.some((p) => p.name === person.name)) {
          this.persons.push(person)
        }
        this.loading = false
      }, 1000)
    },
    clearData(person) {
      person.clearing = true
      setTimeout(() => {
        this.persons = this.persons.filter((p) => p.name !== person.name)
      }, 4000)
      
    }
  },
  computed: {
    getPluginVariable() {
      return this.$pluginVariable
    }
  }

}
</script>

<style>

</style>