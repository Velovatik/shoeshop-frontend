<template>
  <v-btn
      variant="plain"
      @click="$router.push('/manufacturers')"
  >Назад</v-btn>

  {{newManufacturerData}}

  <v-text-field
      v-model="newManufacturerData.manufacturerName"
      :rules="rules"
      label="Название поставщика*"
  ></v-text-field>

  <v-text-field
      v-model="newManufacturerData.address"
      :rules="rules"
      label="Адрес"
  ></v-text-field>

  <v-text-field
      v-model="newManufacturerData.telephone"
      :rules="rules"
      label="Телефон"
  ></v-text-field>

  <v-btn
  variant="outlined"
  @click="postNewManufacturer()"
  >Добавить</v-btn>

</template>

<script>
import {shoeApi} from "./api/api.js";

export default {
  name: "NewManufacturer",
  data: () => ({newManufacturerData: {
      manufacturerName: null,
      address: null,
      telephone: null
    }
  }),
  methods: {
    postNewManufacturer() {
      shoeApi.postNewManufacturer({
        manufacturerName: this.newManufacturerData.manufacturerName,
        address: this.newManufacturerData.address,
        telephone: this.newManufacturerData.telephone
          }
      )
    }
  }
}
</script>

<style scoped>

</style>