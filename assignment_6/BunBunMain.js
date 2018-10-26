
/*Constructor for Buns*/
    function Bun(bunType, bunPrice, bunGlaze, bunQty, bunIndex){
        this.bunType = bunType;
        this.price = bunPrice;
        this.glaze = bunGlaze;
        this.img = mapImgToGlaze;
        this.qty = bunQty;
        this.subtotal = bunQty*bunPrice;
        this.bunIndex = bunIndex;
    }


/*Calculate Order Total*/
function getOrderTotal(shoppingCart){
    var total = 0;
    for(var i = 0; i < shoppingCart.length; i++){
        total = total + ((shoppingCart[i]).subtotal);
    }
    localStorage.setItem("orderTot", JSON.stringify(total));
    return total;
}

/*Map Glaze & Image*/
function mapImgToGlaze(glazeValue){
    //map each glaze value to an img src
    switch(glazeValue.trim()){
        case "Sugar Milk":
            var imgSrc = ("src", "Assets/Images/frosted-blackberry-buns.jpg"); //set image
            break;
        case "Vanilla Milk":
            var imgSrc =("src", "Assets/Images/pumpkin-spice-buns.png"); //set image
            break;
        case "Double Chocolate":
            var imgSrc =("src", "Assets/Images/chocolate-buns.jpg"); //set image
            break;
        default:
            var imgSrc =("src", "Assets/Images/original-buns.png"); //set image
            break;
    }
    //return the img src
    return imgSrc;
}


    /*Map Product Selection to Product Values*/
function mapSelectionToProperties(typeOfBun){
    switch(typeOfBun){
        case "pump-bun":
            var bunName = "Pumpkin Bun";
            var bunImg = "Assets/Images/pumpkin-spice-buns.png";
            break;
        case "black-bun":
            var bunName = "Blackberry";
            var bunImg = "Assets/Images/frosted-blackberry-buns.jpg";
            break;
        case "waln-bun":
            var bunName = "Walnut Bun";
            var bunImg = "Assets/Images/walnut-buns.jpg";
            break;
        case "gf-bun":
            var bunName = "Gluten Free";
            var bunImg = "Assets/Images/gluten-free.jpg";
            break;
        case "pec-bun":
            var bunName = "Pecan Bun";
            var bunImg = "Assets/Images/pecan-buns.jpg";
            break;
        default: //original bun
            var bunName = "The Original";
            var bunImg = "Assets/Images/original-buns.png";
            break;
    }
    var bunPropArray = [bunName, bunImg];
    return bunPropArray;
}

