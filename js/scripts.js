$(function () {
  
$(".open_menu a").click(
  function() {
    $(this).next(".dropdown_menu").toggleClass("active");
  }
);

$(".open_menu").mouseenter(
  function() {
    $(this).children(".dropdown_menu").addClass("active");
  }
);

$(".open_menu").mouseleave(
  function() {
    $(this).children(".dropdown_menu").removeClass("active");
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
