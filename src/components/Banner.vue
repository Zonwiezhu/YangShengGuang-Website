
<template>
  
    <div class="banner">
        <div class="container">

            <div class="Introduction">
                <h1>WELKOME</h1>

                <h4>
                    <br/>
                    Yang Shen Guang 养生馆 voorheen Yang Shen Tang, 
                    is een praktijk waar cliënten met traditionele Chinese geneeskunde worden behandeld. 
                    Het is een kleine praktijk gerund door mevrouw Mei. 
                    Haar passie is zoveel mogelijk cliënten helpen met hun gezondheid met behulp van traditionele Chinese geneeskunde. 
                    Naast dat is ze professioneel in haar vakgebied en erg zorgzaam met haar cliënten. 
                    <br /><br />
                    Mevrouw Mei is lid van NBCG (Nederlandse beroepsvereniging voor Chinese Geneeswijze) Yi. 
                    Hierdoor wordt een behandeling door de meeste verzekeraars geheel of deels vergoed. 
                    De totale vergoeding verschilt per zorgverzekeraars. 
                    Het is aan te raden om vooraf de informatie van uw polis goed te lezen. U kunt ook bij uw desbetreffende zorgverzekeraars informatie opvragen. 
                </h4>
             </div>

            <div class="banner-content">
                
                <div class="main-banner">
                    <div class="img-container">
                        <img src="/src/assets/Afbeeldingen/Massage1.png" alt="">
                        <div class="img-content">
                             
                            <h3>Massage</h3>
                        </div>
                    </div>
                </div>

                <div class="catergory-banner">
                    <div class="top">

                        <div class="img-container">
                        <img src="/src/assets/Afbeeldingen/Acupuntuur1.png" alt="">
                            <div class="img-content">
                                <h3>Acupuntuur</h3>
                            </div>
                        </div>

                        <div class="img-container">
                        <img src="/src/assets/Afbeeldingen/Moxa1.png" alt="">
                            <div class="img-content">
                                <h3>Moxa</h3>
                            </div>
                        </div>
                    </div>

                    <div class="bottem">
                        <div class="img-container">
                        <img src="/src/assets/Afbeeldingen/Energie1.png" alt="">
                            <div class="img-content">
                                <h3>Energie</h3>
                            </div>
                        </div>

                        <div class="img-container">
                        <img src="/src/assets/Afbeeldingen/Cupping1.png" alt="">
                            <div class="img-content">
                                <h3>Cupping</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

       

    </div>

</template>

<script setup>
</script>

<style scoped>


    .banner .container {
        max-width: calc(1440px - 130px);
        padding: 0 20px;
        width: 100%;
        margin: auto;
    }

    .banner-content {
        display: flex;
        justify-content:space-between;
        padding: 40px 0px;
    }

    .banner-content > div{
        flex:0 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
        width:100%;
    }
    .img-container {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .img-container img{
        width: 100%;
        object-fit: cover;
    }

    .img-container .img-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        border-radius: 4px;
        padding: 16px 32px;
    }

    .img-content span {
        font-weight: 600;
        font-size: 12px;
        line-height: 13px;
        color: #121212;
        opacity: 0.4;
        text-transform: uppercase;
    }

    .img-content h3 {
        font-weight: 600;
        font-size: 22px;
        line-height: 25px;
        color: #121212;
        text-transform: uppercase;
        margin-top: 5px;
    }

    .catergory-banner .top{
        display: flex;
        justify-content: space-between;
        margin-bottom:40px;
        margin-top: 50px;
    }

    .catergory-banner .top > div{
        flex: 0 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
        width:100%;
    }

    .catergory-banner .bottem{
        display: flex;
        justify-content: space-between;
        margin-bottom:50px;
    }

    .catergory-banner .bottem > div{
        flex: 0 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
        width:100%;
    }

    .Introduction {
        text-align: center;
    }

    .Introduction h1 {
        margin-top: 10px;
    }

    @media(max-width: 1024px) {
        .banner-content {
            flex-wrap: wrap;
        }

        .banner-content > div {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }

    @media(max-width: 600px) {
        .catergory-banner .top > div {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 1px;
        }

        .catergory-banner .top {
            flex-wrap: wrap;
        }

        .catergory-banner .bottem > div {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 1px;
        }

        .catergory-banner .bottem {
            flex-wrap: wrap;
        }

        .main-banner {
            margin-bottom: 1px;
        }
    }
</style>