<template>
  <v-btn
      variant="plain"
      @click="$router.push('/manufacturers')"
  >Назад</v-btn>

  {{manufacturerData}}

  <v-text-field
      v-model="manufacturerData.manufacturerName"
      :rules="rules"
      label="Название поставщика*"
  ></v-text-field>

  <v-text-field
      v-model="manufacturerData.address"
      :rules="rules"
      label="Адрес"
  ></v-text-field>

  <v-text-field
      v-model="manufacturerData.telephone"
      :rules="rules"
      label="Телефон"
  ></v-text-field>

  <v-btn
      variant="outlined"
      @click="updateManufacturer()"
  >Сохранить изменения</v-btn>

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
            id: this.manufacturerData.id,
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