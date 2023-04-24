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
      <v-btn
          variant="text"
          @click="$router.push('/editManufacturer/' + this.id)">
        Редактировать
      </v-btn>

      <v-btn
          variant="plain"
          @click="deleteManufacturer(this.id)">
        Удалить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {shoeApi} from "../api/api.js";

export default {
  name: "ManufacturerCard",
  props: [
    'id',
    'title',
    'subtitle',
    'telephone'
  ],
  methods: {
    deleteManufacturer(id){
      shoeApi.deleteManufacturer(id)
    }
  }
}

</script>

<style scoped>

</style>