// submenu
$(function(){
$(".submenu").hide();
$(".gnb li a").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("header").mouseleave(function(){
    $(".submenu").stop().slideUp()
});
// submenu

$(".board> li> a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on")
});

});