$(document).ready(function(){
    $("#intro").hide(0).delay(500).fadeIn(1000)
    $("#nav, #label").hide(0).delay(1500).fadeIn(1000)
    $("table tr td").each(function(i, obj) {
        $(obj).hover(function() {
            $("#label").hide(0).css('background-image', 'radial-gradient(at top, rgba(236, 100, 75, 1) 10%, rgba(255, 255, 255, 0) 20%)').fadeIn(200);
            $("#actualLabel").text($(obj).attr('id')).fadeIn(200);
        }, function() {
            $("#label").hide(0).css('background-image', 'radial-gradient(at top, rgba(84, 84, 84, 1) 10%, rgba(255, 255, 255, 0) 20%)').fadeIn(200);
            $("#actualLabel").fadeOut(200)
        })
    });
});