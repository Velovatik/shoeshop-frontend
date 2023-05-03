<template>
  {{itemsInCart}}
  <div v-if="itemsInCart.length===0">
    Козина пуста
  </div>
  <v-table v-if="itemsInCart.length!==0">
    <thead>
      <tr>
        <th>
          Наименование
        </th>
        <th>
          Размер
        </th>
        <th>
          Количество
        </th>
        <th>
          Стоимость
        </th>
      </tr>
    </thead>
    <tbody>
      <template
        v-for="item in itemsInCart"
        :key="item.id"
      >
        <tr v-for="size in item.sizes" :key="size">
          <td>{{item.title}}</td>
          <td>{{size.size}}</td>
          <td>
            <v-col>
              <v-row>
                <v-btn
                :disabled="size.amount <= 0"
                rounded
                variant="text"
                @click="size.amount--">-</v-btn>
            <div class="justify-">
              <v-responsive class="ma-0 pa-0" :width="`${size.amount.length}.0.2rem`">
                <v-text-field
              v-model="size.amount"
              hide-details
              single-line
              density="compact"
              type="number"
              :min="0"
              :max="size.inStock"
                />
              </v-responsive>
            </div>
              <v-btn
                  :disabled="size.amount >= size.inStock"
                  rounded
                  variant="text"
                  @click="size.amount++">+</v-btn>
              </v-row>
            </v-col>

          </td>
          <td>{{ size.amount * item.price }} руб.</td>
        </tr>
      </template>
      <tr class="summary">
        <td>Итого:</td>
        <td></td>
        <td></td>
        <td>{{finalPrice}} руб.</td>
      </tr>
    </tbody>
  </v-table>

  <v-btn
  variant="outlined"
  @click="makePurchase"
  >
    Оплатить
  </v-btn>

</template>

<script>
import {shoeApi} from "./api/api.js";

export default {
  name: "Cart",
  data() {
    return {
      itemsInCart: this.$store.state.cart.purchases,
    }
  },
  computed: {
    finalPrice: function () {
      return this.itemsInCart.map(item => {
        return item.price * item.sizes.map(size => {
          return size.amount
        }).reduce((a, b) => {return a + b})
      }).reduce((a, b) => {return a + b})
    }
  },
  methods: {
    async sellGood(id, size, amount) {
      await shoeApi.sellGood(
          {id:id,
            size: size,
            amount: amount
          }
      )
    },

    async makePurchase() {
      for (let item in this.itemsInCart) {
        for (let size in item.sizes) {
          console.log(item.id, size.size, size.amount)
          await this.sellGood(item.id, size.size, size.amount)
        }
      }
    }
  }
}


</script>

<style scoped>
  .summary{
    font-weight: bolder;
  }
</style>