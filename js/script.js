//-------------------------
// global variables go here
var points = 0;
var $pointsElem = $("#point");
var ticker = document.getElementById("#point");
// click function
$("#pic").click(function() {
  points+=1;
  console.log(points);
  $pointsElem.text(points);
});
