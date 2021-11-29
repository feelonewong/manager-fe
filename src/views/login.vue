<template>
  <div>
    <h2>login登录</h2>
    <button @click="goHome">去欢迎页面吗</button>
  </div>
</template>

<script setup>
import  {useRouter} from 'vue-router'
const router = useRouter()
const goHome = ()=>{
  router.push({
    path: '/welcome'
  })
}
</script>

<style>

</style>