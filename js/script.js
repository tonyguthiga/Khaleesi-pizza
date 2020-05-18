// business logic
function Order(customSize, crust) {
    this.customSize = customSize;
    this.crust = crust;
    this.toppings = [];
}

function Topping(pepperoni, cheese, bacon, mushrooms, onions, sausage, spinach, blackOlives) {
    this.pepperoni = pepperoni;
    this.cheese = cheese;
    this.bacon = bacon;
    this.mushrooms = mushrooms;
    this.onions = onions;
    this.sausage = sausage;
    this.spinach = spinach;
    this.blackOlives = blackOlives;
}

Order.prototype.pizzaCost = function(){
    if (this.customSize === "small" && this.crust === "crispy"){
        pizzaPrice = 700;
    } 
    else if(this.customSize === "medium" && this.crust === "crispy"){
        pizzaPrice = 900;
    }
    else if(this.customSize === "large" && this.crust === "crispy"){
        pizzaPrice = 1100;
    }
    else if(this.customSize === "family" && this.crust === "crispy"){
        pizzaPrice = 1600;
    }
    else if(this.customSize === "small" && this.crust === "stuffed"){
        pizzaPrice = 650;
    }
    else if(this.customSize === "medium" && this.crust === "stuffed"){
        pizzaPrice = 850;
    }
    else if(this.customSize === "large" && this.crust === "stuffed"){
        pizzaPrice = 1050;
    }
    else if(this.customSize === "family" && this.crust === "stuffed"){
        pizzaPrice = 1550;
    }
    else if(this.customSize === "small" && this.crust === "thick"){
        pizzaPrice = 650;
    }
    else if(this.customSize === "medium" && this.crust === "thick"){
        pizzaPrice = 850;
    }
    else if(this.customSize === "large" && this.crust === "thick"){
        pizzaPrice = 1050;
    }
    else if(this.customSize === "family" && this.crust === "thick"){
        pizzaPrice = 1550;
    }
    else if(this.customSize === "small" && this.crust === "flatbread"){
        pizzaPrice = 700;
    }
    else if(this.customSize === "medium" && this.crust === "flatbread"){
        pizzaPrice = 950;
    }
    else if(this.customSize === "large" && this.crust === "flatbread"){
        pizzaPrice = 1100;
    }
    else if(this.customSize === "family" && this.crust === "flatbread"){
        pizzaPrice = 1600;
    }
    else {
        return("Please select your order");
    }
    return pizzaPrice;
}


// User interface logic
$(document).ready(function(){
    $("form#custom-pizza").submit(function(event){
        event.preventDefault();
        var customSize = $("select#size").val();
        var crust = $("select#crust").val();
        var pepperoni = $("input#pepperoni").val();
        var cheese = $("input#cheese").val();
        var bacon = $("input#bacon").val();
        var mushrooms = $("input#mushrooms").val();
        var onions = $("input#onions").val();
        var sausage = $("input#sausage").val();
        var spinach = $("input#spinach").val();
        var blackOlives = $("input#blackOlives").val();
        var quantity = parseInt($("select#qty").val());
        var delivery = $("select#sel1").val(); 
        var val = [];
        $(':checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });
        var newPizzaOrder = new Order(customSize, crust);
        newPizzaOrder.toppings.push(val);
        var cost = (parseInt(newPizzaOrder.pizzaCost()) * quantity);
        var deliveryCost = (parseInt(newPizzaOrder.pizzaCost()) * quantity) + 300;
        //checkout 
        if (delivery === "Self Pick"){
            $("#final-cost").show();
            $("#final-cost").text(cost);
        }
        else{
            $("#final-cost").show();
            $("#final-cost").text(deliveryCost);
            var location = prompt("Please enter your location");
            alert("You order has been received and will be delivered to your location in " + location + ". " + " Please proceed to checkout to see more details.")
            alert("You will be charged a delivery cost of Ksh. 300 and your total cost will be " + deliveryCost );
        }
        
        
    });

    $("#final-cost").click(function() {
      });

    $("#checkout-btn").click(function() {
        location.reload();
      });
    $("form#write").submit(function(){
        var name = $("#write").val();
        alert("We have received your message. Thank you for reaching out to us.")
    });
});