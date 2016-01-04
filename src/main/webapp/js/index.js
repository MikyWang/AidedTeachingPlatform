var hasCreate = false;
var createType;

$(window).resize(reSetSize);

$(document).ready(function() {
    $('.page').bind("click", createPage);
    reSetSize();
});

function createPage() {
    var id = $(this).attr('id').toString();
    hasCreate = true;
    if (id == "htmlPage") {
        $('#create').attr("src", "../createHtml");
    };
    if (id == "jspPage") {
        $('#showPreview').html("sadsadsa");
    };
    reSetSize();
}

function reSetSize() {
    $('#header').clearQueue();
    $('#title').clearQueue();
    $('navigater').clearQueue();
    $('#create').clearQueue();
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var headerHeight;
    var bodyHeight;
    if (hasCreate) {
        headerHeight = winHeight * 0.1;
        bodyHeight = winHeight * 0.9;
        $('#create').show().animate({
            height : (winHeight * 0.9).toString(),
            width : (winWidth - 220).toString()
        }, function() {
            $('#header').addClass('topbar');
            $('#title').animate({
                right : winWidth / 2 - 100
            });
            $('#navigater').animate({
                width : 200
            }).addClass('navibar');
        });
    } else {
        $('#create').hide();
        headerHeight = (winHeight * 0.4);
        bodyHeight = (winHeight * 0.6);
        $('#header').css('height', headerHeight).removeClass('topbar');
        $('#navigater').css('height', bodyHeight).removeClass('navibar');
    };
    $('#header').animate({
        height : headerHeight,
    });
    $('#navigater').animate({
        height : bodyHeight,
    });
}
