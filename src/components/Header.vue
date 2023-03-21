<template>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <nav>
      <div class="nav-inner">
        <!--Logo-->
        <div class="rechts">
          <img src="/src/assets/Afbeeldingen/Logo.png" alt="Afbeelding">
        </div>
        <a id="menu-icon" class="menu-icon" @click="onMenuClick()">
          <i class="fa fa-bars fa-3x"></i>
        </a>
        <!--Link-->
        <div class="links" :class="{'responsive': isResponsive}">
          <router-link to="/" @click="closeMenu()">Home</router-link>
          <router-link to="/lichamelijkeklachten" @click="closeMenu()">Lichamelijke klachten</router-link>
          <router-link to="/behandeling" @click="closeMenu()">Behandeling</router-link>
          <router-link to="/mei" @click="closeMenu()">Over Mei</router-link>
          <router-link to="/tarieven" @click="closeMenu()">Tarieven</router-link>
          <router-link to="/contact" @click="closeMenu()">Contact</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    
    const isResponsive = ref(false);
    
    function onMenuClick() {
      isResponsive.value = !isResponsive.value;
    }
    
    function closeMenu() {
      isResponsive.value = false;
    }
  </script>
  
  <style scoped>
nav {
  border-bottom: 3px solid green;
}

nav .nav-inner {
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1070px;
  width: 100%;
  margin: auto;
  padding: 1.3rem;
}

.nav-inner .links a {
  margin: 0px 30px;
  font-size: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: black;
  line-height: 1.25;
  border-bottom: 1px solid transparent;
  transition: .3s;
}

.rechts {
  align-self: center;
  margin-left: 1.2rem;
}

.links {
  margin: auto;
}

.nav-inner .links a:hover {
  border-color: black;
}

.menu-icon {
  color: black;
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 1024px) {
  .links {
    display: none;
    position: absolute;
    top: 93px;
    left: 0;
    width: 100%;
    background-color: #f8f8f8;
    text-align: center;
    padding-top: 1rem;
    z-index: 1;
  }

  .links.responsive {
    display: block;
  }

  .links a {
    display: block;
    padding: 1rem 0;
  }

  .menu-icon {
    display: block;
  }

  .nav-inner {
    padding: 1rem;
  }

  body {
    margin-top: 4rem;
  }
}

  </style>
  