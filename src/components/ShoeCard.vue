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
          <span class="font-weight-bold">{{size.size}}</span> &nbsp;  {{size.quantity}} pcs
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text">
        В корзину
      </v-btn>

      <v-btn
          variant="plain"
          @click="$router.push('/editGood/' + this.id)">
        Редактировать
      </v-btn>
      <v-btn variant="plain"
             @click="deleteGood(id)"
      >
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
      'sizes',
      'id'
  ],
  methods: {
    deleteGood(id){
      this.$emit("deleteGood", id)
    }
  }
}
</script>

<style scoped>

</style>