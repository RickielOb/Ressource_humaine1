$(document).ready(function () {
   //cacher les contenu 2,3 et 4
   $(".col-lg-3 col-sm-6 wow fadeInUp1").show();
   $(".col-lg-3 col-sm-6 wow fadeInUp2").hide();
   $(".col-lg-3 col-sm-6 wow fadeInUp3").hide();
   $(".col-lg-3 col-sm-6 wow fadeInUp4").hide();

   $(".btn2 btn-primary px-3 d-none d-lg-flex").click(function () {
      $(".col-lg-3 col-sm-6 wow fadeInUp1").hide();
      $(".col-lg-3 col-sm-6 wow fadeInUp2").show();
      $(".col-lg-3 col-sm-6 wow fadeInUp3").hide();
      $(".col-lg-3 col-sm-6 wow fadeInUp4").hide();
   })

   $(".btn3 btn-primary px-3 d-none d-lg-flex").click(function () {
      $(".col-lg-3 col-sm-6 wow fadeInUp1").hide();
      $(".col-lg-3 col-sm-6 wow fadeInUp2").hide();
      $(".col-lg-3 col-sm-6 wow fadeInUp3").show();
      $(".col-lg-3 col-sm-6 wow fadeInUp4").hide();
   })
   $(".btn4 btn-primary px-3 d-none d-lg-flex").click(function () {
      $(".col-lg-3 col-sm-6 wow fadeInUp1").hide();
      $(".col-lg-3 col-sm-6 wow fadeInUp2").hide();
      $(".col-lg-3 col-sm-6 wow fadeInUp3").hide();
      $(".col-lg-3 col-sm-6 wow fadeInUp4").show();
   })
})

/*  formulaire debut */


