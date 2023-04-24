var rangeInput = document.getElementById("hours");
var salesElement = document.getElementById("sales");
var infoElement = document.getElementById("sales__info");

rangeInput.addEventListener("input", function() {
  var rangeValue = rangeInput.value;
  
  var result = rangeValue * 30;
  
  infoElement.textContent = rangeValue +" horas a 30 €/hora";
  salesElement.textContent = result + " €";
});