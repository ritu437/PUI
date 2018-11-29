
/*on document ready*/
$(document).ready(function(){
    console.log("ready");
    $(".module-img img").click(function(){
        var imgSrc = $(this).attr("id");
        console.log("img " + imgSrc);
        var gifSrc = $(this).attr("gif-src");
        console.log("gif " + gifSrc);
    });


});