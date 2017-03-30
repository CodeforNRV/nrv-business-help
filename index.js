var town =""
var business =""
var meals =""
var drinks=""
var drinkLoc=""
$(document).ready(function(){

$("#town").change(function(){
	
	if(town){
	$("#"+town).hide()
	$("."+town).hide()

}
	town=$("#town").val();
	if(town){
	$("#"+town).show()
	$("."+town).show()
	if($("#"+town).hasClass('licenes')){
		$('#business').show();
	}
	else{		$('#business').hide();	}
}
})
$("#business").change(function(){
	
	if(business){
	$("#"+business).hide()}
	business=$("#business").val();
	if(business){
	$("#"+business).show()
	
}
})
$("#meals").change(function(){

	
	if(meals){

	$("#"+meals).hide()}
	//alert("test")
	meals=$("#meals").val();
	if(meals){
	$("#"+meals).show()
	
}
})
$("#drinks").change(function(){

	
	if(drinks){

	$("#"+drinks).hide()}
	//alert("test")
	drinks=$("#drinks").val();
	if(drinks){
	$("#"+drinks).show()
	
}
})
$("#drinkLoc").change(function(){

	
	if(drinkLoc){

	$("."+drinkLoc).hide()}
	//alert("test")
	drinkLoc=$("#drinkLoc").val();
	if(drinkLoc){
	$("."+drinkLoc).show()
	
}
})
}
)