<template>
  <div>
      我是users
        <button @click="go">go</button>
  </div>
</template>

<script setup >
import { getCurrentInstance } from "vue";
const { proxy  } = getCurrentInstance();
function go(){
  proxy.$router.push('/home')

}
</script>

<style>

</style>