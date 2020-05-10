/**
 * JavaScript for Side Menu
 */     
    // sidebar ====================
    
    $('.menu-btn').click(function(e){
      e.stopPropagation();
     $('.menu-nav').toggleClass('show');
     $('.menu-btn').toggleClass('close');
     console.log('works');
  });

  

 //Hide the sidebar if any outer space is clicked
 //Also hide the color option if any outer space is clicked

 // when click to any space on screen but the sidebar-menu will close sidebar-menu also close color-option==========================================================================

  $(document).click(function(e){

  var clickover = $(e.target);
  if(! clickover.closest('.menu-nav').length && $('.menu-nav').hasClass('show')){

      $('.menu-nav').removeClass('show'); 
      $('.menu-btn').removeClass('close'); 
    }

  var clickOverColor = $(e.target);
  if(! clickover.closest('.gear-check').length && $('.color-switcher').hasClass('on')){

    $('.color-switcher').removeClass('on');
  }

  });

  function hideMenu() {
    $('.menu-nav').toggleClass('show');
    $('.menu-btn').toggleClass('close');
  }


  /**
   * Referred for W3Schools
   */

 //Get the button To Display and Hide Scroll To Top Button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


        
    // show color-option div when click on gear icon =====================
    
    $('.gear-check').on('click',function(){
      $('.color-switcher').toggleClass('on'); 
   });

   var colorLi = $('.colors ul li');
   
       colorLi
       .eq(0).css("backgroundColor","rgba(0, 0, 0, 1)").end()
       .eq(1).css("backgroundColor","rgb(149, 56, 158)").end()
       .eq(2).css("backgroundColor","rgb(240, 165, 0)").end()
       .eq(3).css("backgroundColor","rgb(62, 32, 109)").end()
       .eq(4).css("backgroundColor","rgb(250, 22, 63)").end()
       .eq(5).css("backgroundColor","rgb(145, 189, 58)");
   
   colorLi.on('click',function(){
       
    //Change Theme of page
       document.getElementById('styleSheetTheme').setAttribute('href', $(this).attr('data-value'));
    //Change color of navbar
       document.getElementById('phoneNavBar').setAttribute('content', $(this).attr('data-color'));
       document.getElementById('phoneNavBar1').setAttribute('content', $(this).attr('data-color'));
       document.getElementById('phoneNavBar2').setAttribute('content', $(this).attr('data-color'));
       
   });