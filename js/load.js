$(document).ready(function(){
    $("#intro, #about").hide(0).delay(500).fadeIn(1000)
    $("#nav, #label").hide(0).delay(1500).fadeIn(1000)
    $(".button").each(function(i, obj) {
        $(obj).hover(function() {
            $("#label").stop(false, true).hide(0).css('background-image', 'radial-gradient(at top, rgba(236, 100, 75, 1) 10%, rgba(255, 255, 255, 0) 20%)').fadeIn(200);
            $("#actualLabel").text($(obj).attr('id')).stop(false, true).fadeIn(200);
        }, function() {
            $("#label").stop(false, true).hide(0).css('background-image', 'radial-gradient(at top, rgba(84, 84, 84, 1) 10%, rgba(255, 255, 255, 0) 20%)').fadeIn(200);
            $("#actualLabel").stop(false, true).fadeOut(200)
        })
    });
    $('a.taphover').on('touchstart', function (e) {
        'use strict'; //satisfy code inspectors
        var link = $(this); //preselect the link
        if (link.hasClass('hover')) {
            return true;
        } else {
            link.addClass('hover');
            $('a.taphover').not(this).removeClass('hover');
            $('a.taphover').not(this).closest("td").css("background", "#545454")
            e.preventDefault();
            var td = link.closest("td")
            td.css("background", "rgb(235, 100, 75)")
            $("#label").stop(false, true).hide(0).css('background-image', 'radial-gradient(at top, rgba(236, 100, 75, 1) 10%, rgba(255, 255, 255, 0) 20%)').fadeIn(200);
            $("#actualLabel").text(td.attr('id')).stop(false, true).fadeIn(200);
            return false; //extra, and to make sure the function has consistent return points
        }
    });
});
