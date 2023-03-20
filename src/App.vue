<template>
  <div>
    <Header /> 
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import { RouterLink, RouterView } from 'vue-router'
import Footer from "../src/components/Footer.vue";
</script>

<style scoped>

</style>
