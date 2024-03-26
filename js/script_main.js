$(".inner_banner .fade li").hide();
$(".inner_banner .fade li:nth-child(1)").show();

setInterval(function () {
    $(".inner_banner .fade li:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo(".inner_banner .fade")
}, 6000);

$(".category li span").click(function () {
    $(this).parent().addClass("on").siblings().removeClass("on");
});

$(".information_on_2").hide();
$(".information_on_3").hide();
$(function () {
    $(".category1_button").click(function () {
        $(".category1").fadeIn().siblings().fadeOut();
        $(".information_on_1").fadeIn().siblings().fadeOut();
    })
    $(".category2_button").click(function () {
        $(".category2").fadeIn().siblings().fadeOut();
        $(".information_on_2").fadeIn().siblings().fadeOut();
    })
    $(".category3_button").click(function () {
        $(".category3").fadeIn().siblings().fadeOut();
        $(".information_on_3").fadeIn().siblings().fadeOut();
    })
});



// submenu
$(".submenu").hide();
$(".gnb li a").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("header").mouseleave(function(){
    $(".submenu").stop().slideUp()
});
// submenu

$(".search_bar form").focusin(function(){
    $(this).parent().addClass("search_bar_hover");
})
$(".search_bar form").focusout(function(){
    $(this).parent().removeClass("search_bar_hover");
})



//달력 START
$(function () {
    $("#datepicker").datepicker();
});


