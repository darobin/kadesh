
var $u = $("#uotd")
,   $win = $(window)
,   $banner = $("#snapshot-banner")
,   toggleBanner = function () {
        var bottom = $u.position().top + $u.height()
        ,   scroll = $win.scrollTop()
        ;
        if (scroll > bottom) $banner.show();
        else                 $banner.hide();
    }
;
$banner.find("button").click(function () {
    $banner.remove();
});
$win.scroll(toggleBanner);
toggleBanner();
