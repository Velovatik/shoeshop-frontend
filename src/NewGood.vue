<template>
  <p>Title:</p>
  <input v-model="Title"/>

  <p>Sex: </p> <select v-model="sex">
    <option disabled value="">Please enter sex</option>
    <option>MAN</option>
    <option>WOMAN</option>
    <option>CHILD</option>
  </select>
  <p>Manufacturer: </p>

</template>

<script>
export default {
  name: "NewGood"
}
</script>

<style scoped>

</style>