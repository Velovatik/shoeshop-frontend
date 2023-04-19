<template>
  <v-btn
      variant="plain"
      @click="$router.push('/newGood')"
  >Добавить товар
  </v-btn>
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
              :sizes="shoe.sizes"
              :id="shoe.id"
          />
        </v-col>
      </v-row>
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

