<template>
  <div>
    <v-sheet
      class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
      color="blue-grey darken-3"
      dark
    >
      <div class="grey--text text--lighten-1 text-body-2 mb-4">
        Are you sure you want to delete this album?
      </div>

      <v-btn
        class="ma-1"
        color="grey"
        plain
      >
        Cancel
      </v-btn>

      <v-btn
        class="ma-1"
        color="error"
        plain
      >
        Delete
      </v-btn>
    </v-sheet>
  </div>
</template>