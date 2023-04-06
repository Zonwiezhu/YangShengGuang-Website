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
          <router-link to="/" @click="closeMenu()">HOME</router-link>
          <router-link to="/lichamelijkeklachten" @click="closeMenu()">LICHAMELIJKE KLACHTEN</router-link>
          <router-link to="/behandeling" @click="closeMenu()">BEHANDELINGEN</router-link>
          <router-link to="/mei" @click="closeMenu()">OVER MEI</router-link>
          <router-link to="/tarieven" @click="closeMenu()">TARIEVEN</router-link>
          <router-link to="/contact" @click="closeMenu()">CONTACT</router-link>
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
      height: 110px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1300px;
      margin: auto;
      padding: 1rem;
    }

    .nav-inner .links a {
      margin: 0px 30px;
      font-size: 18px;
      color: black;
      border-bottom: 2px solid transparent;
      transition: .2s;
    }

    .rechts {
      margin-left: 2rem;
    }

    .links {
      margin-left: 1rem;
    }

    .nav-inner .links a:hover {
      border-color: black;
    }

    .menu-icon {
      color: black;
      cursor: pointer;
      display: none;
    }

    @media screen and (max-width: 1200px) {
      .links {
        display: none;
        position: absolute;
        top: 120px;
        left: 0;
        width: 100%;
        background-color: #f5f5f5;
        text-align: center;
      }

      .links.responsive {
        display: block;
      }

      .links a {
        display: block;
        padding: 1rem;
      }

      .menu-icon {
        display: block;
      }

      nav .nav-inner {
        height: 110px;
        padding: 1.3rem;
      }

      body {
        margin-top: 4rem;
      }
    }
  </style>
  