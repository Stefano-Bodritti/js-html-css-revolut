$(function () {

$(".open_menu").click(
  function() {
    $(this).next(".dropdown_menu").slideToggle("fast");
  }
);

$(".open_menu").mouseenter(
  function() {
    $(this).next(".dropdown_menu").slideToggle("fast");
  }
);

$(".open_menu").mouseleave(
  function() {
    $(this).next(".dropdown_menu").slideToggle("fast");
  }
);


});
