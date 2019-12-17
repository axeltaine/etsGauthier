
        $(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 50) { 
              $('.navbar').addClass('transparent');
          } else {
              $('.navbar').removeClass('transparent');
          }
        });
});
 
$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 50) { 
        $('.dropdown-menu').addClass('transparent');
    } else {
        $('.dropdown-menu').removeClass('transparent');
    }
  });
});