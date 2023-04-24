<template>
  <v-btn
      variant="plain"
      @click="$router.push('/manufacturers')"
  >Назад</v-btn>

  {{manufacturerData}}
</template>

<script>
import {shoeApi} from "./api/api.js";

export default {
  name: "EditManufacturer",
  data() {
    return {
      editId: null,
      manufacturerData: {
        id: null,
        manufacturerName: null,
        address: null,
        telephone: null
      }
    }
  },
  async mounted() {
    this.editId = this.$route.params.id

    this.manufacturerData = await shoeApi.getManufacturer(this.editId)

  },
  methods: {
    updateManufacturer() {
      shoeApi.updateManufacturer({
            manufacturerName: this.manufacturerData.manufacturerName,
            address: this.manufacturerData.address,
            telephone: this.manufacturerData.telephone
          }
      )
    }
  }
}
</script>

<style scoped>

</style>