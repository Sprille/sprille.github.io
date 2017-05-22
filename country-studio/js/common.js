$(document).ready(function(){
 
/// FORM SCRIPT ///

  $('.top-menu li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
	});


/// SLOW SCROLL WITH MENU ///

    $('.menu').on("click", "a", function (event){
        event.preventDefault()
       
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 1300);
    });

    $('.top-menu_active').on("click", "a", function (event){
        event.preventDefault()
       
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 1300);
    });


    $(window).scroll(function(){
        if($(this).scrollTop()>110){
            $('header').addClass('fixed');
            $('header').css({
                height: '90px',
                padding: '5px 0px'
            });
        }
        else if ($(this).scrollTop()<110){
            $('header').removeClass('fixed');
            $('header').css({
                height: '115px',
                padding: '20px 0px'
            });
        };
    });


$(document).ready(function(){
    $('#service_slider').owlCarousel({

        items : 3,
        nav : true,
        autoWidth : false,

    });
});



   /// closeform.click(function(){
  //      openform.removeClass('active-form');
   //     $('.open-form form').css('display', 'none')
   //     $('.fb-analistic').css('height', '350px');
    //});




/// SCROLL UP ///
 $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
        });
          
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});





