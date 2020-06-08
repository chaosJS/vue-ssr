<template>
  <div>
    Home
    <router-link :to="{ name: 'item', params: { id } }">User</router-link>
    <div>
      <input type="text" v-model="id" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      id: ''
    }
  }
}
</script>

<style scoped></style>
