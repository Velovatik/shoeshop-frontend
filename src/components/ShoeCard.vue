<template>
  <v-card>
    <v-card-title>
      {{title}}
    </v-card-title>
    <v-card-subtitle>
      {{subtitle}}
    </v-card-subtitle>
    <v-card-text>
      {{text}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ShoeCard",
  props: [
      'title',
      'subtitle',
      'text'
  ]
}
</script>

<style scoped>

</style>