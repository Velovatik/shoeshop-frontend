<template>
  {{itemsInCart}}
  <v-table>
    <thead>
      <tr>
        <th>
          Наименование
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
      <tr
        v-for="item in itemsInCart"
      ></tr>
    </tbody>
  </v-table>


</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      itemsInCart: this.$store.state.cart.purchases
    }
  }
}


</script>

<style scoped>

</style>