/**
 * @author v-qimiky
 */
var path = null;
var isShowClick = false;

$(window).resize(reSetSize);

$(document).ready(function() {
    $('#righter').hide();
    reSetSize();
    InitHtml();
});

function uploadFile() {
    $('.blockPane').show();
    var uploadFile = {
        fileName : $('#fileName').val(),
        fileBody : $('#htmlPane').val()
    };
    path = "htmls/" + uploadFile.fileName.toString();
    $.ajax({
        type : "POST",
        url : "uploadHtml",
        async : true,
        contentType : "application/json; charset=utf-8",
        data : JSON.stringify(uploadFile),
        success : function() {
            $('.cd-popup').addClass('is-visible');
        },
        error : function() {
            alert("error");
        }
    });
}

function showPreview() {
    isShowClick = !isShowClick;
    if (isShowClick) {
        var uploadFile = {
            fileName : $('#fileName').val(),
            fileBody : $('#htmlPane').val()
        };
        path = "htmls/" + uploadFile.fileName.toString();
        $.ajax({
            type : "POST",
            url : "uploadHtml",
            async : true,
            contentType : "application/json; charset=utf-8",
            data : JSON.stringify(uploadFile),
            success : function() {
                $('#preview').attr("src", path);
                reSetSize();
            },
            error : function() {
                alert("error");
            }
        });
    };
}

function InitHtml() {
    $.ajax({
        type : "GET",
        url : "htmls/popUp.html",
        async : true,
        success : function(data) {
            $('body').html(data + $('body').html());
            $('#showPreview').bind('click', showPreview);
            $('#popUpTitle').html("是否查看代码生成的网页?");
            $('#submitButton').bind('click', uploadFile);
            initSetUp();
        }
    });

    $.ajax({
        type : "GET",
        url : "htmls/Init.html",
        async : true,
        success : function(data) {
            $('#htmlPane').text(data);
        }
    });
}

function reSetSize() {
    if (isShowClick) {
        $('#righter').show(1000);
        $('#lefter').css("width", "50%");
    } else {
        $('#righter').hide(1000);
        $('#lefter').css("width", "100%");
    };
    var winHeight = $(window).height();
    var htmlPaneHeight = winHeight;
    $('.baseFrame').css("height", winHeight.toString());
    $('#htmlPane').css("height", htmlPaneHeight.toString());
    $('#preview').css("height", htmlPaneHeight.toString());
}