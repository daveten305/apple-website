// $(document).ready(function () {

//   $(".links-wrapper-1").click(function () {
//     $(".links-wrapper-1 > ul").toggle();
//   });

//   $("#services").click(function () {
//     $("#servicesMenu").toggle();
//   });

//   $("#account").click(function () {
//     $("#accountMenu").toggle();
//   });

//   $(".links-wrapper-3").click(function () {
//     $(".links-wrapper-3 > ul").toggle();
//   });

//   $("#business").click(function () {
//     $("#businessMenu").toggle();
//   });
//   $("#education").click(function () {
//     $("#educationMenu").toggle();
//   });
//   $("#healthcare").click(function () {
//     $("#healthcareMenu").toggle();
//   });
//   $("#government").click(function () {
//     $("#governmentMenu").toggle();
//   });
//   $("#aboutApple").click(function () {
//     $("#aboutAppleMenu").toggle();
    
//   });
//   $("#values").click(function () {
//     $("#valuesMenu").toggle();
    
//   });




  
// });
$(".footer-links-wrapper h3").click(function () {
  if ($(window).width() <= 768) {
    $(this).next("ul").slideToggle();
    // $(this).parent().children("ul").slideToggle();
    $(this).toggleClass("iconRotator");
  }
});

