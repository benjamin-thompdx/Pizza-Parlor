// Business-Logic



//User-Logic

$(document).ready(function(){

    $("button#pizzaButton").click(function(event) {
        event.preventDefault();
        $("button#pizzaButton").hide();
        $("#jumbotron-pizza-options").show();
    });
});