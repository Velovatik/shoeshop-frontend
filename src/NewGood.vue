<template>
  <v-btn
      variant="plain"
      @click="$router.push('/goods')"
  >Назад</v-btn>

  {{newShoeData}}

  <v-text-field
      v-model="newShoeData.name"
      :rules="rules"
      label="Наименование"
  ></v-text-field>

  <v-form>
    <v-select
        v-model="newShoeData.sex"
        label="Пол"
        :items="sex"
        item-title="name"
        item-value="type"
    />
  </v-form>

  <v-form>
    <v-select
        v-model="newShoeData.manufacturer"
      label="Производитель"
      :items="['ralf', 'puma']"
    />
  </v-form>

</template>

<script>
export default {
  name: "NewGood",
  data: () => ({
    sex: [
      {
        type: 'MAN',
        name: 'Мужская'
      },
      {
        type: 'WOMAN',
        name: 'Женская'
      },
      {
        type: 'CHILD',
        name: 'Детская'
      },
    ],
    newShoeData: {
      name: null,
      sex: null,
      manufacturer: null
    }
  })
}
</script>

<style scoped>

</style>