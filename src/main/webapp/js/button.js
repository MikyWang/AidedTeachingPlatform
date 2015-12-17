/**
 * @author v-qimiky
 */

$(document).ready(function(){
    $('.buttonBase').bind("mouseenter mouseleave",function(){
        $(this).toggleClass("buttonMouseEnter");
    });
});
