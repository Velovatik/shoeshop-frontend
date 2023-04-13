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
        Редактировать
      </v-btn>

      <v-btn variant="plain">
        Удалить
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