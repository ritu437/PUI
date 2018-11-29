
/*function static2gif(imgID){
    //identify img location
    //replace img src with gif src
    console.log("static2gif");
    switch(imgID){
        case "pointing-thumb":
            if(document.getElementById("pointing-thumb") != null){
                console.log("if pt thumb static2gif");
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#pointing-thumb").attr("src", gifSrc);
            }
            console.log("pt thumb static2gif");
            break;
        case "question-marks":
            if(document.getElementById("question-marks") != null){
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#question-marks").attr("src", gifSrc);
            }
            break;
        case "arms-crossed":
            if(document.getElementById("question-marks") != null){
                var imgNode = document.createElement("img"); //create image element
                imgNode.src = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                document.getElementById("pointing-thumb").appendChild(imgNode);
            }
            break;
        case "excited":
            if(document.getElementById("question-marks") != null){
                var imgNode = document.createElement("img"); //create image element
                imgNode.src = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                document.getElementById("pointing-thumb").appendChild(imgNode);
            }
            break;
        default:
            break;
    }
}
function gif2static(){
    console.log("gif2static");
}
function mapImgToGif(imgID){
    //map each img to a gif
    switch(imgID){
        case "pointing-thumb":
            var gifSrc = ("src", "Assets/SVGs/HomePage/Boss/thumbs.gif"); //set gif
            break;
        case "question-marks":
            var gifSrc =("src", "Assets/SVGs/HomePage/Boss/thumbs.gif"); //set gif
            break;
        case "arms-crossed":
            var gifSrc =("src", "Assets/SVGs/HomePage/Boss/thumbs.gif"); //set gif
            break;
        case "excited":
            var gifSrc =("src", "Assets/SVGs/HomePage/Boss/thumbs.gif"); //set gif
            break;
        default:
            break;
    }
    //return the gif src
    return gifSrc;
} //end mapImgToGif

function gifOnHover(){
    //identify img location
    //replace img src with gif src
    console.log("gifOnHover");
    switch(imgID){
        case "pointing-thumb":
            if(document.getElementById("pointing-thumb") != null){
                console.log("if pt thumb static2gif");
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#pointing-thumb").attr("src", gifSrc);
            }
            console.log("pt thumb static2gif");
            break;
        case "question-marks":
            if(document.getElementById("question-marks") != null){
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#question-marks").attr("src", gifSrc);
            }
            break;
        case "arms-crossed":
            if(document.getElementById("question-marks") != null){
                var imgNode = document.createElement("img"); //create image element
                imgNode.src = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                document.getElementById("pointing-thumb").appendChild(imgNode);
            }
            break;
        case "excited":
            if(document.getElementById("question-marks") != null){
                var imgNode = document.createElement("img"); //create image element
                imgNode.src = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                document.getElementById("pointing-thumb").appendChild(imgNode);
            }
            break;
        default:
            break;
    }
}*/
$(document).ready(function(){
    console.log("ready");
    $(".module-img").hover(
        static2gif(){
            console.log("static2gif");
        },
        gif2static(){
            console.log("gif2static");
        }
    );

}); //end on ready


-----


/*function static2gif(imgID){
    //identify img location
    //replace img src with gif src
    console.log("static2gif");
    switch(imgID){
        case "pointing-thumb":
            if(document.getElementById("pointing-thumb") != null){
                console.log("if pt thumb static2gif");
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#pointing-thumb").attr("src", gifSrc);
            }
            console.log("pt thumb static2gif");
            break;
        case "question-marks":
            if(document.getElementById("question-marks") != null){
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#question-marks").attr("src", gifSrc);
            }
            break;
        case "arms-crossed":
            if(document.getElementById("question-marks") != null){
                var imgNode = document.createElement("img"); //create image element
                imgNode.src = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                document.getElementById("pointing-thumb").appendChild(imgNode);
            }
            break;
        case "excited":
            if(document.getElementById("question-marks") != null){
                var imgNode = document.createElement("img"); //create image element
                imgNode.src = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                document.getElementById("pointing-thumb").appendChild(imgNode);
            }
            break;
        default:
            break;
    }
}
function gif2static(){
    console.log("gif2static");
}
function mapImgToGif(imgID){
    //map each img to a gif
    switch(imgID){
        case "pointing-thumb":
            var gifSrc = ("src", "Assets/SVGs/HomePage/Boss/thumbs.gif"); //set gif
            break;
        case "question-marks":
            var gifSrc =("src", "Assets/SVGs/HomePage/Boss/thumbs.gif"); //set gif
            break;
        case "arms-crossed":
            var gifSrc =("src", "Assets/SVGs/HomePage/Boss/thumbs.gif"); //set gif
            break;
        case "excited":
            var gifSrc =("src", "Assets/SVGs/HomePage/Boss/thumbs.gif"); //set gif
            break;
        default:
            break;
    }
    //return the gif src
    return gifSrc;
} //end mapImgToGif

function gifOnHover(){
    //identify img location
    //replace img src with gif src
    console.log("gifOnHover");
    switch(imgID){
        case "pointing-thumb":
            if(document.getElementById("pointing-thumb") != null){
                console.log("if pt thumb static2gif");
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#pointing-thumb").attr("src", gifSrc);
            }
            console.log("pt thumb static2gif");
            break;
        case "question-marks":
            if(document.getElementById("question-marks") != null){
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#question-marks").attr("src", gifSrc);
            }
            break;
        case "arms-crossed":
            if(document.getElementById("question-marks") != null){
                var imgNode = document.createElement("img"); //create image element
                imgNode.src = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                document.getElementById("pointing-thumb").appendChild(imgNode);
            }
            break;
        case "excited":
            if(document.getElementById("question-marks") != null){
                var imgNode = document.createElement("img"); //create image element
                imgNode.src = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                document.getElementById("pointing-thumb").appendChild(imgNode);
            }
            break;
        default:
            break;
    }
}*/
$(document).ready(function(){
    console.log("ready");
    $(".module-img").hover(
        function(){ //on mouse on replace static img with gif
            console.log("static2gif");
            var imgID = $(this).attr('id');
            console.log(imgID);
            if(document.getElementById("pointing-thumb") != null){
                console.log("if pt thumb static2gif");
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs2.gif";
                $("#pointing-thumb").attr("src", gifSrc);
            }
            if(document.getElementById("question-marks") != null){
                gifSrc = "Assets/SVGs/HomePage/Feelings/questions.gif";
                $("#question-marks").attr("src", gifSrc);
            }
            if(document.getElementById("question-marks") != null){
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#question-marks").attr("src", gifSrc);
            }
            if(document.getElementById("question-marks") != null){
                gifSrc = "Assets/SVGs/HomePage/Boss/thumbs.gif";
                $("#question-marks").attr("src", gifSrc);
            }
        },
        function(){ //on mouse off replace gif with static img
            console.log("gif2static");
            if(document.getElementById("pointing-thumb") != null){
                console.log("if pt thumb gif2static");
                imgSrc = "Assets/SVGs/HomePage/Boss/Thumb3.svg";
                $("#pointing-thumb").attr("src", imgSrc);
            }
        }
    );

}); //end on ready