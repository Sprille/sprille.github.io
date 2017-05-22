$(document).ready(function(){
 
/// FORM SCRIPT ///

  $('.top-menu li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
	});


   /// closeform.click(function(){
  //      openform.removeClass('active-form');
   //     $('.open-form form').css('display', 'none')
   //     $('.fb-analistic').css('height', '350px');
    //});




/// TITLE FORM ///

 
  /*  var form =  $('.title-form input[type="name"]');
    var form2 =  $('.title-form input[type="phone"]');
    var form3 =  $('.title-form input[type="mail"]');
    var message = $('.message');
    var title_button = $('.title-form button');


    title_button.click(function(){
        form.removeClass('active');
        form2.removeClass('active');
        form3.removeClass('active');
        message.removeClass('active'); 
    });

    form.click(function(){
        form.toggleClass('active');
        form2.removeClass('active');
        form3.removeClass('active');
        message.removeClass('active');
    });
    form2.click(function(){
        form2.toggleClass('active');
        form.removeClass('active');
        form3.removeClass('active');
        message.removeClass('active');
    });
    form3.click(function(){
        form3.toggleClass('active');
        form2.removeClass('active');
        form.removeClass('active');
        message.removeClass('active');
    });

    message.click(function(){
        form3.removeClass('active');
        form2.removeClass('active');
        form.removeClass('active');
        message.toggleClass('active');
    });*/


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





