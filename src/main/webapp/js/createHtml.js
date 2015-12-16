/**
 * @author v-qimiky
 */
$(document).ready(function(){
	reSetSize();
	
	
});

$(window).resize(reSetSize);

function reSetSize() {
    if ($(window).width()<=800) {
        $('#righter').hide();
        $('#lefter').css("width","100%");
    }else{
        $('#righter').show();
        $('#lefter').css("width","50%");
    };
    var winHeight = $(window).height();
    var htmlPaneHeight=winHeight*0.89;
    $('.baseFrame').css("height",winHeight.toString());
    $('#htmlPane').css("height",htmlPaneHeight.toString());
    $('#preview').css("height",htmlPaneHeight.toString());
}