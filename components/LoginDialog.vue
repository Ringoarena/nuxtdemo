
<template>
  <span>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Login
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Login Form</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="username"
                  label="Username"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row v-if="formError"><span>{{formError}}</span></v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="handleLogin"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      username: '',
      password: '',
      formError: null
    }),
    methods: {
      async handleLogin() {
        try {
          await this.$store.dispatch('login', {
              username: this.username,
              password: this.password
          })
          this.username = ''
          this.password = ''
          this.formError = null
          this.dialog = false
        } catch (error) {
          this.formError = error.message
        }
      },
      async handleLogout() {
        console.log('logging out')
        await this.$store.dispatch('logout')
      }
    }
  }
</script>