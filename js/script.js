//mousewheel horizontal scroll
$(function() {
    $("html, body, *").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 100);
        this.scrollRight -= (delta * 100);
        event.preventDefault();
    });
});



//section smooth scrolling
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 300);
//         return false;
//       }
//     }
//   });
// });




//highlight current section
var menuItems = $(".nav a");

$(window).on('DOMContentLoaded load resize scroll', function() {
  $.each(menuItems, function(i, item) {
    $(item).removeClass('active');
  });

  var scroll = $(window).scrollLeft();
  var b = [
    $('#skills').offset().left + 130, 
    $('#portfolio').offset().left + 100, 
    $('#contact').offset().left + 100
  ]

  if(scroll < b[0]) $(menuItems[0]).addClass('active');
  else if(scroll >= b[0] && scroll < b[1]) $(menuItems[1]).addClass('active');
  else if(scroll >= b[1] && scroll < b[2]) $(menuItems[2]).addClass('active');
  else $(menuItems[3]).addClass('active');
  
}); 



$(window).on('load resize', function() {
  var pos = $('#home').width() - 100;
  $('body').css('background-position',  pos + 'px');
});