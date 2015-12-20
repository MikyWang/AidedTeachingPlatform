/**
 * @author v-qimiky
 */
$(window).resize(setBlockSize);

$(document).ready(function() {
    setBlockSize();
    $('.blockPane').hide();
});

function setBlockSize() {
    var winHeight = $(window).height();
    $('.blockPane').height(winHeight);
}

function popUp() {
    if ($(this).attr('id') == "yesButton") {
        location.href = path;
    } else {
        $('.cd-popup').removeClass('is-visible');
        $('.blockPane').hide();
    };
}

function initSetUp() {
    $('.alert').bind('click', popUp);
}
