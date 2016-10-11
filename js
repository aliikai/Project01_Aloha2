$(document).ready(function(){

  
  $(".product_div").on( "click", function(){
  	var sale = $(this).data("sale");
  	var price = $(this).data("price");
  	var discount = $(this).data("discount")
  	if (sale === true){

  	alert("This product is on sale! Original Price: $" +price+ "  Discount: $" + discount+"  Sale Price: $"+ (price-discount) +"!");
  	}
  	else{
  		alert("This product is not on sale.");
  	}

  })

  $(".product_div").on( "click", function(){
  	$("#cart_number").show();
  	var currentNumber = parseInt($("#cart_number").text());
  	var newNumber = currentNumber +1;
  	 $("#cart_number").html(newNumber);


  })



 })