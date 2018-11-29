
/*on document ready*/
$(document).ready(function(){
    console.log("ready");

    /*img on home page changes to gif on hover*/
    $(".module-img img").hover(
        /*When hover over a module image change to gif*/
        function(){
            var gifSrc = $(this).attr("gif-src"); //get src of gif
            $(this).attr("src", gifSrc); //set src to gif src
        },
        /*When hover off a module image change back to static img*/
        function(){
            var imgSrc = $(this).attr("img-src");
            $(this).attr("src", imgSrc);
        }
    );


});