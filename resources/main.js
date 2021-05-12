$(function() {
    const blueWidget= $('.subscriptions').find('.blue-widget');
    const iconClose =  $('.blue-widget').find('#close-icon');

    blueWidget.click(function(){
        $('.blue-widget').css({"width": "520px"});
        console.log('click');
        iconClose.removeClass('hidden');
    });

    iconClose.click(function(){
        blueWidget.addClass('hidden');
    });

    $(document).ready(() =>{
        $('.carousel .slick').slick({
            slidesToShow: 9,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,

        });
    });

});