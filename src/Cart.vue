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
            <v-btn>-</v-btn>
            <template>
            <v-text-field
              v-model="size.amount"
              hide-details
              single-line
              type="number"
            />
            </template>
              <v-btn>+</v-btn>

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