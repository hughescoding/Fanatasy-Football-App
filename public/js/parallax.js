$(window).scroll(function () {
    parallax();
})

function parallax () {
    var windowScroll = $(window).scrollTop();
    $(".parallax").css("background-position", "center "+(windowScroll*0.50)+"px")
}