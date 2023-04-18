<template>
  <v-form>
    <v-btn
        variant="plain"
        @click="$router.push('/goods')"
    >Назад
    </v-btn>

    {{ newShoeData }}

    <v-row>
      <v-col cols="12" md="6" lg="6" xl="6" >
        <div class="text-h6 mb-4">
          Общие сведения
        </div>

        <v-text-field
            v-model="newShoeData.title"
            :rules="rules"
            label="Наименование"
        ></v-text-field>


        <v-select
            v-model="newShoeData.sex"
            label="Пол"
            :items="sex"
            item-title="name"
            item-value="type"
        />
        <v-select
            v-model="newShoeData.manufacturerId"
            label="Производитель"
            :items="manufacturersData"
            item-value="id"
            item-title="manufacturerName"
        />

        <v-btn
            variant="outlined"
            @click="postNewGood()"
        >Добавить
        </v-btn>
      </v-col>

      <v-col cols="12" md="6" lg="6" xl="6">
        <div class="text-h6 mb-4">
          Размеры
        </div>

        <SizesAdder class="mb-8" v-on:sizeChange="updateSizes" />
      </v-col>
    </v-row>


  </v-form>
</template>

<script>
import {shoeApi} from "./api/api.js";
import SizesAdder from "./components/SizesAdder.vue";

export default {
  name: "NewGood",
  data: () => ({
    manufacturersData: {
    },
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
      title: null,
      sex: null,
      manufacturerId: null,
      sizes: null
    }
  }),
  components: {
    SizesAdder
  },
  methods: {
    updateSizes(sizes) {
      this.newShoeData.sizes = sizes
    },
    postNewGood() {
      shoeApi.postNewGood({
        title: this.newShoeData.title,
        sex: this.newShoeData.sex,
        manufacturerId: this.newShoeData.manufacturerId,
        sizes: this.newShoeData.sizes
      })
    }
  },
  async mounted() {
    this.manufacturersData = await shoeApi.getAllManufacturers()
  }
}
</script>

<style scoped>

</style>