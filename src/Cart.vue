<template>
  {{itemsInCart}}
  <v-table>
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
            <div>
              <v-responsive class="ma-0 pa-0" :width="`${size.amount.length}.5rem`">
                <v-text-field
              v-model="size.amount"
              hide-details
              single-line
              density="compact"
              type="number"
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
          <td>{{ size.amount * item.price }}</td>
        </tr>
      </template>
      <tr class="summary">
        <td>Итого:</td>
        <td></td>
        <td></td>
        <td>{{finalPrice}}</td>
      </tr>
    </tbody>
  </v-table>

  <v-btn
  variant="outlined">
    Оплатить

  </v-btn>

</template>

<script>
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
        })
      })[0]
    }
  }
}


</script>

<style scoped>
  .summary{
    font-weight: bolder;
  }
</style>