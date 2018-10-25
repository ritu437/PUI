
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
        /*Change Button Color*/
        $("#add-animal").text("Save!"); //set button text
        /*Update Glaze property*/
        /*Update Image property*/
    }


    /*Add Bun to Cart*/
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
    }
/*on document ready????*/
$(document).ready(function(){
    /*Declare an int variable orderTotal*/
    var orderTotal = 0;
    /*Declare an int variable numItems*/
    var numItems = 0;

    /*PRODUCT DETAIL PAGE*/
    /*Glaze Selection - Button Click*/
        /*Change Button Color*/
        /*Update Glaze property*/
        /*Update Image property*/

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






/*Create Bun and Update Product Detail Page*/
$(document).ready(function(){
    var selectedBun
    if(JSON.parse(localStorage.getItem("savedAnimal")) !== null){ //there is an animal stored
        animal = JSON.parse(localStorage.getItem("savedAnimal")); //set animal to previously stored animal
        clear();
    }
    else{ //there is no animal currently stored
        var animal = generateRandomAnimal(); //set animal to newly generated animal
        save(animal, savedAnimals); //allow user to save animal
    }
    $(".animal-name").text(animal.name); //set name text
    $(".animal-img").attr("src", animal.img); //set image
    $(".animal-age").text("Age: " + animal.age + " years old"); //set age text

})