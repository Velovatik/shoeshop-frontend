<template>
  <v-btn
  variant="plain"
  @click="$router.push('/newManufacturer')"
  >Добавить поставщика</v-btn>
  <v-row>
    <v-col
        col="12"

        lg="4"
        xl="4"
        xxl="4"
        v-for="manufacturer in manufacturersData"
        :key="manufacturer.id"
    >
      <ManufacturerCard
          :title="manufacturer.manufacturerName"
          :subtitle="manufacturer.address"
          :telephone="manufacturer.telephone"
      />
    </v-col>
  </v-row>
</template>

<script>
import {shoeApi} from "./api/api.js";

import ManufacturerCard from "./components/ManufacturerCard.vue";

export default {
  name: 'App',
  data: () => ({
    manufacturersData: {}
  }),
  components: {
    ManufacturerCard
  },
  async mounted() {
    this.manufacturersData = await shoeApi.getAllManufacturers()
  }
}
</script>