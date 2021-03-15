$(function () {

//variabile che utilizzo per capire se ho clickato o menu un link della navbar
var clicked = false;

$(".open_menu a").click(
  function() {
    $(".dropdown_menu").removeClass("active");
    $(this).next(".dropdown_menu").addClass("active");
    //se clicko, i menu non vengono nascosti finchè non clicko di nuovo su un link
    if ( !clicked ) {
      clicked = true;
    } else {
      clicked = false;
    }
  }
);

$(".open_menu").mouseenter(
  function() {
    $(".dropdown_menu").removeClass("active");
    $(this).children(".dropdown_menu").addClass("active");

    $(".open_menu").mouseleave(
      function() {
        if ( !clicked ) {
          $(this).children(".dropdown_menu").removeClass("active");
        }
      }
    );

  }
);


// $(".open_menu").click(
//   function() {
//     $(this).children(".dropdown_menu").slideToggle("fast");
//   }
// );
//
// $(".open_menu").mouseenter(
//   function() {
//     $(this).children(".dropdown_menu").slideToggle("fast");
//   }
// );
//
// $(".open_menu").mouseleave(
//   function() {
//     $(this).children(".dropdown_menu").slideToggle("fast");
//   }
// );


});
