$(document).ready(function() {
    $('.page').bind("click", function() {
        var id=$(this).attr('id').toString();
        if (id=="htmlPage") {
            location.href = "../login";
        };
        if (id=="jspPage") {
            location.href = "../index";
        };
    });

    reSetSize();
});

$(window).resize(reSetSize);

function reSetSize() {
    var winHeight = $(window).height();
    var headerHeight = (winHeight * 0.4);
    var bodyHeight = (winHeight * 0.6);
    $('#header').css("height", headerHeight.toString());
    $('#body').css("height", bodyHeight.toString());
}

