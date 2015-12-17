/**
 * @author v-qimiky
 */

$(document).ready(function() {
    reSetSize();

    $.ajax({
        type : "GET",
        url : "htmls/Init.html",
        async : false,
        success : function(data) {
            $('#htmlPane').text(data);
        }
    });

    $('#submitButton').bind('click', function() {
        var uploadFile = {
            fileName : $('#fileName').text(),
            fileBody : $('#htmlPane').text()
        };
        $.ajax({
            type : "POST",
            url : "uploadHtml",
            async : false,
            contentType : "application/json; charset=utf-8",
            data : JSON.stringify(uploadFile),
            success : function(data) {
                $('#righter').html(data);
            },
            error : function() {
                alert("error");
            }
        });

    });
});

$(window).resize(reSetSize);

function reSetSize() {
    if ($(window).width() <= 800) {
        $('#righter').hide();
        $('#lefter').css("width", "100%");
    } else {
        $('#righter').show();
        $('#lefter').css("width", "50%");
    };
    var winHeight = $(window).height();
    var htmlPaneHeight = winHeight * 0.89;
    $('.baseFrame').css("height", winHeight.toString());
    $('#htmlPane').css("height", htmlPaneHeight.toString());
    $('#preview').css("height", htmlPaneHeight.toString());
}