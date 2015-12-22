$(window).resize(reSetSize);

$(document).ready(function() {
    $('.page').bind("click", createPage);
    reSetSize();
});

function createPage() {
    var id = $(this).attr('id').toString();
    if (id == "htmlPage") {
        location.href = "../createHtml";
    };
    if (id == "jspPage") {
        location.href = "../createJsp";
    };
}

function reSetSize() {
    var winHeight = $(window).height();
    var headerHeight = (winHeight * 0.4);
    var bodyHeight = (winHeight * 0.5);
    $('#header').css("height", headerHeight.toString());
    $('#body').css("height", bodyHeight.toString());
}

