// Business-Logic----

function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings,
    this.basePrice = 8
};

//Add size of pizza
Pizza.prototype.addSize = function(size) {
this.size = size;
};

//Add topping of pizza
Pizza.prototype.addToppings = function(toppings) {
  this.toppings = toppings;
};

//Pizza price by size
Pizza.prototype.priceBySize = function(size) {
  this.size = size;
  if (this.size === "small") {
    this.basePrice;
  } else if (this.size === "medium") {
    this.basePrice += 2;
  } else if (this.size === "large") {
    this.basePrice += 4;
  } else {
  }
};

//pizza price by topping
Pizza.prototype.priceByToppings = function(topping) {
  if (topping === "noSauce") {
    this.basePrice -= 1;
  } else if (topping === "onions") {
    this.basePrice += 1;
  } else if (topping === "olives") {
    this.basePrice += 1;
  } else if (topping === "pepperoni") {
    this.basePrice += 3;
  } else if (topping === "sausage") {
    this.basePrice += 3;
  } else if (topping === "chicken") {
    this.basePrice += 4;
  } else if (topping === "prototype-sauce") {
    this.basePrice += 2;
  }
};

//Convert toppings to text
Pizza.prototype.arrayDisplay = function() {
  this.toppings.toString();
};

//User-Logic----

$(document).ready(function() {
  $("button#pizzaButton").click(function(event) {
    event.preventDefault();
    $("button#pizzaButton").hide();
    $("#jumbotron-pizza-options").show();
  });
  $("form.pizzaOptions").submit(function(event) {
    event.preventDefault();
    checked = $("input[type=checkbox]:checked").length;
      if (!checked) {
        alert("Please select atleast one option");
        return false;
      };
    var pizza = new Pizza();
    var size = $(this.size).val();
    pizza.priceBySize(size);
    var toppings = [];
    $.each($("input:checkbox[name=topping]:checked"), function() {
      toppings.push($(this).val());
    });
    pizza.addToppings(toppings);
    for (var i = 0; i < pizza.toppings.length; i++) {
      pizza.priceByToppings(toppings[i]);
    };
    
  });
});