<template>

  <v-dialog
      v-model="dialogOpened"
      width="auto"
  >
    <v-card>
      <v-card-text>
        Вы уверены?
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="deleteManufacturer(dialogManufacturerId); this.$router.go()">Да</v-btn>
        <v-btn color="primary" @click="dialogOpened = false">Нет</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

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
          :id="manufacturer.id"
          @delete="showDialog"
      />
    </v-col>
  </v-row>
</template>

<script>
import {shoeApi} from "./api/api.js";

import ManufacturerCard from "./components/ManufacturerCard.vue";
import Approval from "./components/Approval.vue";

export default {
  name: 'App',
  data: () => ({
    manufacturersData: {},
    dialogOpened: false,
    dialogManufacturerId: null,
  }),
  components: {
    Approval,
    ManufacturerCard
  },
  async mounted() {
    this.manufacturersData = await shoeApi.getAllManufacturers()
  },
  props: [
    "id"
  ],
  methods: {
    showDialog(id) {
      this.dialogOpened = true
      this.dialogManufacturerId = id
    },
    deleteManufacturer(id) {
      shoeApi.deleteManufacturer(id)
    }
  }
}
</script>