<template>
  <v-card>
    <v-card-title>
      {{title}}
    </v-card-title>
    <v-card-subtitle>
      {{subtitle}}
    </v-card-subtitle>
    <v-card-text>
      {{telephone}}
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text">
        Add to cart
      </v-btn>

      <v-btn variant="plain">
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ShoeCard",
  props: [
    'title',
    'subtitle',
    'telephone'
  ]
}
</script>

<style scoped>

</style>