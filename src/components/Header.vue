<template>

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <nav>
        <div class="nav-inner">
            <!--Logo-->
            <div class="logo">
                <img src="/src/assets/Afbeeldingen/Logo.png" alt="Afbeelding" width="100px" height="100px"/>
            </div>

            <!--Link-->
            <div class="links" id="mylinks">
                <a href="#">Home</a>
                <a href="#">Lichamelijke klachten</a>
                <a href="#">Behandeling</a>
                <a href="#">Over Mei</a>
                <a href="#">Tarieven</a>
                <a href="#">Contact</a>
            </div>

            <!--Icons-->
        </div>
    </nav>
</template>

<script setup>
</script>

<style scoped>

nav {
    border-bottom: 3px solid #f8f8f8;
}
nav .nav-inner{
    height: 90px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1070px;
    width: 100%;
    margin: auto;
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

.nav-inner .links a:hover{
    border-color: black;
}

.links .icon {
  display: none;
}

@media screen and (max-width: 1024px) {

  .links a:not(:nth-child(n+5)) {display: none;}
  
}



</style>