
/*Constructor for Buns*/
    function Bun(bunType, bunPrice, bunGlaze, bunQty, bunIndex){
        this.type = bunType;
        this.price = bunPrice;
        this.glaze = bunGlaze;
        this.img = "Assets/Images/original-buns.png";
        this.qty = bunQty;
        this.subtotal = bunQty*bunPrice;
        this.index = bunIndex;
    }

/*Map Glaze & Image*/

function getOrderTotal(shoppingCart){
    var total = 0;
    for(var i = 0; i < shoppingCart.length; i++){
        total =+ ((shoppingCart[i]).subtotal);
    }
    console.log("tot: " + total);
    return total;
}

/*on document ready*/
$(document).ready(function(){
    /*Initialize Website Variables*/
    if(JSON.parse(localStorage.getItem("cart")) == null){ /*shopping cart does not exist in local storage*/
        /*Declare an int variable orderTotal*/
        var orderTotal = 0;
        /*Declare an int variable numItems*/
        var numItems = 0;
    }
    else{ /*shopping cart exists in local storage*/
        var shoppingCart = JSON.parse(localStorage.getItem("cart"))
        /*Declare an int variable orderTotal*/
        var orderTotal = getOrderTotal(shoppingCart);
        /*Declare an int variable numItems*/
        var numItems = shoppingCart.length;
    }
    $("#num-items-cart").text(numItems + "X");

    /*PRODUCT DETAIL PAGE*/
    /*Glaze Selection - Button Click*/
    $(".glaze-button").click(function(){
        /*Change Button Color*/
        $(".glaze-button").removeClass("active");
        $(this).addClass("active");
        /*Update Image property*/
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
        }
    });

    /*Quantity Selection - Button Click*/
    $(".qty-button").click(function(){
        /*Change Button Color*/
        $(".qty-button").removeClass("active");
        $(this).addClass("active");
        /*Update Subtotal*/
        switch($(this).attr("value")){
            case "3":
                var subtot = 3*3;
                $("#bun-subtotal").text("$" + subtot +".00"); //set name text
                break;
            case "6":
                var subtot = 6*3;
                $("#bun-subtotal").text("$" + subtot +".00"); //set name text
                break;
            case "12":
                var subtot = 12*3;
                $("#bun-subtotal").text("$" + subtot +".00"); //set name text
                break;
            default:
                var subtot = 1*3;
                $("#bun-subtotal").text("$" + subtot +".00"); //set name text
                break;
        }
    });

    /*Adding Bun to Cart*/
    $(".cart-add-button").click(function(){
        /*Check if Glaze has been selected*/

        $(".glaze-button").each(function(){
            if($(this).hasClass("active")){ /*If yes*/
                /*Check if QTY has been selected*/
                $(".qty-button").each(function(){
                    if($(this).hasClass("active")){ /*If yes*/
                        /*Check if shopping cart array exists in local storage*/
                        if(JSON.parse(localStorage.getItem("cart")) == null){ /*shopping cart does not exist in local storage*/
                            /*Declare an array variable shoppingCart*/
                            var shoppingCart = [];
                        }
                        else{ /*shopping cart exists in local storage*/
                            /*get shoppingCart saved in local storage*/
                            shoppingCart = JSON.parse(localStorage.getItem("cart"));
                        }

                        /*define bun glaze*/
                        var bunGlaze = $(".glaze-button.active").attr("value");
                        /*define bun qty*/
                        var bunQty = $(".qty-button.active").attr("value");
                        /*create bun object*/
                        var bun = new Bun("The Original", 3, bunGlaze, bunQty, shoppingCart.length);

                        /*add bun object to shoppingCart*/
                        shoppingCart[shoppingCart.length] = bun; /*adding new bun object to end of array list*/
                        /*Save shoppingCart to local storage*/
                        localStorage.setItem("cart", JSON.stringify(shoppingCart));

                        /*update numItems*/
                        numItems = shoppingCart.length;
                        /*update orderTotal*/
                        orderTotal = getOrderTotal(shoppingCart);
                        $("#num-items-cart").text(numItems + "X");
                    }
                    /*qty has not been selected - provide feedback - change color of qty text?*/
                    /*FUTURE IMPROVEMENTS*/
                })
            }
            /*glaze has not been selected- provide feedback - change color of glaze text?*/
            /*FUTURE IMPROVEMENTS*/
        })
    });


    });


    /*CART PAGE*/
    /*Deleting Bun from Cart*/
    /*$(".delete").click(function(){
        /*remove bun from cart array*/
        /*update numItems*/
        /*update orderTotal*/

    /*Display Buns in Cart*/
        /*pull info from cart & create divs as necessary??????????*/

    /*Display Order Total*/
