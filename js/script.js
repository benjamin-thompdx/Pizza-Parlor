// Business-Logic----

function Pizza(size, toppings) {
    this.size = size,
    this.toppings = toppings,
    this.price = 8
};

//Add size of pizza

//Add topping of pizza

//Pizza price by size

//pizza price by topping

//User-Logic----

$(document).ready(function(){

    $("button#pizzaButton").click(function(event) {
        event.preventDefault();
        $("button#pizzaButton").hide();
        $("#jumbotron-pizza-options").show();
    });
});