
/*Constructor for Buns*/
    function Bun(bunType, bunPrice, bunIndex){
        this.type = bunType;
        this.price = bunPrice;
        this.glaze = "None";
        this.img = "Assets/Images/original-buns.png";
        this.qty = 0;
        this.subtotal = (this.qty)*bunPrice;
        this.index = bunIndex;
    }

/*Map Glaze & Image
var glazeImgMap = {""};*/

function getOrderTotal(shoppingCart){
    var total = 0;
    for(var i = 0; i < shoppingCart.length; i++){
        total += shoppingCart[i].subtotal;
    }
    return total;
}

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
                console.log("6");
                break;
            case "12":
                var subtot = 12*3;
                $("#bun-subtotal").text("$" + subtot +".00"); //set name text
                console.log("12");
                break;
            default:
                console.log("1");
                var subtot = 1*3;
                $("#bun-subtotal").text("$" + subtot +".00"); //set name text
                break;
        }
    });

    /*Adding Bun to Cart*/
    $(".cart-add-button").click(function(){
        /*Check if shopping cart array exists in local storage*/
        if(JSON.parse(localStorage.getItem("cart")) == null){ /*shopping cart does not exist in local storage*/
            /*Declare an array variable shoppingCart*/
            var shoppingCart = [];
            console.log("no cart");
        }
        else{ /*shopping cart exists in local storage*/
            /*get shoppingCart saved in local storage*/
            shoppingCart = JSON.parse(localStorage.getItem("cart"));
            console.log("cart exists");
        }
        /*update numItems*/
        numItems = shoppingCart.length;
        console.log(numItems);
        /*create bun object*/
        var bun = new Bun("The Original", 3, numItems)
        console.log("new bun");
        /*add bun object to shoppingCart*/
        shoppingCart[numItems] = bun; /*adding new bun object to end of array list*/
        /*Save shoppingCart to local storage*/
        localStorage.setItem("cart", JSON.stringify(shoppingCart));
        console.log("set cart");
        /*update orderTotal*/
        orderTotal = getOrderTotal(shoppingCart);
        console.log(orderTotal);
    });


    /*CART PAGE*/
    /*Deleting Bun from Cart*/
        /*remove bun from cart array*/
        /*update numItems*/
        /*update orderTotal*/

    /*Display Buns in Cart*/
        /*pull info from cart & create divs as necessary??????????*/

    /*Display Order Total*/
})