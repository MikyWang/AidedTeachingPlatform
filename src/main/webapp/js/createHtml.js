/**
 * @author v-qimiky
 */
var path = null;
var isShowClick = false;
var uploadString = "是否查看代码生成的网页?";
var emptyFileNameString = "<input type=\"text\" id=\"verifyFileName\"  placeholder=\"请输入文件名:\"  class=\"textBase\" />";
var time = 200;
var time_out;

$(window).resize(reSetSize);

$(document).ready(function() {
    $('#righter').hide();
    InitHtml();
    reSetSize();
});

function addSuffix() {
    if ($(this).val().indexOf('.') > 0) {
        $(this).val($(this).val() + "html");
    };
}

function uploadFile() {
    $('.blockPane').show();
    if ($('#fileName').val() == "") {
        time_out = setInterval(verifyFileName, time);
        $('#popUpTitle').html(emptyFileNameString);
        $('#verifyFileName').bind('input', addSuffix);
        $('.cd-popup').addClass('is-visible');
        $('.alert').unbind('click', jumpToNewPage).bind('click', saveFileName);
    } else {
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
                $('.alert').unbind('click', saveFileName).bind('click', jumpToNewPage);
                $('#popUpTitle').html(uploadString);
                $('.cd-popup').addClass('is-visible');
            },
            error : function() {
                alert("error");
            }
        });
    };
}

function verifyFileName() {
    var verifyFileName = $('#verifyFileName').val();
    if (isNullOrUndefined(verifyFileName)) {
        $('#yesButton').attr("disabled", "disabled").removeClass('enable');
    } else {
        $('#yesButton').removeAttr('disabled').addClass('enable');
    };
};

function saveFileName() {
    if ($(this).attr('id') == "yesButton") {
        $('#fileName').val($('#verifyFileName').val());
        clearInterval(time_out);
        uploadFile();
    } else {
        $('#popUpTitle').html("");
    };
}

function jumpToNewPage() {
    if ($(this).attr('id') == "yesButton") {
        location.href = path;
    };
}

function showPreview() {
    isShowClick = !isShowClick;
    if (isShowClick) {
        var uploadFile = {
            fileName : "temp.html",
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
                $('#showPreview').html("隐藏预览");
                reSetSize();
            },
            error : function() {
                alert("error");
            }
        });
    } else {
        $('#showPreview').html("预览");
        reSetSize();
    };
}

function InitHtml() {
    $.ajax({
        type : "GET",
        url : "htmls/popUp.html",
        async : true,
        success : function(data) {
            $('body').prepend(data);
            $('#showPreview').bind('click', showPreview);
            $('#submitButton').bind('click', uploadFile);
            $('.input').bind('input', addSuffix);
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
    $('#lefter').clearQueue();
    if ($(window).width() <= 1000) {
        $('#showPreview').hide();
        $('#righter').hide();
        $('#lefter').animate({
            width : "100%"
        });
    } else {
        $('#showPreview').show();
        if (isShowClick) {
            $('#righter').show();
            $('#lefter').animate({
                width : "50%"
            });
        } else {
            $('#righter').hide();
            $('#lefter').animate({
                width : "100%"
            });
        };
    };
    var winHeight = $(window).height();
    var htmlPaneHeight = winHeight * 0.83;
    $('.baseFrame').css("height", winHeight.toString());
}