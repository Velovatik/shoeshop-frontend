<template>
  <v-form>
    <v-btn
        variant="plain"
        @click="$router.push('/goods')"
    >Назад
    </v-btn>
    {{shoeData}}

    <v-row>
      <v-col cols="12" md="6" lg="6" xl="6" >
        <div class="text-h6 mb-4">
          Общие сведения
        </div>

        <v-text-field
            v-model="shoeData.title"
            :rules="rules"
            label="Наименование"
        ></v-text-field>


        <v-select
            v-model="shoeData.sex"
            label="Пол"
            :items="sex"
            item-title="name"
            item-value="type"
        />
        <v-select
            v-model="shoeData.manufacturerId"
            label="Производитель"
            :items="manufacturersData"
            item-value="id"
            item-title="manufacturerName"
        />

        <v-btn
            variant="outlined"
            @click=""
        >Сохранить изменения
        </v-btn>
      </v-col>

      <v-col cols="12" md="6" lg="6" xl="6" >
        <SizesLoader :sizes="shoeData.sizes" />
      </v-col>
    </v-row>



  </v-form>
</template>

<script>
import {shoeApi} from "./api/api.js";
import SizesLoader from "./components/SizesLoader.vue";

export default {
  name: "EditGood",
  components: {SizesLoader},
  data() {
    return {
      editId: null,
      shoeData: {
        title: null,
        sex: null,
        manufacturerId: null,
        sizes: null
      },
      manufacturersData: [
      ],

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
    }
  },
  async mounted() {
    this.editId = this.$route.params.id

    this.shoeData = await shoeApi.getGood(this.editId)

    this.manufacturersData = await shoeApi.getAllManufacturers()
  }
}
</script>

<style scoped>

</style>