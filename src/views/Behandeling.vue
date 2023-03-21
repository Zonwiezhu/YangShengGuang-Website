<template>
    <div class="container">
      <div class="Introduction">
        <h1>BEHANDELINGEN</h1>
      </div>

      <div class="Delen">
        <div class="Rechts-Afbeelding">
          <img src="/src/assets/Afbeeldingen/Cupping1.png" alt="">      
          <h2>Cupping</h2>
            <p>
              <br />
              Bij cupping wordt er in glazen bolletje een vacuüm gecreëerd op de huid. De bolletjes worden verwarmd en op de huid geplaatst waardoor er een vacuüm ontstaat, wat “trekt” aan de huis.
              Cupping wordt toegepast om de energie een grote boost te geven en eventuele knopen uit spieren te verwijderen zonder het weefsel te beschadigen. 
              Cupping wordt ook gebruikt om het teveel aan lichaamsvocht uit het lichaam te zuigen hierbij worden ook afvalstoffen verwijderd. 
              Hierdoor verdwijnen de klachten en treedt er algehele ontspanning op. 
              Na de behandeling zijn er dieprode/ paarsachtige plekken te zien op de plekken waar de cups geplaatst zijn, dit is een volledig normale reactie. 
              De plekken verdwijnen binnen een aantal dagen.
            </p>
        </div>

        <div class="Links-Afbeelding">
          <img src="/src/assets/Afbeeldingen/Massage.png" alt="">      
          <h2>Tuina massage</h2>
            <p>
              <br />
              Er zijn verschillende vormen van Tuina massage, vaak in combinatie met de drukpunten die ook door het hele lichaam verspreid voorkomen. 
              Ook kan er met Tuina massage de gewrichten gemanipuleerd worden door de ledematen te bewegen.
              De basis voor deze behandeling, is de balans tussen Yin en Yang en de stromende energie Qi, en de circulatie van bloed. 
              Deze massage wordt alleen toegepast na diagnostiek op Chinese wijze. Tuina wordt naast acupunctuur als volwaardige therapie al duizenden jaren toegepast. 
              Heden ten dage heeft bijna elk Chinees ziekenhuis zijn eigen Tuina afdeling.
            </p>
        </div>

        <div class="Rechts-Afbeelding">
          <img src="/src/assets/Afbeeldingen/Moxa1.png" alt="">      
          <h2>Moxa</h2>
          <p>
            <br />
            Moxa bestaat voor het grootste gedeelte uit gedroogd bijvoetkruid, dit wordt tijdens de behandeling aangestoken en op plaatsen op het lichaam geplaatst waar dit nodig wordt geacht. 
            De meest gebruikte vorm is een sigaar-achtige vorm, maar er bestaan ook kleine torentjes. 
            Volgens de Traditionele Chinese Gezondheidszorg, komt bij de verbranding van Moxa, verwarmende energie vrij (Yang), waarmee diverse aandoeningen behandeld kunnen worden, een zeer bekend voorbeeld hiervan is de behandeling van een baby in stuitligging. Maar zeker ook andere klachten van een “koude aard”, zoals ernstige vermoeidheid, blessures (kneuzingen en verstuikingen) en gewrichtspijnen zijn goed te behandelen met Moxa therapie. 
            Behandelingen met Moxa zijn niet pijnlijk, wel geeft de behandeling een warm en prettig gevoel dat nog lang na de behandeling aanhoudt. 
          </p>
        </div>

        <div class="Links-Afbeelding">
          <img src="/src/assets/Afbeeldingen/Energie1.png" alt="">      
          <h2>Energie</h2>
            <p>
              <br />
              Er zijn verschillende vormen van Tuina massage, vaak in combinatie met de drukpunten die ook door het hele lichaam verspreid voorkomen. 
              Ook kan er met Tuina massage de gewrichten gemanipuleerd worden door de ledematen te bewegen.
              De basis voor deze behandeling, is de balans tussen Yin en Yang en de stromende energie Qi, en de circulatie van bloed. 
              Deze massage wordt alleen toegepast na diagnostiek op Chinese wijze. Tuina wordt naast acupunctuur als volwaardige therapie al duizenden jaren toegepast. 
              Heden ten dage heeft bijna elk Chinees ziekenhuis zijn eigen Tuina afdeling.
            </p>
        </div>

        <div class="Rechts-Afbeelding">
          <img src="/src/assets/Afbeeldingen/Acupuntuur1.png" alt="">      
          <h2>Acupuntuur</h2>
            <p>
              <br />
              Acupunctuur is een onderdeel van de traditionele Chinese geneeskunde, die haar oorsprong heeft vindt in China. 
              Bij acupunctuur worden er naalden in het lichaam gebracht om plaatsen die verbonden zijn met de aandoening die behandeld wordt. 
              Tijdens de behandeling zullen er naalden in het lichaam gebracht worden op verschillende plaatsen, 
              het inbrengen van de naalden is niet pijnlijk, mogelijk kunt u wel een onprettig gevoel ervaren. 
              De acupunctuur behandeling kan worden aangevuld met een Moxa- behandeling en of een warmtebron behandeling, 
              dit hangt geheel af van de klachten die u heeft. De behandelaar zal dit op aanpassen op uw klachten.          
            </p>
        </div>
      </div>
    </div>
    
</template>

<script setup>
</script>

<style scoped>

.container {
  max-width: 1440px;
  padding: 0 20px;
  width: 100%;
  margin: auto;
}
.Introduction {
    margin-top: 10px;
    text-align: center;
}

.Delen {
  padding:0 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}

.Rechts-Afbeelding {
  padding: 20px;
}

.Rechts-Afbeelding img {
  float: right;
  width: 250px;
  height:auto;
}

.Links-Afbeelding {
  padding: 20px
}

.Links-Afbeelding img {
  float: left;
  width: 250px;
  height:auto;
}

@media(max-width: 800px) {
.Rechts-Afbeelding img {
  float: none;
  width: auto;
}

.Links-Afbeelding img {
  float: none;
  width: auto;
}
}

</style>