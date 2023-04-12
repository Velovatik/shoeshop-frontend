<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>Магазин</v-app-bar-title>
      <v-tabs fixed-tabs>
        <v-tab to="/goods">Товары</v-tab>
        <v-tab to="/manufacturers">Поставщики</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container class="mt-4">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {shoeApi} from "./api/api.js";

import ShoeCard from "./components/ShoeCard.vue";

export default {
  name: 'App',
  data: () => ({
    shoesData: {}
  }),
  components: {
    ShoeCard
  },
  async mounted() {
    this.shoesData = await shoeApi.getAllGoods()
  }
}
</script>

