<template>
  <v-card>
    <v-card-title>
      {{title}}
    </v-card-title>
    <v-card-subtitle>
      {{subtitle}}
    </v-card-subtitle>
    <v-card-text>
      {{price}} руб.
      <v-chip-group v-model="selectedSize" selected-class="text-pink-accent-4">
        <v-chip
          v-for="size in sizes"
        >
          <span class="font-weight-bold">{{size.size}}</span> &nbsp;  {{size.quantity}} pcs
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" @click="addToCart" :disabled="selectedSize == null">
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
      'price',
      'id',
      'inStock'
  ],
  data() {
    return {
      selectedSize: null
    }
  },
  methods: {
    deleteGood(id){
      this.$emit("deleteGood", id)
    },
    addToCart() {
      this.$emit("addToCart", {id: this.id, title: this.title, price: this.price, size: this.sizes[this.selectedSize].size,
        inStock: this.sizes[this.selectedSize].quantity})
    }
  }
}
</script>

<style scoped>

</style>