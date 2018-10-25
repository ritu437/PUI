
/*Constructor for Buns*/
    function Bun(bunType, bunImg, bunPrice){
        this.type = bunType;
        this.price = bunPrice;
        this.img = bunImg;
        this.glaze = "None";
        this.qty = 0;
        this.subtotal = qty*bunPrice;
    }


    /*Glaze Selection - Button Click*/
    function chooseGlaze(){

    }


    /*Add Bun to Cart
    function add(bun){
        $("#add-animal").text("Save!"); //set button text
        $("#add-animal").click(function(){ //bind handler for click event - saving of animal
            localStorage.setItem("savedAnimal", JSON.stringify(animal)); //store animal
            $("#feedback").text("Saved!"); //set feedback text
            for(int i = 0; i<5; i++){
                if(savedAnimals[i] === null){
                    savedAnimals[i] = savedAnimal;
                    break;
                }
            }
            clear();
        })
    }*/

/*on document ready????*/
$(document).ready(function(){
    /*Declare an int variable orderTotal*/
    var orderTotal = 0;
    /*Declare an int variable numItems*/
    var numItems = 0;

    /*PRODUCT DETAIL PAGE*/
    /*Glaze Selection - Button Click*/

    $(".glaze-button").click(function(){
        /*Change Button Color*/
        $(".glaze-button").removeClass("active");
        $(this).addClass("active");
        /*Update Glaze property*/
        switch($(this).attr("value")){
            case "sug-milk":
                $("#bun-img").attr("src", "Assets/Images/original-buns.png"); //set image
                console.log("sug");
                break;
            case "van-milk":
                $("#bun-img").attr("src", "Assets/Images/original-buns.png"); //set image
                console.log("van");
                break;
            case "doub-choc":
                $("#bun-img").attr("src", "Assets/Images/chocolate-buns.jpg"); //set image
                console.log("choc");
                break;
            default:
                console.log("orig");
                $("#bun-img").attr("src", "Assets/Images/original-buns.png"); //set image
                break;
        /*Update Image property*/
        }
    })

    /*Glaze Selection - Button Click*/

    /*Quantity Selection- Button Click*/
        /*Change Button Color*/
        /*Update Quantity property*/
        /*Update Subtotal*/

    /*Adding Bun to Cart*/
        /*check if cart exists in local storage*/
            /*if no*/
                /*create a cart array*/
                /*save it to local storage*/
            /*then*/
                /*add bun to cart array*/
                /*update numItems*/
                /*update orderTotal*/

    /*CART PAGE*/
    /*Deleting Bun from Cart*/
        /*remove bun from cart array*/
        /*update numItems*/
        /*update orderTotal*/

    /*Display Buns in Cart*/
        /*pull info from cart & create divs as necessary??????????*/

    /*Display Order Total*/
})