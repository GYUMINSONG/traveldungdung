$(function(){
// submenu
$(".submenu").hide();
$(".gnb li a").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("header").mouseleave(function(){
    $(".submenu").stop().slideUp()
});
// submenu
$('.hover-text').hide();
$('.package li').mouseenter(function(){
    $(this).children('.normal-text').fadeOut(200);
    $(this).children('.hover-text').show(200);
});
$('.package li').mouseleave(function(){
    $(this).children('.normal-text').fadeIn(0);
    $(this).children('.hover-text').hide(0);
});
// accordion
// (function (i, s, o, g, r, a, m) {
//     i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
//         (i[r].q = i[r].q || []).push(arguments)
//     }, i[r].l = 1 * new Date(); a = s.createElement(o),
//         m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
// })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

// ga('create', 'UA-46156385-1', 'cssscript.com');
// ga('send', 'pageview');


});