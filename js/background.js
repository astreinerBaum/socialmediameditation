var bg = $("#bgvid");

function resizeBackground() {
    bg.height($(window).height() + 60);
}

$(window).resize(resizeBackground);
resizeBackground();
