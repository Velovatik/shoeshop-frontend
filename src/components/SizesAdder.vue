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
    </v-row>
    <v-btn
        rounded
        @click="addSize"
    >+</v-btn>
  </div>
</template>

<script>
export default {
  name: "SizesAdder",
  data() {
    return {
      sizes: [],
    }
  },
  mounted() {
    this.addSize()
  },
  methods: {
    addSize() {
      this.sizes.push(
          {
            size: null,
            quantity: null
          }
      )
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