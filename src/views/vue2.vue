<template>
  我是vue2
  <button @click="go">go</button>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push("/user");
    },
  },
};
</script>

<style>
</style>