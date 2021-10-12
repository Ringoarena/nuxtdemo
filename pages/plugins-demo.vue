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
    <h3>Client side: <span class="blue--text">{{getClientVariable}}</span></h3>
    <h3>Server side: <span class="blue--text">{{$serverMsg}}</span></h3>
    <h3>Merged on the server side through "asyncData": <span class="blue--text">{{mergedServerMsg}}</span></h3>
    <h3>Both sides: <span class="blue--text">{{$globalMsg}}</span></h3>
    <hr class="my-10">
    <h2>Call functions injected by plugins</h2>
    <v-text-field v-model="myInput" label="Character id"></v-text-field>
    <v-btn :loading="fetching" @click="handleClick" color="primary">Fetch!</v-btn>
    <v-row class="mt-4">
      <v-col cols="4" v-for="(person) in persons" :key="person.name">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 24 : 6" :loading="person.clearing">
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
        </v-hover>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      myInput: 1,
      fetching: false,
      persons: [],
    }
  },
  asyncData(context) {
    if(process.server) {
      console.log('Executing on the server, nuxt will have access to the variable')
    } else {
      console.log('Executing on the client, nuxt will NOT have access to the variable')
    }
    return {
      mergedServerMsg: context.$serverMsg,
    }
  },
  methods: {
    async handleClick() {
      this.fetching = true
      const arg = this.myInput
      setTimeout(async () => {
        const person = await this.$fetchData(arg)
        person.clearing = false;
        if (!this.persons.some((p) => p.name === person.name)) {
          this.persons.push(person)
        }
        this.fetching = false
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
    getClientVariable() {
      return this.$clientVariable
    }
  }
}
</script>