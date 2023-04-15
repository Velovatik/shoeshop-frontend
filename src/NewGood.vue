<template>
  <v-btn
      variant="plain"
      @click="$router.push('/goods')"
  >Назад</v-btn>

  {{newShoeData}}

  <v-text-field
      v-model="newShoeData.title"
      :rules="rules"
      label="Наименование"
  ></v-text-field>

  <v-form>
    <v-select
        v-model="newShoeData.sex"
        label="Пол"
        :items="sex"
        item-title="name"
        item-value="type"
    />
  </v-form>

  <v-form>
    <v-select
        v-model="newShoeData.manufacturer"
      label="Производитель"
      :items="manufacturersData"
        item-value="id"
        item-title="manufacturerName"
    />
  </v-form>

  <v-text-field
      v-model="newShoeData.sizes.size"
      :rules="rules"
      label="Размер"
  ></v-text-field>

  <v-text-field
      v-model="newShoeData.sizes.quantity"
      :rules="rules"
      label="Количество"
  ></v-text-field>

  <v-btn
      variant="outlined"
      @click=""
  >Добавить</v-btn>

</template>

<script>
import {shoeApi} from "./api/api.js";

export default {
  name: "NewGood",
  data: () => ({
    manufacturersData: {},
    sex: [
      {
        type: 'MAN',
        name: 'Мужская'
      },
      {
        type: 'WOMAN',
        name: 'Женская'
      },
      {
        type: 'CHILD',
        name: 'Детская'
      },
    ],
    newShoeData: {
      title: null,
      sex: null,
      manufacturer: null,
      sizes: {
        size: null,
        quantity: null
      }
    }
  }),
  async mounted() {
    this.manufacturersData = await shoeApi.getAllManufacturers()
  }
}
</script>

<style scoped>

</style>