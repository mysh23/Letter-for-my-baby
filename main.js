// main.js

$(document).ready(function() {
    $("#messageState").on("change", function() {
        $(".message").removeClass("openNor closeNor");
        if ($("#messageState").is(":checked")) {
            $(".message").removeClass("closed no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer openedHer").addClass("openHer");
            $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
            console.log("Abrindo");
        } else {
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer openedHer").addClass("closeHer");
            $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
            console.log("fechando");
        }
    });

    $(".message").on('animationend', function() {
        console.log("Animation End");
        if ($(this).hasClass("closeNor")) {
            $(this).addClass("closed");
        }
        $(this).removeClass("openNor closeNor").addClass("no-anim");
    });

    $(".heart").on('animationend', function() {
        console.log("Animation End");
        if (!$(this).hasClass("closeHer")) {
            $(this).addClass("openedHer beating");
        } else {
            $(this).addClass("no-anim").removeClass("beating");
        }
        $(this).removeClass("openHer closeHer");
    });
});
