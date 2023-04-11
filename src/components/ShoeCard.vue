<template>
  <v-card>
    <v-card-title>
      {{title}}
    </v-card-title>
    <v-card-subtitle>
      {{subtitle}}
    </v-card-subtitle>
    <v-card-text>
      <v-chip-group>
        <v-chip
          v-for="size in sizes"
        >
          {{size.size}}  {{size.quantity}} pcs
        </v-chip>
      </v-chip-group>
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
      'sizes'
  ]
}
</script>

<style scoped>

</style>