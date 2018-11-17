// TODO (Step 2): fill in code creating products objects here
var products = {
    "cinnamonBuns": [
        {
            "name": "Birthday Cake",
            "price": "$3.00",
            "img": "img/birthday-cake.jpg",
            "id": 0
        },
        {
            "name": "Lavender",
            "price": "$2.50",
            "img": "img/lavender.png",
            "id": 1
        },
        {
            "name": "Maple Walnut",
            "price": "$2.00",
            "img": "img/maple-walnut.jpg",
            "id": 2
        }
    ]
}

$(document).ready(function(){
    // TODO (Step 4): fill in code for changing selection-template here
    // get the HTML template using jQuery
    var source = $("#selection-template").html();
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using our data
    var newHTML = template(products);
    // add the new HTML to the page
    $("#product-selection-container").append(newHTML);

    // TODO (Step 7): add function call for 1st update to detail-template
    updateProductDetail(2);

    // TODO: (Step 8): add code below for changing product details on click
    var productImg = document.getElementById(0);
    productImg.onclick = function(){
        updateProductDetail(0);
    }


});

// TODO (Step 6): fill in function for updating detail-template based on id
function updateProductDetail(id) {
    // get the HTML template using jQuery
    var source = $("#detail-template").html();
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using our data
    var newHTML = template(products["cinnamonBuns"][id]);
    // add the new HTML to the page
    $("#product-detail-container").append(newHTML);
}
