<template>
    <!DOCTYPE html>
<!-- Created By CodingLab - www.codinglabweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
   <!-- <title> Responsive Contact Us Form  | CodingLab </title>-->
    <link rel="stylesheet" href="style.css">
    <!-- Fontawesome CDN Link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>

<body>
  <div class="container">
    <div class="content">
      <div class="left-side">

        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Adres</div>
          <div class="text-one">Mecklenburstraat 29, Zoetermeer</div>
        </div>

        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Telefoonnummer</div>
          <div class="text-one">0630782591</div>
        </div>

        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">yangshengguang@outlook.com</div>
        </div>

        <div class="media details">
          <i class="fab fa-facebook-f"></i>
          <div class="topic">Media</div>
          <div class="text-one">YANG SHENG TANG</div>
        </div>



      </div>
      <div class="right-side">

        <div class="topic-text">Stuur een bericht</div>
        <p>Als u nog vragen heeft, kunt u hieronder invullen en versturen.</p>
      
        <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Vul hier uw naam">
        </div>
        <div class="input-box">
          <input type="text" placeholder="Vul hier uw email">
        </div>
        <div class="input-box message-box">
            <input type="text" placeholder="Vul hier uw bericht">
        </div>
        <div class="button">
          <input type="button" value="Verzenden" >
        </div>
      </form>

    </div>
    </div>
  </div>
</body>
</html>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

.container{
  width: 100%;
  background: #fff;
  padding: 20px 60px 30px 40px;
}
.container .content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container .content .left-side{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  position: relative;
}
.content .left-side::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 3px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: darkgreen;
}
.content .left-side .details{
  margin: 24px;
  text-align: center;
}
.content .left-side .details i{
  font-size: 40px;
  color: darkred;
  margin-bottom: 10px;
}
.content .left-side .details .topic{
  font-size: 20px;
  font-weight: 500;
  
}
.content .left-side .details .text-one,
.content .left-side .details .text-two{
  font-size: 14px;
  color: black;
}
.container .content .right-side{
  width: 100%;
  margin-left: 100px;
}
.content .right-side .topic-text{
  font-size: 23px;
  font-weight: 600;
  color: darkgreen;
}
.right-side .input-box{
  height: 50px;
  width: 100%;
  margin: 12px 0;
}
.right-side .input-box input,
.right-side .input-box textarea{
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: #F0F1F8;
  border-radius: 6px;
  padding: 0 15px;
  resize: none;
}
.right-side .message-box{
  min-height: 110px;
}
.right-side .input-box textarea{
  padding-top: 6px;
}
.right-side .button{
  display: inline-block;
  margin-top: 12px;
}
.right-side .button input[type="button"]{
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  background: darkgreen;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button input[type="button"]:hover{
  background: darkred;
}

@media (max-width: 950px) {
  .container{
    width: 90%;
    padding: 30px 40px 40px 35px ;
  }
  .container .content .right-side{
   width: 75%;
   margin-left: 55px;
}
}
@media (max-width: 820px) {
  .container{
    margin: 40px 0;
    height: 100%;
  }
  .container .content{
    flex-direction: column-reverse;
  }
 .container .content .left-side{
   width: 100%;
   flex-direction: row;
   margin-top: 40px;
   justify-content: center;
   flex-wrap: wrap;
 }
 .container .content .left-side::before{
   display: none;
 }
 .container .content .right-side{
   width: 100%;
   margin-left: 0;
 }
}


</style>