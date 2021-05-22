import $ from "jquery";
export function jqueryCode() {
    $(window).scroll(function () {
        var scr = $(window).scrollTop();
        if (scr > 80) {
            $("#hero.white").addClass("sticky");
            $("header").addClass("home_sticky");
        } else {
            $("#hero.white").removeClass("sticky");
            $("header").removeClass("home_sticky");
        }
    });
}
