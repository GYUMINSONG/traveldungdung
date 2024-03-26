// submenu
$(".submenu").hide();
$(".gnb li a").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("header").mouseleave(function(){
    $(".submenu").stop().slideUp()
});
// submenu