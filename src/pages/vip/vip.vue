<template>
  <div @click="show">
    开通会员
  </div>
</template>

<script>
export default {
  methods: {
    show(){
      this.$router.push('vip-pay')
    }
  }
}
</script>

<style>

</style>
