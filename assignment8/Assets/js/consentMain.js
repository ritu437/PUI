
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

    /*nav link text on home page gets larger on hover*/
    $(".nav-link").hover(
        /*When hover over a link change font size*/
        function(){
            $(this).css("border-bottom", "2px solid #000"); //increase font size
        },
        /*When hover off link text goes back to original size*/
        function(){
            $(this).css("border-bottom", "none"); //decrease font size
        }
    );

    /*Neutral img changes to appropriate img based on Yes or No button click*/
    $(".act1 button").click( //activity 1
        function(){
            var newSrc = $(this).attr("newSrc"); //get src of new img
            $(".act1 img").attr("src", newSrc); //set src to new src
        }
    );
    $(".act2 button").click( //activity 2
        function(){
            var newSrc = $(this).attr("newSrc"); //get src of new img
            $(".act2 img").attr("src", newSrc); //set src to new src
        }
    );

});

