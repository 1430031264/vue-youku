<template>
  <div id="container">
    <v-header></v-header>
  </div>
</template>

<script>
import header from '@/components/header'
export default {
  name: 'container',
  components:{
    'v-header': header
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
page{
  width: 100%;
  height: 100%;
  font-size: 16px;
}
ul,li{
  list-style: none
}
</style>
