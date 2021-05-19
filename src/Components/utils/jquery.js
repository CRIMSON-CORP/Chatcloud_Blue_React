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

    $(".navlinkItem ").click(function () {
        $(".navlinkItem").removeClass("active");
        $(this).addClass("active");
        document.querySelector("body").scrollTop = 0;
        window.scrollTo({
            top: 0,
        });
    });
    $(" button.slide ").click(() => {
        document.querySelector("body").scrollTop = 0;
        window.scrollTo({
            top: 0,
            scrollBehavior: "auto",
        });
    });
}
