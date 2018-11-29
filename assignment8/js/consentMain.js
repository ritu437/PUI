
/*on document ready*/
$(document).ready(function(){
    console.log("ready");
/*    $(".module-img img").click(function(){
        var imgSrc = $(this).attr("id");
        console.log("img " + imgSrc);
        var gifSrc = $(this).attr("gif-src");
        console.log("gif " + gifSrc);
    });*/

    $(".module-img img").hover(function(){
        var curSrc = $(this).attr("src");
        console.log("current src: " +curSrc);
        var imgSrc = $(this).attr("id");
        console.log("img " + imgSrc);
        var gifSrc = $(this).attr("gif-src");
        console.log("gif " + gifSrc);
        $(this).attr("src", gifSrc);
        var newSrc = $(this).attr("src");
        console.log("new src: " +newSrc);
    }, function(){

    });


});