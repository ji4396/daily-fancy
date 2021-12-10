<template>
  <div class="home">
    home
    <button @click="go">go</button>
    <h1>h11111111111111111111111111111111111111111</h1>
    <p>store{{ count }}</p>
    <Button @click="increment">+++++++</Button>
    <p class="gg">gg-double{{double}}</p>
    <Button type="primary" @click="go">主要按钮</Button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { Button } from 'vant';
import   { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore();
const count = computed(()=>store.state.count)
const double = computed(()=>store.getters.double)
const increment = ()=>store.commit('increment')
function go(){
    router.push('/vue2')
}
</script>

<style lang='less' scoped>
p{
    font-size: 30px;
    line-height: 1;
    background:  @color;
}
div{
    .gg{
        font-size: 16px;
        line-height: 1;
    }
}
.home{
  height: 100vh;
}
.norem_q{
  font-size: 30px;
}
</style>