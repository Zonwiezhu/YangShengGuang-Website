<template>
  <div>
    <Headers /> 
    <RouterView />
  </div>
</template>

<script setup>
import Headers from "../src/components/Header.vue";
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>
