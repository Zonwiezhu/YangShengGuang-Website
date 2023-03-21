<template>
<main class="about">
  <div class="container">
    <section class="grid info">
      <div class="column-xs-12 column-md-7">
        <div class="intro">
          <h1>Mevrouw Mei</h1>
        </div>
      </div>
      <div class="column-xs-12 column-md-7">
        <blockquote>
          <h3>针灸就像针和身体之间的微妙舞蹈，恢复能量平衡，治疗开始。<br><br>
            Acupunctuur is als een subtiele dans tussen naald en lichaam, 
            waarbij de balans van energie wordt hersteld en de genezing begint.</h3>
        </blockquote>
      </div>
      <div class="image">
        <img src="/src/assets/Afbeeldingen/HMeiVoordeur.png">
      </div>
    </section>
  </div>
</main>
</template>

<style scoped>
    h1, h2, h3 {
    color: black;
    }

    h2, h3 {
    color: black;
    font-weight: 400;
    }

    h1 {
    font-size: 2rem;
    margin: 0 0 2rem;
    text-align: center;
    }

    h3 {
    font-size: 1.75rem;
    margin: 0 0 2rem;
    }

    blockquote {
    font-style: italic;
    text-align: center;
    width: 40rem;
    height: auto;
    max-width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    }

    .container {
    margin: auto;
    padding: 0 20px;
    max-width: 1440px;
    width: 100%;
    }

    main {
    padding: 2rem 0;
    }

    .section-heading {
    transform: rotate(0) translateX(0);
    }

    img {
        width: 50%;
        height: auto;
    }

    .image {
      padding-top: 50px;
      padding-bottom: 50px;
      text-align: center;
    }
    
    
    .intro {
        padding: 1rem;
    }
    
    blockquote {
        width: 30rem;
        height: 20rem;
    }
</style>