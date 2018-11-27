$(document).ready(function () {
    var zindex = 10;

    $("div.tarjeta").click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("show")) {
            isShowing = true
        }

        if ($("div.tarjetas").hasClass("showing")) {
            // a tarjeta is already in view
            $("div.tarjeta.show")
                .removeClass("show");

            if (isShowing) {
                // this tarjeta was showing - reset the grid
                $("div.tarjetas")
                    .removeClass("showing");
            } else {
                // this tarjeta isn't showing - get in with it
                $(this)
                    .css({
                        zIndex: zindex
                    })
                    .addClass("show");

            }

            zindex++;

        } else {
            // no tarjetas in view
            $("div.tarjetas")
                .addClass("showing");
            $(this)
                .css({
                    zIndex: zindex
                })
                .addClass("show");

            zindex++;
        }

    });
});
