<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
            col="12"

          lg="4"
            xl="4"
            xxl="4"
          v-for="shoe in shoesData"
          :key="shoe.id"
        >
          <ShoeCard
            :title="shoe.title"
            :subtitle="shoe.manufacturer.manufacturerName"
            :text="shoe.sizes"
          />
        </v-col>
      </v-row>
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

