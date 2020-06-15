<template>
  <div>
    detail
    <p v-if="show">哈哈哈</p>
    <button @click="handle">点击</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: true
    }
  },
  methods: {
    handle() {
      this.show = !this.show
    }
  }
}
</script>

<style scoped lang="less"></style>
