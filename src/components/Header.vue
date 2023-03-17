<template>

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <nav>
        <div class="nav-inner">
            <!--Logo-->
            
            <div class="rechts">
                <img src="/src/assets/Afbeeldingen/Logo.png" alt="Afbeelding">
            </div>

            <a id="menu-icon" class="menu-icon" onclick="onMenuClick()">
                <i class="fa fa-bars fa-2x"></i>
            </a>

            <!--Link-->
            <div class="links" id="mylinks">
                <a href="/">Home</a>
                <a href="/lichamelijkeklachten">Lichamelijke klachten</a>
                <a href="/behandeling">Behandeling</a>
                <a href="/mei">Over Mei</a>
                <a href="/tarieven">Tarieven</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav>
</template>

<script setup>
function onMenuClick() {
  document.getElementById("mylinks").classList.toggle("show");
}
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

.nav-inner .links a:hover{
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
    top: 3.7rem;
    left: 0;
    width: 100%;
    background-color: var(--bgcolor);
    text-align: center;
    }

.links.responsive {
display: block;
    }

.links a {
display: block;
    }

.menu-icon {
display: block;
z-index: 1;
    }
  
}

</style>