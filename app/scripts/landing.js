  $(document).ready(function() { 
    $('.hero-content h3').click(function(){
      var subText = $(this).text();
       $(this).text(subText + "!");
    });

    var onHoverColor = function(event) {
      $(this).css({'color': '#FF0059'});
    };

    var offHoverColor = function(event) {
      $(this).css({'color': 'white'});
    };

    $('body .hero-content h3').hover(onHoverColor, offHoverColor);
 
   var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
   };
 
   var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
   };
 
    $('.selling-points .point').hover(onHoverAction, offHoverAction);

    $('.selling-points .point h5').click(function(){
       $(this).css({'font-size': '30px'});
    }); 

    $('.hero-content h1').click(function(){
      $(this).fadeOut('slow', function() {
      });
    });

  });