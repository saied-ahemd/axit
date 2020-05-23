$(function(){
    $(window).scroll(function(){
    var navbar=$('.navbar');
    if($(window).scrollTop()>=navbar.height()){
        navbar.addClass('scrolled');
        navbar.removeClass('color');
    }else{
        navbar.removeClass('scrolled');
        navbar.addClass('color');
    }
    });
    $('.tab li').click(function(){
        //give the div the selceted class and remove it form the other 
        $(this).addClass('selected').siblings().removeClass('selected');
        //hide all div
        $('.tabs-secction .tabs-content > div').hide();
        //show the selceted div
        $($(this).data('class')).show();
    })
});