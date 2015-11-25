//-------------------------
// global variables go here
var points = 0;
var points2 = 0;
var $pointsElem = $("#point");
var HTMLcat = '<div class="flex" id="point">0</div><div id="cat"><img id="pic" class="flex" src="%img%" width="100px" height="100px" alt="%name%"></div>';
var HTMLlist= '<div class="list-flex">%name%</div>';
var name1 = "Nate";
var name2 = "Jessica";
var current = 0;
var formattedList= "";
var cats = {
  "cats":[
      {
        "name" : "Nate",
        "img" : "img/cat.png",
        "points": 0,
        "index": 0
      },
      {
        "name": "Jessica",
        "img": "img/cat.png",
        "points": 0,
        "index": 1
      },
      {
        "name": "Joey",
        "img": "img/cat.png",
        "points": 0,
        "index": 2
      },
      {
        "name": "Abby",
        "img": "img/cat.png",
        "points": 0,
        "index": 3
      },
      {
        "name": "Spaz",
        "img": "img/cat.png",
        "points": 0,
        "index": 4
      }
    ],
  display: function (){

    for (var i=0; i < cats.cats.length; i++){
      formattedList += HTMLlist.replace("%name%",cats.cats[i].name);
    }
    $('#catNames').append(formattedList);
  }
};
/*$pointsElem.text(name1 + " " + points);
$points2Elem.text(name2 + " " + points2);
// click function
/*$("#pic").click(function(current) {
  cats[current].points+=1;
  console.log("p1: "+points);
  $pointsElem.text(cats[current].name + " " + cats[current].points);
});*/

cats.display();
