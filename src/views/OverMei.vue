<template>
<main class="about">
  <div class="container">
    <section class="grid info">
      <div class="column-xs-12 column-md-7">
        <div class="intro">
          <h1>Mevrouw Mei</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa provident voluptatem consectetur illum, natus placeat incidunt tempora architecto aliquid recusandae eligendi repudiandae ex laborum neque quod cum id facere nulla.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa provident voluptatem consectetur illum, natus placeat incidunt tempora architecto aliquid recusandae eligendi repudiandae ex laborum neque quod cum id facere nulla.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa provident voluptatem consectetur illum, natus placeat incidunt tempora architecto aliquid recusandae eligendi repudiandae ex laborum neque quod cum id facere nulla.</p>
        </div>
      </div>
      <div class="column-xs-12 column-md-7">
        <blockquote>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa provident voluptatem consectetur illum, natus placeat incidunt tempora architecto aliquid recusandae eligendi repudiandae ex laborum neque quod cum id facere nulla.</h3>
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
    padding: 0 2rem;
    max-width: 75rem;
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