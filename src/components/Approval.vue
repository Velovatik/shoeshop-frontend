<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="auto"
    >
      <v-card>
        <v-card-text>
          Вы уверены?
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" @click="$emit('delete', id)">Да</v-btn>
            <v-btn color="primary" @click="dialog = false">Нет</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
  props: [
      'id',
      'show'
  ],
}
</script>