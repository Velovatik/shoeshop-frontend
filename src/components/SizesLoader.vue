<template>
  <div>
    <v-row
        v-for="size in sizes"
        :key="size"
    >
      <v-col>
        <v-text-field
            v-model="size.size"
            type="number"
            label="Размер"
            density="compact"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
            v-model="size.quantity"
            type="number"
            label="Количество"
            density="compact"
        ></v-text-field>
      </v-col>

      <v-btn
          rounded
          @click="removeSize(size)"
      >-</v-btn>
    </v-row>
    <v-btn
        rounded
        @click="addSize"
    >+</v-btn>
  </div>
</template>

<script>
export default {
  name: "SizesLoader",
  props: [
    'sizes'
  ],
  methods: {
    addSize() {
      this.sizes.push(
          {
            size: null,
            quantity: null
          }
      )
    },
    removeSize(size) {
      this.sizes.splice(this.sizes.indexOf(size), 1)
    }
  },
  watch: {
    sizes: {
      handler(newValue) {
        this.$emit('sizeChange', newValue)
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>