/*on document ready*/
$(document).ready(function(){

    /*Initialize Website Variables*/
    if(JSON.parse(localStorage.getItem("cart")) == null){ /*shopping cart does not exist in local storage*/
        /*Declare an int variable numItems*/
        var numItems = 0;
        /*Declare an int variable orderTotal & save to local storage*/
        var orderTotal = 0;
        localStorage.setItem("orderTot", JSON.stringify(orderTotal));
    }
    else{ /*shopping cart exists in local storage*/
        var shoppingCart = JSON.parse(localStorage.getItem("cart"))
        /*Get orderTotal*/
        if(JSON.parse(localStorage.getItem("orderTot")) != null){ /*orderTot does exist in local storage*/
            var orderTotal = localStorage.getItem("orderTot");
        }
        else{
            var orderTotal = 0;
        }
        /*Declare an int variable numItems*/
        var numItems = shoppingCart.length;
    }
    $("#num-items-cart").text(numItems + "X");

    /*PRODUCT DETAIL PAGE*/
    /*Load Specific Bun Information Based on Product Page Click)*/
    /*Determine Which Product is Selected*/
    var searchParam= window.location.search;
    var typeOfBun = "orig-bun"; //default to original bun
    if (searchParam) {
        if(searchParam.indexOf('pumpkin') !== -1){// pumpkin bun selected
            typeOfBun = "pump-bun";
        }
        if(searchParam.indexOf('blackberry') !== -1){ // blackberry bun selected
            typeOfBun = "black-bun";
        }
        if(searchParam.indexOf('walnut') !== -1){// walnut bun selected
            typeOfBun = "waln-bun";
        }
        if(searchParam.indexOf('gf') !== -1){ // gluten free bun selected
            typeOfBun = "gf-bun";
        }
        if(searchParam.indexOf('pecan') !== -1){// pecan bun selected
            typeOfBun = "pec-bun";
        }
    }//end if
    var bunPropInput = mapSelectionToProperties(typeOfBun);
    //update image element
    if(document.getElementById("bun-img") != null){
        var imgNode = document.createElement("img"); //create  image element
        imgNode.src = (bunPropInput[1]);
        document.getElementById("bun-img").appendChild(imgNode);
    }

    //update text element
    if(document.getElementById("bun-type") != null){
        var textNode = document.createTextNode(bunPropInput[0]);
        document.getElementById("bun-type").appendChild(textNode);
    }
    /*Glaze Selection - Button Click*/
    $(".glaze-button").click(function(){
        /*Change Button Color*/
        $(".glaze-button").removeClass("active");
        $(this).addClass("active");
        /*Update Image property*/
        var glazeButtonElement = $(this).text();
        $("#bun-img").attr("src", mapImgToGlaze(glazeButtonElement)); //update image on page
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
                        var bunGlaze = $(".glaze-button.active").text();
                        /*define bun qty*/
                        var bunQty = $(".qty-button.active").attr("value");
                        /*define bun type*/
                        var bunType = (mapSelectionToProperties(typeOfBun))[0];
                        /*create bun object*/
                        var bun = new Bun(bunType, 3, bunGlaze, bunQty, shoppingCart.length);

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

    /*CART PAGE*/
    /*Display Buns in Cart*/
    if(JSON.parse(localStorage.getItem("cart")) != null){ /*shopping cart does exist in local storage*/
    /*For Each Bun in the Cart*/
    for(var objIndex = 0; objIndex < shoppingCart.length; objIndex++){
        /*create a div element (product)*/
        var divProduct = document.createElement("div");
        divProduct.setAttribute("class", "product");
        divProduct.setAttribute("id", objIndex)
            /*create a div element (delete)*/
            var divDelete = document.createElement("div");
            divDelete.setAttribute("class", "delete-button");
            divDelete.setAttribute("index", objIndex)
            divProduct.appendChild(divDelete);
                /*create a node (delete button)*/
                var deleteBunN = document.createElement("button");
                deleteBunN.innerHTML = "Delete from Cart";
                divDelete.appendChild(deleteBunN);
            /*create a div element (bun)*/
            var divBunImgName = document.createElement("div");
            divBunImgName.setAttribute("class", "which-bun");
            divProduct.appendChild(divBunImgName);
                /*create a node (image)*/
                var bunImgN = document.createElement("img"); //create  image element
                bunImgN.src = mapImgToGlaze(shoppingCart[objIndex].glaze); //set image element src to the appropriate image
                bunImgN.setAttribute("width", "115px");
                bunImgN.setAttribute("height", "100px");
                bunImgN.setAttribute("alt", "BUN IMAGE");
                divBunImgName.appendChild(bunImgN);
                /*create a node (text)*/
                var bunNameE = document.createElement("p");
                var bunNameN = document.createTextNode(shoppingCart[objIndex].bunType);
                divBunImgName.appendChild(bunNameN);
            /*create a div element (property texts)*/
            var divText = document.createElement("div");
            divText.setAttribute("class", "property-text");
            divProduct.appendChild(divText);
                /*create a p element (glaze)*/
                var glazeT = document.createElement("p");
                divText.appendChild(glazeT);
                    /*create a note (text)*/
                    var glazeN = document.createTextNode("glaze");
                    glazeT.appendChild(glazeN);
                /*create a p element (quantity)*/
                var quantityT = document.createElement("p");
                divText.appendChild(quantityT);
                    /*create a note (text)*/
                    var quantityN = document.createTextNode("quantity");
                    quantityT.appendChild(quantityN);
                /*create a p element (subtotal)*/
                var subtotalT = document.createElement("p");
                divText.appendChild(subtotalT);
                    /*create a note (text)*/
                    var subtotalN = document.createTextNode("subtotal");
                    subtotalT.appendChild(subtotalN);
            /*create a div element (bun properties)*/
            var divProperties = document.createElement("div");
            divProperties.setAttribute("class", "bun-properties");
            divProduct.appendChild(divProperties);
                /*create a p element (glaze)*/
                var glazeE = document.createElement("p");
                divProperties.appendChild(glazeE);
                    /*create a note (text)*/
                    var bunGlazeN = document.createTextNode(((shoppingCart[objIndex]).glaze).toString());
                    glazeE.appendChild(bunGlazeN);
                /*create a p element (quantity)*/
                var quantityE = document.createElement("p");
                divProperties.appendChild(quantityE);
                    /*create a note (text)*/
                    var bunQuantityN = document.createTextNode(((shoppingCart[objIndex]).qty).toString() + "x");
                    quantityE.appendChild(bunQuantityN);
                /*create a p element (subtotal)*/
                var subtotalE = document.createElement("p");
                divProperties.appendChild(subtotalE);
                    /*create a note (text)*/
                    var bunSubtotalN = document.createTextNode("$" + ((shoppingCart[objIndex]).subtotal).toString() +".00");
                    subtotalE.appendChild(bunSubtotalN);
        if(document.getElementById("cart-items-container") != null){
            var productE = document.getElementById("cart-items-container");
            productE.appendChild(divProduct);
        }

    } /*end for loop*/
    if(document.getElementById("total-cost") != null){
        document.getElementById("total-cost").innerHTML = "$" + orderTotal.toString() +".00";
    }

} /*end if*/

    /*Deleting Bun from Cart*/
    $(".delete-button").click(function(){
    /*remove bun from cart array*/
        /*get cart array*/
        shoppingCart = JSON.parse(localStorage.getItem("cart"));
        /*determine object index*/
        var iDelete = (this).getAttribute("index");
        console.log("index: " + iDelete);
        /*delete object from the cart array*/
        shoppingCart.splice(iDelete, 1);
        /*save to local storage*/
        localStorage.setItem("cart", JSON.stringify(shoppingCart));
        /*update numItems*/
        numItems = shoppingCart.length;
        document.getElementById("num-items-cart").innerHTML = numItems + "X";
        /*update orderTotal*/
        orderTotal = getOrderTotal(shoppingCart);
        document.getElementById("total-cost").innerHTML = "$" + orderTotal.toString() +".00";
        /*remove object from cart on page*/
        var cartContainer = document.getElementById("cart-items-container");
        var objetToDelete = document.getElementById(iDelete.toString());
        cartContainer.removeChild(objetToDelete);
    });
    /*Display Order Total*/


    }); /*end doc on ready function*/