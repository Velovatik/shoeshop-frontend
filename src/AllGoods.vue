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
              @addToCart="addItemToCart"
          />
        </v-col>
      </v-row>

  <div class="cart" v-for="purchase in getAllPurchases" :key="purchase.id">
    <p></p>
  </div>
</template>

<script>
import {shoeApi} from "./api/api.js";

import ShoeCard from "./components/ShoeCard.vue";

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  // computed: {
  //   allPurchases() {
  //     return this.$store.getters.allGoods;
  //   }
  // },\

  computed: mapGetters(['getAllPurchases']), //Way of getting arr for cart from storage
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
    },
    addItemToCart(payload) {
      console.log(payload)
      this.$store.commit("addItemToCart", {id: payload.id, size: payload.size})
    }
  }
}
</script>

