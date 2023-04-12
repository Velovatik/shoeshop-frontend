<template>
  <v-app>
    <v-container>
      <router-view />
      <v-btn
          variant="plain"
          @click="$router.push('/goods')"
      >Ассортимент</v-btn>
    </v-container>
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

