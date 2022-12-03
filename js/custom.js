$('.toggle a').click(function() {
    $('.nav-menu').slideToggle(400);
    return false;
});




$('.nav-menu ul li .fa-angle-down').click(function () {
    $(this).parent('li').children('ul').slideToggle();
    $(this).hide();
    $('.nav-menu ul li .fa-angle-up').show();
});
$('.nav-menu ul li .fa-angle-up').click(function () {
    $(this).parent('li').children('ul').slideToggle();
    $(this).hide();
    $('.nav-menu ul li .fa-angle-down').show();
});











