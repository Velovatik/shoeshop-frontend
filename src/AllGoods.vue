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
        <v-btn color="primary" @click="deleteGood(dialogGoodId); this.$router.go()">Да</v-btn>
        <v-btn color="primary" @click="dialogOpened = false">Нет</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

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
              @deleteGood="showDialog"
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
    shoesData: {},
    dialogOpened: false,
    dialogGoodId: null,
  }),
  components: {
    ShoeCard
  },
  async mounted() {
    this.shoesData = await shoeApi.getAllGoods()
  },
  props: [
    "id"
  ],
  methods: {
    showDialog(id) {
      this.dialogOpened = true
      this.dialogGoodId = id
    },
    deleteGood(id) {
      shoeApi.deleteGood(id)
    }
  }
}
</script>

