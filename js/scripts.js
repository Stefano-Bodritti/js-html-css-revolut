$(function () {

$(".open_menu a").click(
  function() {
    $(".dropdown_menu").removeClass("active");
    $(this).next(".dropdown_menu").addClass("active");
  }
);

$(".open_menu").mouseenter(
  function() {
    $(".dropdown_menu").removeClass("active");
    $(this).children(".dropdown_menu").toggleClass("active");

    $(".open_menu").mouseleave(
      function() {
        $(this).children(".dropdown_menu").toggleClass("active");
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
