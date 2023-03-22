<template>
   <div class="container">
       <div class="left">
           <h1>Tarieven</h1>
           <p>
               </p><hr>
               Eerste consult - Gratis
               <hr>
               Acupuntuur (30 min) - €50
               <hr>
               Tuina massage (45 min) - €50
               <hr>
               Acupuntuur + Tuina massage (60 min) - €100
               <hr>
               Moxa (30 min) - €50
               <hr>
               Cupping (20 min) - €50
               <hr>
               Energie + Tuina massage (45 min) - €100

               <br><br>
               <p>Alle tarieven zijn inclusief BTW en exclusief kruiden. Tariefwijzigingen voorbehouden.</p>
               <hr>
       </div>

       <div class="right">
        <h1>Zorgverzekering</h1>
        <p>
               De meeste behandelingen kunnen deels of geheel vergoed worden door uw zorgverzekeraar.
               De totale jaarlijkse vergoeding is verschillend bij de diverse ziektekostenverzekeraars.
               Het is aan te raden om vooraf de specificaties van uw polis goed te lezen of even contact op te nemen met uw verzekeraar. 
               <br><br>
               Een lijst met zorgverzekeraars en het vergoedingenoverzicht die zij hanteren vindt u <a href="https://www.zorgwijzer.nl/pdf/3667.pdf?date=20-02-2022">hier</a>.

               <br><br>
               Bent u geïnteresseerd in een behandeling of wilt u meer informatie? Neem dan contact op.
               <br><br>  
           </p> 
       </div>

       <div class="image">
        <img src="/src/assets/Afbeeldingen/LOGO_YI.png" width="300px">
       </div>
   </div>
</template>

<script scoped>
</script>

<style scoped>
.container {
    max-width: 1440px;
    padding: 0 20px;
    width: 100%;
    margin: auto;
    overflow: hidden;
}

.right {
    padding: 20px;
    width: 600px;
    height: 350px;
    float: left;
}

.left {
    padding: 20px;
    float: left;
    height: 350px;
}

h1 {
    text-align: center;
    padding: 20px;
}

.image {
    text-align: center;
    padding-bottom: 30px;
}

@media(max-width: 1200px) {
    .container {
        padding: 10px;
    }
    .right {
        padding: 10px;
        width: auto;
        height: auto;
        float: left;
    }

    .left {
        padding: 10px;
        float: left;
    }

}

</style>