//-------------------------
// global variables go here
var points = 0;
var points2 = 0;
var $pointsElem = $("#point");
var $points2Elem = $("#point2");

var name1 = "Nate";
var name2 = "Jessica";
$pointsElem.text(name1 + " " + points);
$points2Elem.text(name2 + " " + points2);
// click function
$("#pic").click(function() {
  points+=1;
  console.log("p1: "+points);
  $pointsElem.text(name1 + " " + points);
});
$("#pic2").click(function() {
  points2+=1;
  console.log("p2: "+points2);
  $points2Elem.text(name2 + " " + points2);
});
