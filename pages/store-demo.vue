<template>
  <v-container>
    <h1>Store demo</h1>
    <hr class="my-10">
    <ul>
      <li><p>The store is where we keep our global application state, state that we want to access from many different components.</p></li>
      <li><p>We have a varible called interestRate, it has the value: {{ interestRate }}</p></li>
    </ul>
    <v-text-field v-model="myInput" label="Enter new interest rate"></v-text-field>
    <v-btn @click="handleClick" color="primary">Submit</v-btn>
    <p class="pt-5">The store is available in Vue, but we have to set it up manually. In Nuxt all we have to do is create /store/index.js</p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      myInput: ''
    }
  },
  computed: {
    interestRate() {
      return this.$store.state.interestRate
    }
  },
  methods: {
    handleClick() {
      const arg = this.myInput
      this.$store.dispatch('newInterestRate', arg)
    }
  }
}
</script>

<style>
</style>