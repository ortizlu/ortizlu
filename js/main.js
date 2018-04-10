alert("Welcome! This site is currently under construction. You're welcome to browse around but also please check back when it is open for business!")

$(".btn").mouseup(function(){
  $(this).blur();
})


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  $(function() {
    $('a[href^="mailto:"]').each(function() {
     this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
     // Remove this line if you don't want to set the email address as link text:
     this.innerHTML = this.href.replace('mailto:', '');
    });
   });